import React, { useState } from 'react';
import { CLUES_DATA } from '../data/cluesData';
import { ClueCard } from './ClueCard';
import { 
  AlertTriangle, 
  CheckCircle2, 
  Filter, 
  Sparkles, 
  Compass, 
  Award,
  ArrowRight
} from 'lucide-react';

interface ClueListProps {
  viewedClues: number[];
  onSelectClue: (clueId: number) => void;
  onNavigateToMission: () => void;
  onNavigateToReport: () => void;
}

export const ClueList: React.FC<ClueListProps> = ({
  viewedClues,
  onSelectClue,
  onNavigateToMission,
  onNavigateToReport,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'sns' | 'media' | 'social' | 'official'>('all');

  const filteredClues = CLUES_DATA.filter((clue) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'sns') return clue.mediaType === 'instagram' || clue.mediaType === 'personal_blog';
    if (filterCategory === 'media') return clue.mediaType === 'youtube' || clue.mediaType === 'online_news';
    if (filterCategory === 'social') return clue.mediaType === 'community' || clue.mediaType === 'messenger';
    if (filterCategory === 'official') return clue.mediaType === 'old_webpage' || clue.mediaType === 'public_agency';
    return true;
  });

  const viewedCount = viewedClues.length;

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 space-y-6">
      {/* Top Navigation & Mission Reminder Bar */}
      <div className="bg-[#0f172a] text-white rounded-3xl p-6 md:p-8 border-2 border-amber-400/30 shadow-lg relative overflow-hidden">
        <div className="absolute right-0 bottom-0 transform translate-x-10 translate-y-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black px-3.5 py-1 rounded-full">
                🔍 8대 매체 자료 탐색 중
              </span>
              <button
                type="button"
                onClick={onNavigateToMission}
                className="text-xs text-slate-300 hover:text-amber-300 underline underline-offset-4 flex items-center gap-1 cursor-pointer"
              >
                <Compass className="w-3.5 h-3.5 text-amber-400" />
                <span>탐정 임무 안내 다시 보기</span>
              </button>
            </div>

            <h2 className="text-xl md:text-2xl font-black tracking-tight text-white">
              8가지 인터넷 매체 자료를 탐색해 보세요!
            </h2>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              SNS 피드, 개인 블로그, 유튜브 영상, 온라인 뉴스 기사, 커뮤니티, 단톡방, 오래된 웹, 공공기관 홈페이지를 열어
              각 매체 화면의 특징과 내용을 꼼꼼히 살펴보세요.
            </p>
          </div>

          {/* Progress & Completion Navigation */}
          <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-3 shrink-0">
            <div className="bg-slate-900/90 px-4 py-2.5 rounded-2xl border border-slate-700 text-xs text-left md:text-right">
              <div className="text-slate-400 text-[11px] font-medium">매체 확인 현황</div>
              <div className="font-black text-lg text-amber-400 tabular-nums flex items-center md:justify-end gap-1.5 mt-0.5">
                <span>{viewedCount} / 8개 확인됨</span>
                {viewedCount === 8 && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 inline" />
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={onNavigateToReport}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs md:text-sm rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>탐색 완료 결과 확인</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Real-world Safety Notice */}
      <div className="bg-amber-50 border border-amber-300 rounded-2xl p-4 text-xs text-amber-900 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
        <span className="flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>[수업용 가상 자료 공지]</strong> 모든 자료는 국어 수업용 가상 자료이며 실제 계정이나 기관의 게시물이 아닙니다. 건강, 날씨, 안전, 분리배출은 실제 공식 자료를 확인해야 합니다.
          </span>
        </span>
        <span className="text-[11px] text-amber-800 font-black shrink-0 bg-amber-200/70 px-2 py-0.5 rounded">
          매체 8종 완비
        </span>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/80 rounded-xl text-xs font-bold">
          <button
            type="button"
            onClick={() => setFilterCategory('all')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterCategory === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            전체 8개 매체
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('sns')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterCategory === 'sns'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            SNS · 개인 블로그 (#1, #2)
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('media')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterCategory === 'media'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            유튜브 영상 · 뉴스 기사 (#3, #4)
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('social')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterCategory === 'social'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            커뮤니티 · 메신저 단톡방 (#5, #6)
          </button>
          <button
            type="button"
            onClick={() => setFilterCategory('official')}
            className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
              filterCategory === 'official'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            오래된 웹 · 공공기관 (#7, #8)
          </button>
        </div>

        <div className="text-xs text-slate-500 font-semibold flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>매체별 고유 프리뷰 카드</span>
        </div>
      </div>

      {/* Clue Card Grid (8 Items) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredClues.map((clue) => {
          const isViewed = viewedClues.includes(clue.id);

          return (
            <ClueCard
              key={clue.id}
              clue={clue}
              isViewed={isViewed}
              onClick={() => onSelectClue(clue.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
