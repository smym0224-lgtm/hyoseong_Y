import React, { useEffect } from 'react';
import { ClueItem } from '../types/detective';
import { InstagramView } from './media_views/InstagramView';
import { PersonalBlogView } from './media_views/PersonalBlogView';
import { YouTubeView } from './media_views/YouTubeView';
import { OnlineNewsView } from './media_views/OnlineNewsView';
import { CommunityView } from './media_views/CommunityView';
import { MessengerView } from './media_views/MessengerView';
import { OldWebpageView } from './media_views/OldWebpageView';
import { PublicAgencyView } from './media_views/PublicAgencyView';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  List, 
  CheckCircle2
} from 'lucide-react';

interface ClueDetailViewProps {
  clue: ClueItem;
  onNavigateClue: (clueId: number) => void;
  onBackToList: () => void;
  totalCluesCount: number;
}

export const ClueDetailView: React.FC<ClueDetailViewProps> = ({
  clue,
  onNavigateClue,
  onBackToList,
  totalCluesCount,
}) => {
  // Scroll to top whenever the viewed media changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [clue.id]);

  const renderMediaContent = () => {
    switch (clue.id) {
      case 1:
        return <InstagramView />;
      case 2:
        return <PersonalBlogView />;
      case 3:
        return <YouTubeView />;
      case 4:
        return <OnlineNewsView />;
      case 5:
        return <CommunityView />;
      case 6:
        return <MessengerView />;
      case 7:
        return <OldWebpageView />;
      case 8:
        return <PublicAgencyView />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-8 space-y-6">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
        <button
          type="button"
          onClick={onBackToList}
          className="inline-flex items-center gap-1.5 text-xs md:text-sm font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 px-3.5 py-2 rounded-xl transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>매체 목록으로 돌아가기</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-black bg-amber-400 text-slate-950 px-3 py-1 rounded-full shadow-2xs">
            매체 {clue.id} / {totalCluesCount}
          </span>
          <span className="text-xs text-slate-700 font-bold hidden sm:inline">
            {clue.mediaLabel}
          </span>
        </div>

        {/* Quick Prev / Next Buttons */}
        <div className="flex items-center gap-1.5">
          {clue.id > 1 && (
            <button
              type="button"
              onClick={() => onNavigateClue(clue.id - 1)}
              className="px-2.5 py-1.5 border border-slate-200 hover:bg-slate-100 rounded-lg text-xs font-bold text-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
              title="이전 매체"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">이전 매체</span>
            </button>
          )}
          {clue.id < totalCluesCount && (
            <button
              type="button"
              onClick={() => onNavigateClue(clue.id + 1)}
              className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 text-amber-300 rounded-lg text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
              title="다음 매체"
            >
              <span className="hidden sm:inline">다음 매체</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Realistic Simulated Media Screen Only */}
      <div>
        {renderMediaContent()}
      </div>

      {/* Bottom Navigation Strip */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between gap-3 shadow-xs">
        <div>
          {clue.id > 1 ? (
            <button
              type="button"
              onClick={() => onNavigateClue(clue.id - 1)}
              className="px-4 py-2.5 border border-slate-300 hover:bg-slate-100 text-slate-700 text-xs md:text-sm font-bold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>이전 매체 (#{clue.id - 1})</span>
            </button>
          ) : (
            <div />
          )}
        </div>

        <button
          type="button"
          onClick={onBackToList}
          className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs md:text-sm font-extrabold rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <List className="w-4 h-4" />
          <span>매체 목록 보기</span>
        </button>

        <div>
          {clue.id < totalCluesCount ? (
            <button
              type="button"
              onClick={() => onNavigateClue(clue.id + 1)}
              className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-300 text-xs md:text-sm font-extrabold rounded-xl flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
            >
              <span>다음 매체 (#{clue.id + 1})</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={onBackToList}
              className="px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs md:text-sm font-black rounded-xl flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>모든 매체 확인 완료</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
