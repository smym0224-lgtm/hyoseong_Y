import React, { useState, useEffect } from 'react';
import { CLUES_DATA } from '../data/cluesData';
import { CredibilityType } from '../types/detective';
import { 
  Award, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  ArrowLeft, 
  Share2, 
  ShieldCheck, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface FinalReportViewProps {
  onBackToList: () => void;
  onResetAll: () => void;
}

export const FinalReportView: React.FC<FinalReportViewProps> = ({
  onBackToList,
  onResetAll,
}) => {
  // Load saved student verdicts & notes
  const [records, setRecords] = useState<{
    [id: number]: { verdict: CredibilityType | null; note: string };
  }>({});
  const [reflection, setReflection] = useState('');
  const [isSavedReflection, setIsSavedReflection] = useState(false);

  useEffect(() => {
    // Confetti effect on landing
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    // Load data from localStorage
    const loadedRecords: { [id: number]: { verdict: CredibilityType | null; note: string } } = {};
    CLUES_DATA.forEach((clue) => {
      const v = localStorage.getItem(`clue_verdict_${clue.id}`);
      const n = localStorage.getItem(`clue_note_${clue.id}`);
      loadedRecords[clue.id] = {
        verdict: v ? (v as CredibilityType) : null,
        note: n || '',
      };
    });
    setRecords(loadedRecords);

    const savedRef = localStorage.getItem('detective_final_reflection');
    if (savedRef) {
      setReflection(savedRef);
    }
  }, []);

  const handleReflectionChange = (val: string) => {
    setReflection(val);
    try {
      localStorage.setItem('detective_final_reflection', val);
      setIsSavedReflection(true);
      setTimeout(() => setIsSavedReflection(false), 2000);
    } catch (e) {
      console.warn(e);
    }
  };

  const judgedCount = Object.values(records).filter((r) => r.verdict !== null).length;

  const getVerdictBadge = (verdict: CredibilityType | null) => {
    switch (verdict) {
      case 'trustworthy':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-black bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>신뢰할 만함</span>
          </span>
        );
      case 'needs_verification':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-black bg-amber-100 text-amber-900 px-2.5 py-0.5 rounded-full">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>추가 확인 필요</span>
          </span>
        );
      case 'unreliable':
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-black bg-rose-100 text-rose-800 px-2.5 py-0.5 rounded-full">
            <XCircle className="w-3.5 h-3.5" />
            <span>신뢰하기 어려움</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full">
            미판단
          </span>
        );
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-7">
      {/* Top Banner / Completion Header */}
      <div className="bg-[#0f172a] text-white p-6 sm:p-8 rounded-3xl border-2 border-amber-400 shadow-xl relative overflow-hidden text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-3xl mx-auto shadow-md">
          🏆
        </div>

        <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black px-4 py-1 rounded-full">
          <span>정보탐정단 수사 완료 보고서</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">
          모든 사건 파일의 수사를 마쳤습니다!
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          8가지 다양한 매체 자료를 직접 탐색하고, 출처와 근거를 바탕으로 신뢰성을 판단한 나의 탐정 수사 결과를 확인해 보세요.
        </p>

        <div className="pt-2">
          <span className="text-xs font-bold bg-slate-800 text-amber-300 border border-slate-700 px-4 py-1.5 rounded-full">
            총 8개 매체 중 <strong className="text-white font-extrabold">{judgedCount}개</strong> 확인 완료
          </span>
        </div>
      </div>

      {/* 8 Clues Investigation Summary Table / Grid */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
            <span>📋</span>
            <span>8대 매체 자료별 탐정 수사 기록 요약</span>
          </h2>
          <span className="text-xs text-slate-500">학생 기록 데이터</span>
        </div>

        <div className="divide-y divide-slate-100">
          {CLUES_DATA.map((clue) => {
            const record = records[clue.id] || { verdict: null, note: '' };

            return (
              <div key={clue.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1 sm:max-w-lg">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-slate-900 text-white font-black text-[11px] flex items-center justify-center shrink-0">
                      #{clue.id}
                    </span>
                    <span className="text-xs font-bold text-slate-500">{clue.mediaLabel}</span>
                    <span className="text-xs font-bold text-slate-900 line-clamp-1">{clue.title}</span>
                  </div>
                  {record.note ? (
                    <p className="text-xs text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200 italic">
                      “{record.note}”
                    </p>
                  ) : (
                    <p className="text-xs text-slate-400">
                      작성된 탐정 메모 없음
                    </p>
                  )}
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <span className="text-xs text-slate-500 font-medium">나의 판단:</span>
                  {getVerdictBadge(record.verdict)}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Final Reflection Question (from prompt: "허위정보가 어떤 문제를 일으킬 수 있는지 알아봅시다!") */}
      <div className="bg-amber-50/80 border-2 border-amber-300 rounded-3xl p-6 sm:p-7 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="text-base font-black text-amber-950">
                [탐정 마무리 질문] 허위정보는 사람들에게 어떤 문제를 일으킬 수 있을까요?
              </h3>
              <p className="text-xs text-amber-800">
                수사한 8가지 사례를 떠올리며 허위정보가 생겼을 때 어떤 피해나 혼란이 생기는지 적어보세요.
              </p>
            </div>
          </div>
          {isSavedReflection && (
            <span className="text-xs text-emerald-700 font-bold bg-emerald-100 px-3 py-1 rounded-full">
              저장됨
            </span>
          )}
        </div>

        <textarea
          value={reflection}
          onChange={(e) => handleReflectionChange(e.target.value)}
          rows={3}
          placeholder="예: '잘못된 건강 정보를 믿고 따라 하면 몸이 상할 수 있고, 가짜 무료 이벤트에 참여하면 개인정보가 유출될 수 있습니다. 또 학교 휴업 소문처럼 확인되지 않은 말이 퍼지면 많은 사람이 헛걸음을 하거나 혼란을 겪게 됩니다.'"
          className="w-full bg-white border border-amber-300 rounded-2xl p-4 text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-200 leading-relaxed"
        />
      </div>

      {/* Media Literacy Certificate */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl border-2 border-amber-400/40 shadow-lg text-center space-y-3">
        <div className="inline-flex items-center gap-1.5 text-amber-300 text-xs font-bold">
          <Sparkles className="w-4 h-4 text-amber-400" />
          <span>초등학교 5학년 국어과 미디어 리터러시</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-white">
          🎉 명예 정보탐정 인증
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
          “인터넷 매체의 화려한 겉모습에 속지 않고, 출처와 근거를 꼼꼼히 확인하여 올바른 정보를 판별하는 훌륭한 탐정의 눈을 길렀습니다!”
        </p>
      </div>

      {/* Action Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
        <button
          type="button"
          onClick={onBackToList}
          className="w-full sm:w-auto px-5 py-3 border border-slate-300 hover:bg-slate-100 text-slate-800 text-xs sm:text-sm font-extrabold rounded-2xl transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>매체 목록 다시 살펴보기</span>
        </button>

        <button
          type="button"
          onClick={onResetAll}
          className="w-full sm:w-auto px-5 py-3 text-rose-600 hover:bg-rose-50 border border-rose-200 text-xs sm:text-sm font-extrabold rounded-2xl transition-colors cursor-pointer flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          <span>처음부터 다시 수사하기 (초기화)</span>
        </button>
      </div>
    </div>
  );
};
