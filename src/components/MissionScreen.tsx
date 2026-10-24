import React from 'react';
import { 
  Compass, 
  ArrowRight, 
  ArrowLeft,
  Share2,
  FileText,
  Play,
  Newspaper,
  Users,
  MessageCircle,
  HardDrive,
  Shield
} from 'lucide-react';

interface MissionScreenProps {
  onProceedToClues: () => void;
  onBackToIntro: () => void;
}

export const MissionScreen: React.FC<MissionScreenProps> = ({
  onProceedToClues,
  onBackToIntro,
}) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 md:py-10 space-y-6">
      {/* Top Header Card */}
      <div className="bg-[#0f172a] text-white p-6 sm:p-8 rounded-3xl border-2 border-amber-400/30 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/40 text-xs font-black px-3.5 py-1 rounded-full">
              <Compass className="w-4 h-4 text-amber-400" />
              <span>정보탐정단 수사 임무 안내</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              🕵️ 8가지 인터넷 매체 자료 살펴보기
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              인터넷에서 만날 수 있는 8가지 서로 다른 매체 화면을 직접 관찰하고 탐색해 봅시다.
            </p>
          </div>

          <button
            type="button"
            onClick={onProceedToClues}
            className="self-start md:self-center px-6 py-3.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <span>매체 목록 살펴보기</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 8 Media Types Preview Grid */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-6 shadow-xs space-y-4">
        <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
          <span>📁</span>
          <span>우리가 탐색할 8가지 매체 자료</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-1">
            <div className="text-2xl">📱</div>
            <div className="font-bold text-slate-900">매체 1. SNS 게시물</div>
            <div className="text-[11px] text-slate-500">인스타그램 피드</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-1">
            <div className="text-2xl">🌱</div>
            <div className="font-bold text-slate-900">매체 2. 개인 블로그</div>
            <div className="text-[11px] text-slate-500">초록생활 기록장</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-1">
            <div className="text-2xl">▶️</div>
            <div className="font-bold text-slate-900">매체 3. 유튜브 영상</div>
            <div className="text-[11px] text-slate-500">신기한 과학 이야기</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-1">
            <div className="text-2xl">📰</div>
            <div className="font-bold text-slate-900">매체 4. 뉴스 기사</div>
            <div className="text-[11px] text-slate-500">오늘의 이슈 속보</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-1">
            <div className="text-2xl">💬</div>
            <div className="font-bold text-slate-900">매체 5. 커뮤니티</div>
            <div className="text-[11px] text-slate-500">스튜던트톡 자유게시판</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-1">
            <div className="text-2xl">🟡</div>
            <div className="font-bold text-slate-900">매체 6. 메신저 단톡방</div>
            <div className="text-[11px] text-slate-500">5-1반 친구들 대화</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-1">
            <div className="text-2xl">💾</div>
            <div className="font-bold text-slate-900">매체 7. 오래된 웹</div>
            <div className="text-[11px] text-slate-500">2019년 생활정보 웹진</div>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-3 text-center space-y-1">
            <div className="text-2xl">🏛️</div>
            <div className="font-bold text-slate-900">매체 8. 공공기관</div>
            <div className="text-[11px] text-slate-500">바른건강정보센터</div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={onBackToIntro}
          className="px-4 py-2.5 text-xs sm:text-sm font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 rounded-xl transition-colors cursor-pointer flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>시작 화면으로 돌아가기</span>
        </button>

        <button
          type="button"
          onClick={onProceedToClues}
          className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-sm sm:text-base rounded-2xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>매체 목록 확인하기 (8종)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
