import React from 'react';
import { RotateCcw, List, Compass, Award } from 'lucide-react';
import { ScreenView } from '../types/detective';

interface HeaderProps {
  currentView: ScreenView;
  viewedCount: number;
  totalCount: number;
  onNavigateToMission: () => void;
  onNavigateToList: () => void;
  onNavigateToReport: () => void;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  viewedCount,
  totalCount,
  onNavigateToMission,
  onNavigateToList,
  onNavigateToReport,
  onReset,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-2xs">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Zone */}
        <div 
          onClick={onNavigateToList}
          className="flex items-center gap-2.5 cursor-pointer shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-900 text-amber-300 flex items-center justify-center font-bold text-lg shadow-sm border border-amber-400/40">
            🕵️
          </div>
          <div>
            <div className="font-black text-sm sm:text-base text-slate-900 tracking-tight leading-tight flex items-center gap-1.5">
              <span>정보탐정단</span>
              <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.2 rounded font-bold">5학년 국어</span>
            </div>
            <div className="text-[11px] text-slate-500 hidden sm:block">
              “이 정보, 믿어도 될까?” 인터넷 속 정보의 비밀을 밝혀라!
            </div>
          </div>
        </div>

        {/* Center Progress Strip */}
        <div className="flex items-center gap-2 bg-slate-100 px-3.5 py-1.5 rounded-full text-xs font-semibold">
          <span className="text-slate-600">확인한 매체:</span>
          <span className="font-black text-amber-600 tabular-nums">
            {viewedCount} / {totalCount}개 확인
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {currentView !== 'mission' && (
            <button
              type="button"
              onClick={onNavigateToMission}
              className="px-2.5 sm:px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
              title="임무 안내"
            >
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span className="hidden md:inline">임무 안내</span>
            </button>
          )}

          {currentView !== 'list' && (
            <button
              type="button"
              onClick={onNavigateToList}
              className="px-2.5 sm:px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors cursor-pointer"
              title="매체 목록"
            >
              <List className="w-3.5 h-3.5" />
              <span className="hidden md:inline">매체 목록</span>
            </button>
          )}

          {currentView !== 'report' && (
            <button
              type="button"
              onClick={onNavigateToReport}
              className="px-2.5 sm:px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-slate-950 rounded-xl text-xs font-black flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
              title="최종 결과"
            >
              <Award className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">최종 결과</span>
            </button>
          )}

          {/* Reset button */}
          <button
            type="button"
            onClick={onReset}
            title="처음 시작 화면으로 리셋"
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
};
