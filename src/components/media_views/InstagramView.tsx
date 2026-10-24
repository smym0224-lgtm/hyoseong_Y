import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, CheckCircle } from 'lucide-react';
import { VirtualMaterialDisclaimer } from '../VirtualMaterialDisclaimer';

export const InstagramView: React.FC = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(1482);
  const [saved, setSaved] = useState(false);
  const [showAllComments, setShowAllComments] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(prev => prev - 1);
    } else {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Educational Safety Disclaimer */}
      <VirtualMaterialDisclaimer type="health" clueNumber={1} />

      {/* Instagram Post Container */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
        {/* Instagram Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 p-[2px]">
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center font-bold text-sm text-purple-700">
                🫐
              </div>
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <span>daily_health_info</span>
                <span className="text-[11px] font-semibold text-blue-600 cursor-pointer">· 팔로우</span>
              </div>
              <div className="text-[11px] text-slate-500">매일 건강 상식 & 웰빙 가이드</div>
            </div>
          </div>
          <MoreHorizontal className="w-5 h-5 text-slate-500 cursor-pointer" />
        </div>

        {/* Card Graphic: Simulated Instagram Carousel/Card */}
        <div className="relative aspect-square bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white p-7 flex flex-col justify-between overflow-hidden select-none">
          {/* Subtle Blueberry Decorative Backdrop */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Top Tag */}
          <div className="flex items-center justify-between relative z-10">
            <span className="bg-purple-600/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide flex items-center gap-1.5">
              <span>👀 눈 건강 긴급 리포트</span>
            </span>
            <span className="text-xs bg-black/40 px-2 py-0.5 rounded-md font-mono text-slate-300">
              1 / 4
            </span>
          </div>

          {/* Central Impact Graphic */}
          <div className="text-center my-auto relative z-10 space-y-3">
            <div className="text-5xl animate-bounce duration-1000">🫐👓✨</div>
            <div className="inline-block bg-yellow-400 text-slate-950 font-black text-xs px-3 py-1 rounded-md tracking-wider">
              놀라운 기적의 과일?!
            </div>
            <h2 className="text-2xl sm:text-3xl font-black leading-snug tracking-tight text-white drop-shadow-md">
              “블루베리 매일 먹으면<br />
              <span className="text-yellow-300 underline decoration-wavy decoration-yellow-400">
                안경 벗을 수 있다?!
              </span>”
            </h2>
            <p className="text-xs sm:text-sm text-purple-200/90 font-medium max-w-sm mx-auto leading-relaxed">
              컴퓨터·스마트폰으로 떨어진 시력, 수술 없이 하루 한 줌으로 1.5 회복 가능?!
            </p>
          </div>

          {/* Bottom Swipe Bar */}
          <div className="flex items-center justify-between text-xs text-purple-300/80 relative z-10 pt-2 border-t border-white/10">
            <span>자세한 내용은 본문 참조 👇</span>
            <span className="font-semibold">옆으로 넘겨보기 〉</span>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="px-4 pt-3 pb-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <button 
                type="button" 
                onClick={toggleLike}
                className="hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                aria-label="좋아요"
              >
                <Heart className={`w-6 h-6 ${liked ? 'fill-rose-500 text-rose-500' : 'text-slate-800'}`} />
              </button>
              <button type="button" className="hover:opacity-70 transition-opacity cursor-pointer" aria-label="댓글">
                <MessageCircle className="w-6 h-6 text-slate-800" />
              </button>
              <button type="button" className="hover:opacity-70 transition-opacity cursor-pointer" aria-label="공유">
                <Send className="w-6 h-6 text-slate-800" />
              </button>
            </div>
            <button 
              type="button" 
              onClick={() => setSaved(!saved)}
              className="hover:scale-110 transition-transform cursor-pointer"
              aria-label="저장"
            >
              <Bookmark className={`w-6 h-6 ${saved ? 'fill-slate-800 text-slate-800' : 'text-slate-800'}`} />
            </button>
          </div>

          {/* Likes */}
          <div className="font-bold text-sm text-slate-900 mb-2">
            좋아요 {likeCount.toLocaleString()}개
          </div>

          {/* Caption & Post Content */}
          <div className="text-sm text-slate-800 leading-relaxed space-y-2 mb-3">
            <div>
              <span className="font-bold mr-1.5 text-slate-900">daily_health_info</span>
              <span>
                블루베리에 보라색 색소 성분인 ‘안토시아닌’이 듬뿍 들어있다는 사실, 다들 아시죠? 🫐
                안토시아닌은 망막의 로돕신 색소 재합성을 촉진하는 강력한 항산화 성분입니다.
              </span>
            </div>
            <p>
              놀랍게도 매일 아침 블루베리를 한 줌씩 꾸준히 챙겨 먹기만 하면,
              <strong className="text-purple-700 bg-purple-50 px-1 mx-0.5 rounded">
                이미 나빠진 시력도 마법처럼 다시 회복되어 안경을 완전히 벗을 수 있습니다!
              </strong>
              스마트폰 때문에 눈 침침했던 분들, 라식 수술 고민하시던 분들은 오늘부터 당장 냉동 블루베리 쟁여두세요! 🏃‍♂️💨
            </p>
            <div className="text-blue-900 font-medium text-xs pt-1 space-x-1.5">
              <span>#블루베리</span>
              <span>#시력회복</span>
              <span>#안경탈출</span>
              <span>#눈건강</span>
              <span>#꿀팁공유</span>
              <span>#건강상식</span>
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-2 pt-2.5 border-t border-slate-100 text-xs">
            <button
              type="button"
              onClick={() => setShowAllComments(!showAllComments)}
              className="text-slate-400 hover:text-slate-600 font-medium cursor-pointer"
            >
              {showAllComments ? '댓글 접기' : '댓글 128개 모두 보기'}
            </button>

            {/* Comment 1 (from user prompt) */}
            <div className="flex items-start gap-2">
              <span className="font-bold text-slate-900 shrink-0">berry_love_21:</span>
              <span className="text-slate-700">저도 오늘부터 매일 먹어 봐야겠어요! 대박이네요 🫐</span>
            </div>

            {/* Comment 2 (from user prompt) */}
            <div className="flex items-start gap-2">
              <span className="font-bold text-slate-900 shrink-0">eye_saver:</span>
              <span className="text-slate-700">정말 시력이 좋아지나요? 안경 도수가 -3.5인데 진짜 벗을 수 있을까요?</span>
            </div>

            {showAllComments && (
              <>
                <div className="flex items-start gap-2 pl-3 border-l-2 border-purple-200">
                  <span className="font-bold text-purple-700 shrink-0">daily_health_info (작성자):</span>
                  <span className="text-slate-700">@eye_saver 꾸준함이 생명입니다! 최소 3달 드셔보시면 세상이 달라 보여요!</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-slate-900 shrink-0">curious_student:</span>
                  <span className="text-slate-700">의사 선생님 논문이나 실제 연구 결과 출처 링크는 어디서 볼 수 있나요??</span>
                </div>
              </>
            )}
          </div>

          <div className="text-[11px] text-slate-400 py-3">
            2026년 10월 18일 게시됨 · 인스타그램 추천 피드
          </div>
        </div>
      </div>
    </div>
  );
};
