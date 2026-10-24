import React, { useState, useEffect } from 'react';
import { CLUES_DATA } from './data/cluesData';
import { ScreenView } from './types/detective';
import { Header } from './components/Header';
import { IntroScreen } from './components/IntroScreen';
import { MissionScreen } from './components/MissionScreen';
import { ClueList } from './components/ClueList';
import { ClueDetailView } from './components/ClueDetailView';
import { FinalReportView } from './components/FinalReportView';

const STORAGE_VIEWED_KEY = 'hyoseong_clues_viewed_v3';

export default function App() {
  // Always begin on the detective intro screen as requested
  const [currentView, setCurrentView] = useState<ScreenView>('intro');
  const [selectedClueId, setSelectedClueId] = useState<number>(1);
  const [viewedClues, setViewedClues] = useState<number[]>([]);

  // Load viewed clues from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_VIEWED_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setViewedClues(parsed);
        }
      }
    } catch (e) {
      console.warn('LocalStorage load error', e);
    }
  }, []);

  // Save viewed clues whenever changed
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_VIEWED_KEY, JSON.stringify(viewedClues));
    } catch (e) {
      console.warn('LocalStorage save error', e);
    }
  }, [viewedClues]);

  // Flow step 1 -> step 2
  const handleStartMission = () => {
    setCurrentView('mission');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Flow step 2 -> step 3
  const handleProceedToClues = () => {
    setCurrentView('list');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Flow step 3 -> step 4
  const handleSelectClue = (clueId: number) => {
    setSelectedClueId(clueId);
    if (!viewedClues.includes(clueId)) {
      setViewedClues((prev) => [...prev, clueId]);
    }
    setCurrentView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Flow step 4/3 -> step 5
  const handleGoToReport = () => {
    setCurrentView('report');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleReset = () => {
    const confirmed = window.confirm(
      '모든 수사 기록과 판단을 초기화하고 처음 시작 화면으로 돌아가시겠습니까?'
    );
    if (confirmed) {
      try {
        localStorage.removeItem(STORAGE_VIEWED_KEY);
        localStorage.removeItem('detective_final_reflection');
        CLUES_DATA.forEach((clue) => {
          localStorage.removeItem(`clue_verdict_${clue.id}`);
          localStorage.removeItem(`clue_note_${clue.id}`);
        });
      } catch (e) {
        console.warn(e);
      }
      setViewedClues([]);
      setSelectedClueId(1);
      setCurrentView('intro');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentClueItem = CLUES_DATA.find((c) => c.id === selectedClueId) || CLUES_DATA[0];

  return (
    <div className="min-h-screen bg-slate-100/70 text-slate-900 flex flex-col font-sans">
      {/* Header is shown on all screens except the intro screen */}
      {currentView !== 'intro' && (
        <Header
          currentView={currentView}
          viewedCount={viewedClues.length}
          totalCount={CLUES_DATA.length}
          onNavigateToMission={() => {
            setCurrentView('mission');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateToList={() => {
            setCurrentView('list');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          onNavigateToReport={handleGoToReport}
          onReset={handleReset}
        />
      )}

      {/* Main Content Area based on 5-step flow */}
      <main className="flex-1">
        {/* 1. 시작 화면 */}
        {currentView === 'intro' && (
          <IntroScreen onStart={handleStartMission} />
        )}

        {/* 2. 탐정 임무 안내 */}
        {currentView === 'mission' && (
          <MissionScreen
            onProceedToClues={handleProceedToClues}
            onBackToIntro={() => setCurrentView('intro')}
          />
        )}

        {/* 3. 다양한 매체 자료 탐색 (8종) */}
        {currentView === 'list' && (
          <ClueList
            viewedClues={viewedClues}
            onSelectClue={handleSelectClue}
            onNavigateToMission={() => setCurrentView('mission')}
            onNavigateToReport={handleGoToReport}
          />
        )}

        {/* 4. 매체 상세 화면 */}
        {currentView === 'detail' && (
          <ClueDetailView
            clue={currentClueItem}
            totalCluesCount={CLUES_DATA.length}
            onNavigateClue={(id) => handleSelectClue(id)}
            onBackToList={() => setCurrentView('list')}
          />
        )}

        {/* 5. 최종 활동 결과 확인 및 마무리 */}
        {currentView === 'report' && (
          <FinalReportView
            onBackToList={() => setCurrentView('list')}
            onResetAll={handleReset}
          />
        )}
      </main>

      {/* Global Footer (shown on all active activity screens except intro) */}
      {currentView !== 'intro' && (
        <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>초등학교 5학년 국어과 「매체 자료의 신뢰성을 판단하는 방법」 수업용 웹앱</span>
            <span className="text-slate-400">※ 본 앱의 모든 게시물과 사건은 수업용 가상 자료이며, 건강·날씨·안전·분리배출은 실제 공식 자료를 확인해야 합니다.</span>
          </div>
        </footer>
      )}
    </div>
  );
}
