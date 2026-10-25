import React, { useEffect } from 'react';
import { CLUES_DATA } from '../data/cluesData';
import { 
  Award, 
  CheckCircle2, 
  RotateCcw, 
  ArrowLeft, 
  Sparkles,
  ExternalLink
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
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-7">
      {/* Top Banner / Completion Header */}
      <div className="bg-[#0f172a] text-white p-6 sm:p-8 rounded-3xl border-2 border-amber-400 shadow-xl relative overflow-hidden text-center space-y-3">
        <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center text-3xl mx-auto shadow-md">
          🏆
        </div>

        <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black px-4 py-1 rounded-full">
          <span>정보탐정단 매체 탐색 완료 보고서</span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-black text-white">
          6가지 인터넷 매체 자료의 탐색을 모두 마쳤습니다!
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          SNS 피드, 개인 블로그, 유튜브, 뉴스 기사, 커뮤니티, 공공기관 등
          다양한 매체 화면의 특징과 정보를 꼼꼼히 확인했습니다.
        </p>

        <div className="pt-2">
          <span className="text-xs font-bold bg-slate-800 text-amber-300 border border-slate-700 px-4 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>총 6개 매체 자료 탐색 완료</span>
          </span>
        </div>
      </div>

      {/* 6 Media Exploration Summary List */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
            <span>📋</span>
            <span>6대 매체 자료 목록 및 특징 요약</span>
          </h2>
          <span className="text-xs text-slate-500 font-medium">초등 5학년 국어과</span>
        </div>

        <div className="divide-y divide-slate-100">
          {CLUES_DATA.map((clue) => {
            return (
              <div key={clue.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1 sm:max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-slate-900 text-white font-black text-[11px] flex items-center justify-center shrink-0">
                      #{clue.id}
                    </span>
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {clue.mediaLabel}
                    </span>
                    <span className="text-xs font-bold text-slate-900 line-clamp-1">{clue.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 pl-7 leading-relaxed">
                    {clue.summary}
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-1.5 text-xs text-emerald-700 font-bold bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full self-start sm:self-auto">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>확인 완료</span>
                </div>
              </div>
            );
          })}
        </div>
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
          <span>처음부터 다시 시작하기 (초기화)</span>
        </button>
      </div>
    </div>
  );
};
