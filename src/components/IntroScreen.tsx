import React from 'react';
import { 
  Search, 
  FileText, 
  Fingerprint, 
  Compass, 
  Sparkles, 
  Share2, 
  Play, 
  Newspaper, 
  MessageCircle,
  HelpCircle,
  ShieldAlert
} from 'lucide-react';

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-[#0d1527] text-white flex flex-col justify-between relative overflow-hidden select-none font-sans">
      {/* Background Ambience: Detective office desk lighting & soft glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      {/* Detective Office Floating Clue Cards (Scattered around, not distracting) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {/* Floating Item 1: SNS Card (Top Left) */}
        <div className="absolute top-16 left-12 lg:left-24 bg-slate-900/80 border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md rotate-[-8deg] w-48 opacity-85 animate-pulse duration-3000">
          <div className="flex items-center gap-2 mb-1.5 text-[11px] text-pink-400 font-bold">
            <Share2 className="w-3.5 h-3.5" />
            <span>SNS 제보 #01</span>
          </div>
          <div className="text-xs font-bold text-slate-200">“매일 먹으면 시력 회복?!”</div>
          <div className="text-[10px] text-amber-300/80 mt-1">⚠️ 출처 불명확 의심</div>
        </div>

        {/* Floating Item 2: News Article Clipping (Top Right) */}
        <div className="absolute top-20 right-12 lg:right-28 bg-slate-900/80 border border-slate-700/80 rounded-2xl p-3.5 shadow-2xl backdrop-blur-md rotate-[6deg] w-52 opacity-85">
          <div className="flex items-center gap-2 mb-1.5 text-[11px] text-red-400 font-bold">
            <Newspaper className="w-3.5 h-3.5" />
            <span>뉴스 속보 스크랩</span>
          </div>
          <div className="text-xs font-bold text-slate-200">“다음 주 전국 40도 육박?”</div>
          <div className="text-[10px] text-slate-400 mt-1 font-mono">기상청 공식 예보인가?</div>
        </div>

        {/* Floating Item 3: Video File (Bottom Left) */}
        <div className="absolute bottom-28 left-16 lg:left-32 bg-slate-900/80 border border-slate-700/80 rounded-2xl p-3 shadow-2xl backdrop-blur-md rotate-[5deg] w-48 opacity-85">
          <div className="flex items-center gap-2 mb-1 text-[11px] text-red-400 font-bold">
            <Play className="w-3.5 h-3.5" />
            <span>미스터리 동영상</span>
          </div>
          <div className="text-xs font-bold text-slate-200">“뇌의 10%만 사용한다?”</div>
          <div className="text-[10px] text-yellow-400 mt-1">조회수 120만 회</div>
        </div>

        {/* Floating Item 4: Detective Memo Sticky Note (Bottom Right) */}
        <div className="absolute bottom-24 right-14 lg:right-32 bg-amber-200 text-slate-900 rounded-xl p-3 shadow-2xl rotate-[-6deg] w-44 opacity-95">
          <div className="flex items-center gap-1.5 text-[11px] font-black text-amber-950 mb-1">
            <span>📝 탐정 수첩 메모</span>
          </div>
          <p className="text-xs font-bold text-slate-800 leading-tight">
            “겉모습이 그럴듯해도 출처와 날짜를 반드시 확인할 것!”
          </p>
        </div>

        {/* Subtle Watermark Elements: Fingerprint & Compass */}
        <Fingerprint className="absolute bottom-10 left-1/4 w-32 h-32 text-slate-800/25 pointer-events-none -rotate-12" />
        <Compass className="absolute top-12 right-1/4 w-28 h-28 text-slate-800/20 pointer-events-none rotate-45" />
      </div>

      {/* Top Bar / Agency Badge */}
      <header className="pt-8 px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 bg-slate-800/90 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wide shadow-lg backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>대한민국 미디어 리터러시 정보수사본부</span>
        </div>
      </header>

      {/* Center Main Stage */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-6 text-center relative z-10 max-w-3xl mx-auto w-full">
        {/* Detective Icon Graphic */}
        <div className="relative mb-5 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-600 flex items-center justify-center text-5xl sm:text-6xl shadow-[0_0_50px_rgba(251,191,36,0.35)] transform hover:scale-105 transition-transform duration-300">
            🕵️‍♂️
          </div>
          <div className="absolute -bottom-2 -right-2 bg-slate-900 border-2 border-amber-400 rounded-full p-2 text-amber-300 shadow-md">
            <Search className="w-5 h-5" />
          </div>
        </div>

        {/* App Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-3">
          정보탐정단
        </h1>

        {/* Main Catchphrase (Yellow highlight) */}
        <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-amber-400 mb-2 drop-shadow-[0_2px_10px_rgba(251,191,36,0.3)]">
          “이 정보, 믿어도 될까?”
        </div>

        {/* Secondary Catchphrase */}
        <div className="text-base sm:text-lg md:text-xl font-bold text-slate-300 mb-6">
          인터넷 속 정보의 비밀을 밝혀라!
        </div>

        {/* Briefing Box with Warm Detective Office Palette */}
        <div className="bg-slate-900/90 border-2 border-amber-400/30 rounded-2xl p-5 sm:p-7 max-w-xl mx-auto mb-8 shadow-2xl backdrop-blur-md text-slate-200 text-sm sm:text-base leading-relaxed text-center space-y-2">
          <p className="font-medium">
            인터넷에는 수많은 정보가 숨어 있어요.
          </p>
          <p className="font-medium">
            그중에는 사실인 정보도 있지만, 사람들을 헷갈리게 하는 <strong className="text-amber-300 underline decoration-amber-400/80 decoration-wavy underline-offset-4">허위정보</strong>도 있어요.
          </p>
          <p className="text-amber-200/90 font-bold pt-1">
            다양한 매체를 살펴보고, 매체의 신뢰성을 판단하는 방법에 대해 알아봅시다!
          </p>
        </div>

        {/* Start Button: [ 🔎 수사 시작하기 ] */}
        <div className="w-full max-w-sm">
          <button
            type="button"
            onClick={onStart}
            className="w-full py-4 sm:py-4.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 hover:from-amber-300 hover:to-yellow-400 text-slate-950 font-black text-lg sm:text-xl rounded-2xl shadow-[0_10px_25px_rgba(251,191,36,0.3)] hover:shadow-[0_15px_35px_rgba(251,191,36,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
          >
            <Search className="w-6 h-6 stroke-[2.5]" />
            <span>수사 시작하기</span>
          </button>
        </div>
      </main>

      {/* Screen Bottom Notice */}
      <footer className="pb-6 text-center text-xs text-slate-400 font-medium relative z-10">
        초등학교 5학년 국어 수업용 활동
      </footer>
    </div>
  );
};
