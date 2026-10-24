import React, { useState } from 'react';
import { Play, Pause, ThumbsUp, ThumbsDown, Share2, Bell, MessageSquare, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { VirtualMaterialDisclaimer } from '../VirtualMaterialDisclaimer';

export const YouTubeView: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(24000);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(c => c - 1);
    } else {
      setLiked(true);
      setLikeCount(c => c + 1);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Educational Safety Disclaimer */}
      <VirtualMaterialDisclaimer type="science" clueNumber={3} />

      {/* YouTube Player & Page Container */}
      <div className="bg-slate-950 text-slate-100 rounded-2xl overflow-hidden shadow-lg border border-slate-800">
        {/* Simulated Video Player Screen */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          {/* Simulated Brain Graphic / Video Frame */}
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-purple-950/80 to-indigo-950 flex flex-col items-center justify-center p-6 text-center select-none">
            {/* Glowing Brain Hologram Visual */}
            <div className="relative mb-3">
              <div className="text-7xl filter drop-shadow-[0_0_20px_rgba(168,85,247,0.7)] animate-pulse">
                🧠⚡
              </div>
              <div className="absolute -inset-4 bg-purple-500/20 rounded-full blur-xl pointer-events-none" />
            </div>

            <div className="bg-red-600/90 text-white font-extrabold text-xs px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              Sci-Mystery Document
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-snug drop-shadow-lg max-w-xl">
              인간은 뇌의 <span className="text-yellow-400 underline decoration-yellow-400">10%만 사용</span>한다?<br />
              잠들어 있는 90%의 초능력을 깨우는 법!
            </h3>

            {isPlaying ? (
              <div className="mt-4 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs text-purple-300">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                <span>나레이션 재생 중: &quot;세계적 천재 아인슈타인도 뇌를 15%밖에 쓰지 못했다는데...&quot;</span>
              </div>
            ) : (
              <div className="mt-3 text-xs text-slate-400">
                (화면을 클릭하여 영상 미리보기 시뮬레이션을 재생하세요)
              </div>
            )}
          </div>

          {/* Video Controls Overlay */}
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-20 w-16 h-16 rounded-full bg-red-600/90 hover:bg-red-600 text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all cursor-pointer"
            aria-label={isPlaying ? '일시정지' : '재생'}
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
          </button>

          {/* Video Progress Bar & Timestamp */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-6 flex items-center justify-between text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <span className="text-white font-mono">{isPlaying ? '03:15' : '00:00'} / 12:45</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-red-600 px-2 py-0.5 rounded text-[11px] font-bold text-white">HD 1080p</span>
            </div>
          </div>
          {/* Red Progress Indicator */}
          <div className="absolute bottom-0 inset-x-0 h-1 bg-slate-700">
            <div className={`h-full bg-red-600 ${isPlaying ? 'w-1/4' : 'w-0'} transition-all duration-300`} />
          </div>
        </div>

        {/* Video Metadata & Description Body */}
        <div className="p-4 sm:p-6 space-y-4">
          {/* Title */}
          <h1 className="text-lg sm:text-xl font-bold text-white leading-snug">
            인간은 뇌의 10%만 사용한다? 숨겨진 능력의 비밀 [신기한 과학 이야기 #142]
          </h1>

          {/* Channel Bar & Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-xl font-bold">
                🔬
              </div>
              <div>
                <div className="font-bold text-sm text-white flex items-center gap-1.5">
                  <span>신기한 과학 이야기</span>
                  <CheckCircle className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <div className="text-xs text-slate-400">구독자 34.2만명</div>
              </div>
              <button
                type="button"
                onClick={() => setIsSubscribed(!isSubscribed)}
                className={`ml-2 px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  isSubscribed
                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    : 'bg-white text-black hover:bg-slate-200'
                }`}
              >
                {isSubscribed ? '구독중' : '구독'}
              </button>
            </div>

            {/* Interaction Buttons */}
            <div className="flex items-center gap-2 self-start sm:self-auto text-xs">
              <div className="flex items-center bg-slate-800 rounded-full overflow-hidden border border-slate-700">
                <button
                  type="button"
                  onClick={toggleLike}
                  className="flex items-center gap-1.5 px-3.5 py-2 hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  <ThumbsUp className={`w-4 h-4 ${liked ? 'text-blue-400 fill-blue-400' : ''}`} />
                  <span className="font-bold">{(likeCount / 1000).toFixed(1)}천</span>
                </button>
                <div className="w-px h-4 bg-slate-700" />
                <button type="button" className="px-3 py-2 hover:bg-slate-700 transition-colors cursor-pointer" aria-label="싫어요">
                  <ThumbsDown className="w-4 h-4" />
                </button>
              </div>

              <button type="button" className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 cursor-pointer">
                <Share2 className="w-4 h-4" />
                <span>공유</span>
              </button>
            </div>
          </div>

          {/* Video Description Box (Crucial for Detection) */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-xs sm:text-sm text-slate-300 space-y-2">
            <div className="flex items-center gap-3 font-semibold text-slate-400 text-xs">
              <span>조회수 1,204,510회</span>
              <span>·</span>
              <span>2026. 10. 10.</span>
              <span className="text-red-400 font-bold">#인간뇌 #뇌10퍼센트 #잠재능력</span>
            </div>

            <p className="leading-relaxed text-slate-200">
              우리는 평생 살아가면서 뇌의 극히 일부분(약 10%)만을 활용하고 있다는 충격적인 사실!<br />
              만약 특별한 집중 훈련과 명상을 통해 나머지 90%의 뇌세포를 깨운다면 누구나 천재가 될 수 있을까요?
              오늘 영상에서 숨겨진 뇌의 비밀을 밝혀드립니다.
            </p>

            {/* The vague source in description box as highlighted by prompt */}
            <div className="pt-2 border-t border-slate-800/80 text-xs">
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-amber-300 font-mono">
                📌 참고 출처: “여러 자료를 바탕으로 제작했습니다.”
              </div>
            </div>

            {showFullDesc && (
              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <p>※ 비즈니스 및 광고 문의: mystery_science@creator.mail</p>
                <p>※ 영상에 사용된 3D 그래픽 라이선스: Envato Elements</p>
                <p>※ 음원: YouTube Audio Library</p>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowFullDesc(!showFullDesc)}
              className="text-xs font-bold text-slate-400 hover:text-white flex items-center gap-1 pt-1 cursor-pointer"
            >
              <span>{showFullDesc ? '간략히' : '더보기'}</span>
              {showFullDesc ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Comments Preview */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-sm font-bold text-white">
              <MessageSquare className="w-4 h-4 text-slate-400" />
              <span>댓글 1,842개</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-white shrink-0">
                  K
                </div>
                <div>
                  <div className="font-bold text-slate-200 flex items-center gap-2">
                    <span>brain_power</span>
                    <span className="text-[11px] text-slate-500">3일 전</span>
                  </div>
                  <p className="text-slate-300 mt-1">
                    와… 진짜 10%만 쓰고 있었다니 소름 돋네요. 나머지 90% 깨우는 훈련 매일 해야겠어요!
                  </p>
                </div>
              </div>

              <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-white shrink-0">
                  S
                </div>
                <div>
                  <div className="font-bold text-slate-200 flex items-center gap-2">
                    <span>science_student</span>
                    <span className="text-[11px] text-slate-500">2일 전</span>
                  </div>
                  <p className="text-slate-300 mt-1">
                    근데 학교 과학 시간에 선생님께서는 뇌 10% 사용설은 낭설이고 MRI 찍어보면 일상에서도 뇌 전체를 다 쓴다고 하셨는데… 출처 논문이 정확히 어디인가요?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
