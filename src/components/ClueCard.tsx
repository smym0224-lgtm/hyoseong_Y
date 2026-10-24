import React from 'react';
import { ClueItem } from '../types/detective';
import { 
  Heart, 
  Play, 
  Newspaper, 
  Users, 
  MessageCircle, 
  HardDrive, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  FileText,
  Calendar,
  Flame,
  CornerDownRight,
  Sparkles
} from 'lucide-react';

interface ClueCardProps {
  clue: ClueItem;
  isViewed: boolean;
  onClick: () => void;
}

export const ClueCard: React.FC<ClueCardProps> = ({
  clue,
  isViewed,
  onClick,
}) => {
  // Render media-specific unique preview content
  const renderMediaPreview = () => {
    switch (clue.mediaType) {
      /* Card 1: Instagram SNS Style Preview */
      case 'instagram':
        return (
          <div className="bg-gradient-to-br from-purple-900 via-indigo-950 to-slate-950 text-white rounded-xl p-3.5 flex flex-col justify-between h-40 border border-purple-500/30 relative overflow-hidden">
            <div className="flex items-center justify-between text-[11px] relative z-10">
              <span className="flex items-center gap-1.5 font-bold text-purple-200">
                <span className="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-400 to-rose-500 flex items-center justify-center text-[10px]">
                  🫐
                </span>
                @daily_health_info
              </span>
              <span className="bg-rose-500/80 px-2 py-0.5 rounded-full text-[10px] font-bold">
                카드뉴스
              </span>
            </div>
            <div className="relative z-10 my-auto text-center">
              <div className="text-2xl mb-1">🫐👓</div>
              <div className="text-xs font-black text-yellow-300 leading-snug line-clamp-2">
                “블루베리 매일 먹으면 안경 벗을 수 있다?!”
              </div>
            </div>
            <div className="flex items-center justify-between text-[11px] text-purple-200/80 relative z-10 pt-1 border-t border-white/10">
              <span className="flex items-center gap-1">
                <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
                <span>1,482</span>
              </span>
              <span>댓글 128개</span>
            </div>
          </div>
        );

      /* Card 2: Personal Blog Style Preview */
      case 'personal_blog':
        return (
          <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-3.5 flex flex-col justify-between h-40">
            <div>
              <div className="flex items-center justify-between text-[11px] text-emerald-800 font-bold mb-1.5">
                <span className="flex items-center gap-1">
                  <span>🌱 초록생활 기록장</span>
                </span>
                <span className="bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded text-[10px]">
                  개인 블로그
                </span>
              </div>
              <div className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                페트병 뚜껑, 꼭 따로 버려야 할까요?
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white/80 p-2 rounded-lg border border-emerald-100 text-[11px] text-slate-600">
              <span className="text-lg">🚯🧴</span>
              <span className="line-clamp-1 font-medium">단계별 사진과 상세 경험담</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-emerald-100">
              <span>2026.09.12.</span>
              <span>공감 86 · 조회 3,840</span>
            </div>
          </div>
        );

      /* Card 3: YouTube Video Style Preview */
      case 'youtube':
        return (
          <div className="bg-slate-950 text-white rounded-xl overflow-hidden flex flex-col justify-between h-40 border border-slate-800">
            <div className="relative h-24 bg-gradient-to-tr from-slate-900 to-purple-950 flex items-center justify-center">
              <div className="text-3xl filter drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                🧠⚡
              </div>
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                  <Play className="w-4 h-4 ml-0.5 fill-white" />
                </div>
              </div>
              <span className="absolute bottom-1 right-1.5 bg-black/80 text-[10px] px-1.5 py-0.5 rounded font-mono">
                12:45
              </span>
            </div>
            <div className="p-2 space-y-0.5 bg-slate-900">
              <div className="text-[11px] font-bold text-white line-clamp-1">
                인간은 뇌의 10%만 사용한다?
              </div>
              <div className="text-[10px] text-slate-400 flex items-center justify-between">
                <span>신기한 과학 이야기</span>
                <span>조회수 120만회</span>
              </div>
            </div>
          </div>
        );

      /* Card 4: Online Newspaper Style Preview */
      case 'online_news':
        return (
          <div className="bg-white border-2 border-slate-300 rounded-xl p-3.5 flex flex-col justify-between h-40 font-serif">
            <div>
              <div className="flex items-center justify-between text-[11px] font-sans pb-1 mb-1 border-b border-red-500">
                <span className="font-black text-slate-900">오늘의 이슈</span>
                <span className="bg-red-600 text-white font-black text-[9px] px-1.5 py-0.2 rounded animate-pulse">
                  속보
                </span>
              </div>
              <div className="text-xs font-black text-slate-900 line-clamp-2 leading-snug">
                다음 주 전국 40도 육박? 역대급 폭염 예고
              </div>
            </div>
            <div className="bg-slate-100 p-1.5 rounded flex items-center gap-2 text-[10px] font-sans text-slate-700">
              <TrendingUp className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span className="line-clamp-1">붉은색 꺾은선그래프 첨부 (출처 미표기)</span>
            </div>
            <div className="flex items-center justify-between text-[10px] font-sans text-slate-500 pt-1 border-t border-slate-100">
              <span>이슈 기자</span>
              <span>2026.07.15</span>
            </div>
          </div>
        );

      /* Card 5: Online Community Style Preview */
      case 'community':
        return (
          <div className="bg-indigo-50/60 border border-indigo-200 rounded-xl p-3.5 flex flex-col justify-between h-40">
            <div>
              <div className="flex items-center justify-between text-[11px] text-indigo-900 font-bold mb-1">
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5 text-indigo-600" />
                  스튜던트톡
                </span>
                <span className="bg-rose-100 text-rose-700 px-1.5 py-0.5 rounded text-[10px] font-bold">
                  [이벤트]
                </span>
              </div>
              <div className="text-xs font-black text-slate-900 line-clamp-2 leading-snug">
                선착순 100명! 유명 브랜드 학용품 무료 증정
              </div>
            </div>
            <div className="bg-white/80 p-2 rounded-lg border border-indigo-100 text-[11px] text-amber-900 font-medium flex items-center gap-1.5">
              <span>🎁</span>
              <span className="line-clamp-1">“빨리 신청하세요! 링크 공유합니다”</span>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1 border-t border-indigo-100">
              <span>작성자: lucky_student</span>
              <span className="flex items-center gap-1 text-rose-600 font-bold">
                <Flame className="w-3 h-3" /> 추천 153 · 댓글 28
              </span>
            </div>
          </div>
        );

      /* Card 6: Messenger Chat Style Preview */
      case 'messenger':
        return (
          <div className="bg-[#b2c7da] border border-[#9cb2c4] rounded-xl p-3 flex flex-col justify-between h-40">
            <div className="flex items-center justify-between text-[11px] text-slate-800 font-bold pb-1 border-b border-black/10">
              <span className="flex items-center gap-1">
                <span className="w-4 h-4 rounded-full bg-yellow-400 text-slate-900 text-[9px] flex items-center justify-center font-bold">
                  5-1
                </span>
                5학년 1반 단톡방
              </span>
              <span className="text-[10px] text-slate-600 font-medium">22명</span>
            </div>
            <div className="space-y-1.5 my-auto">
              <div className="bg-white rounded-lg rounded-tl-none p-1.5 text-[11px] text-slate-800 max-w-[85%] shadow-2xs">
                <div className="text-[9px] text-slate-400 flex items-center gap-0.5">
                  <CornerDownRight className="w-2.5 h-2.5" /> 전달됨
                </div>
                <div className="font-bold">“내일 학교 쉰대!”</div>
              </div>
              <div className="bg-white rounded-lg rounded-tl-none p-1.5 text-[11px] text-slate-800 max-w-[85%] shadow-2xs">
                <span>“진짜야? 어디서 들었어?”</span>
              </div>
            </div>
            <div className="text-[10px] text-slate-600 flex items-center justify-between pt-1 border-t border-black/10">
              <span>2026.10.22 20:15</span>
              <span>말풍선 대화형</span>
            </div>
          </div>
        );

      /* Card 7: Retro Webpage Style Preview */
      case 'old_webpage':
        return (
          <div className="bg-[#f0f0f0] border-2 border-[#999999] rounded-xl p-3 flex flex-col justify-between h-40 font-sans shadow-2xs">
            <div className="bg-[#3a506b] text-white p-1 rounded text-[10px] flex items-center justify-between font-mono">
              <span className="flex items-center gap-1">
                <HardDrive className="w-3 h-3 text-yellow-300" />
                테크 &amp; 라이프 팁
              </span>
              <span className="text-yellow-300">[2019]</span>
            </div>
            <div className="bg-white p-2 rounded border border-[#cccccc]">
              <div className="text-[10px] text-red-600 font-bold mb-0.5">[주의경보]</div>
              <div className="text-xs font-bold text-slate-900 line-clamp-2 leading-snug">
                밤새 휴대전화를 충전하면 반드시 폭발한다
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-600 pt-1 border-t border-[#cccccc]">
              <span>작성일: 2019-03-05</span>
              <span className="text-rose-700 font-bold">오래된 자료</span>
            </div>
          </div>
        );

      /* Card 8: Public Agency Style Preview */
      case 'public_agency':
        return (
          <div className="bg-blue-50/80 border-2 border-blue-900/30 rounded-xl p-3.5 flex flex-col justify-between h-40">
            <div className="flex items-center justify-between text-[11px] text-blue-900 font-bold pb-1 border-b border-blue-200">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-blue-700" />
                바른건강정보센터
              </span>
              <span className="bg-blue-700 text-white px-1.5 py-0.5 rounded text-[10px] font-bold">
                공공 보건기관
              </span>
            </div>
            <div>
              <div className="text-xs font-black text-slate-900 line-clamp-2 leading-snug">
                올바른 손 씻기로 감염병 예방하기
              </div>
              <div className="text-[10px] text-blue-800 mt-1 flex items-center gap-1 font-medium">
                <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                <span>6단계 안내 그림 및 WHO/질병관리청 출처</span>
              </div>
            </div>
            <div className="flex items-center justify-between text-[10px] text-slate-600 pt-1 border-t border-blue-200">
              <span>2026.09.30</span>
              <span className="text-emerald-700 font-bold">연구 출처 명시</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
      className={`group text-left bg-white border-2 rounded-2xl p-4 transition-all duration-200 flex flex-col justify-between cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isViewed
          ? 'border-emerald-300 bg-emerald-50/10 shadow-xs hover:shadow-md'
          : 'border-slate-200 hover:border-blue-400 shadow-xs hover:shadow-lg'
      }`}
    >
      <div>
        {/* Card Header Tag Row */}
        <div className="flex items-center justify-between mb-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-6 h-6 rounded-lg bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center">
              #{clue.id}
            </span>
            <span className="text-xs font-bold text-slate-700">
              {clue.mediaLabel}
            </span>
          </div>

          {/* Status Badge */}
          {isViewed ? (
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>확인 완료</span>
            </span>
          ) : (
            <span className="text-[11px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
              🔍 미확인
            </span>
          )}
        </div>

        {/* Media Specific Realistic Preview Component */}
        <div className="mb-3">
          {renderMediaPreview()}
        </div>

        {/* Core summary / feature */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3">
          {clue.summary}
        </p>
      </div>

      <div>
        {/* Badges list */}
        <div className="flex flex-wrap gap-1 mb-3">
          {clue.badges.map((badge, idx) => (
            <span
              key={idx}
              className="text-[10px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md"
            >
              #{badge}
            </span>
          ))}
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
          <span>실제 매체 화면 열기</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
};
