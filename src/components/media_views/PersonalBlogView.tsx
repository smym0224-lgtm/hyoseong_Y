import React, { useState } from 'react';
import { Heart, Share2, Bookmark, Calendar, User, Eye, CheckCircle2, ChevronRight } from 'lucide-react';
import { VirtualMaterialDisclaimer } from '../VirtualMaterialDisclaimer';

export const PersonalBlogView: React.FC = () => {
  const [sympathyCount, setSympathyCount] = useState(86);
  const [hasSympathy, setHasSympathy] = useState(false);

  const toggleSympathy = () => {
    if (hasSympathy) {
      setHasSympathy(false);
      setSympathyCount(c => c - 1);
    } else {
      setHasSympathy(true);
      setSympathyCount(c => c + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Educational Safety Disclaimer */}
      <VirtualMaterialDisclaimer type="recycle" clueNumber={2} />

      {/* Blog Container: Styled like Naver Blog / Tistory */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        {/* Blog Top Header Bar */}
        <div className="bg-emerald-700 text-white px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-wide">🌱 초록생활 기록장</span>
            <span className="text-xs bg-emerald-800/80 px-2 py-0.5 rounded text-emerald-100">
              친환경 에코 라이프
            </span>
          </div>
          <div className="text-xs text-emerald-100 flex items-center gap-3">
            <span>이웃 1,420명</span>
            <span className="bg-white text-emerald-800 font-bold px-2 py-0.5 rounded text-[11px] cursor-pointer">
              + 이웃추가
            </span>
          </div>
        </div>

        {/* Post Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Post Category & Meta */}
          <div className="border-b border-slate-100 pb-4">
            <div className="text-emerald-700 text-xs font-bold mb-1.5 flex items-center gap-1">
              <span>슬기로운 분리배출</span>
              <ChevronRight className="w-3.5 h-3.5" />
              <span>재활용 꿀팁</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug mb-3">
              페트병 뚜껑, 꼭 따로 버려야 할까요?
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-semibold text-slate-700">
                <User className="w-3.5 h-3.5 text-emerald-600" />
                초록생활 기록장
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                2026. 9. 12. 10:24
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                조회 3,840
              </span>
            </div>
          </div>

          {/* Author Intro Message */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-sm text-slate-700 leading-relaxed italic">
            “안녕하세요, 이웃님들! 초록생활 기록장입니다. 날씨가 제법 선선해졌네요.<br />
            오늘은 지난 주말 대청소를 하다가 문득 떠오른 페트병 뚜껑 분리배출 이야기를 들려드릴게요.
            저도 처음엔 헷갈렸는데, 공식 안내 자료를 꼼꼼히 찾아보고 완벽하게 정리했습니다!”
          </div>

          {/* Subheading 1 & Experience Story */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
              1. 생수병 뚜껑, 왜 그냥 버리면 안 될까요?
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              우리가 평소 마시는 투명 생수병 몸통은 <strong>PET(폴리에틸렌 테레프탈레이트)</strong> 재질이지만,
              뚜껑과 뚜껑 고리는 <strong>HDPE(고밀도 폴리에틸렌)</strong> 또는 PP 재질로 되어 있습니다.
              재질이 서로 다르기 때문에 그대로 버리면 고품질 재활용이 불가능해집니다.
            </p>
          </div>

          {/* Simulated Step-by-Step Photos (Visual Elements) */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-l-4 border-emerald-500 pl-3">
              2. 완벽한 분리배출 4단계 (실제 사진)
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* Step 1 Visual Card */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <div className="h-32 bg-gradient-to-br from-sky-100 to-blue-200 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-3xl mb-1">🚰💧</span>
                  <span className="font-bold text-xs text-sky-900">[단계 1] 내용물 비우고 헹구기</span>
                </div>
                <div className="p-3 text-xs text-slate-600">
                  음료 찌꺼기가 남지 않도록 깨끗한 수돗물로 2~3회 헹궈 줍니다.
                </div>
              </div>

              {/* Step 2 Visual Card */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <div className="h-32 bg-gradient-to-br from-amber-100 to-orange-200 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-3xl mb-1">🏷️✂️</span>
                  <span className="font-bold text-xs text-amber-900">[단계 2] 비닐 라벨 뜯기</span>
                </div>
                <div className="p-3 text-xs text-slate-600">
                  점선 라벨을 벗겨 비닐류로 따로 배출합니다.
                </div>
              </div>

              {/* Step 3 Visual Card */}
              <div className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <div className="h-32 bg-gradient-to-br from-teal-100 to-emerald-200 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-3xl mb-1">🦶📦</span>
                  <span className="font-bold text-xs text-teal-900">[단계 3] 찌그러뜨려 압착하기</span>
                </div>
                <div className="p-3 text-xs text-slate-600">
                  부피를 줄이기 위해 발로 밟아 납작하게 만듭니다.
                </div>
              </div>

              {/* Step 4 Visual Card (Assertive Claim) */}
              <div className="border-2 border-rose-300 rounded-xl overflow-hidden bg-rose-50/50">
                <div className="h-32 bg-gradient-to-br from-rose-100 to-pink-200 flex flex-col items-center justify-center p-3 text-center">
                  <span className="text-3xl mb-1">🔴🚫</span>
                  <span className="font-bold text-xs text-rose-900">[단계 4] 뚜껑 분리 배출</span>
                </div>
                <div className="p-3 text-xs text-slate-700 font-medium">
                  <strong>뚜껑은 반드시 따로 떼어 플라스틱 통에 따로 버려야 합니다!</strong>
                </div>
              </div>
            </div>
          </div>

          {/* Assertive conclusion without official links */}
          <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl text-sm text-slate-800 space-y-2">
            <h3 className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              블로거 초록생활의 핵심 요약 결론!
            </h3>
            <p className="leading-relaxed">
              “공식 안내 자료를 참고해 본 결과,
              <strong className="text-emerald-950 underline underline-offset-4 decoration-emerald-500">
                우리나라 모든 지역에서 페트병 뚜껑은 반드시 따로 떼어서 버려야 한다고 단정할 수 있습니다.
              </strong>
              뚜껑을 닫은 채 버리면 재활용이 아예 안 되니 절대 닫아서 버리지 마세요!”
            </p>
            <div className="text-xs text-slate-500 pt-1">
              (※ 참고 자료: 인터넷 검색 및 각종 공식 안내 자료 종합 참고)
            </div>
          </div>

          {/* Bottom Tags */}
          <div className="pt-2 flex flex-wrap gap-1.5 text-xs text-slate-600">
            <span className="bg-slate-100 px-2.5 py-1 rounded-md">#페트병분리수거</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md">#페트병뚜껑</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md">#초록생활기록장</span>
            <span className="bg-slate-100 px-2.5 py-1 rounded-md">#재활용노하우</span>
          </div>

          {/* Blog Footer Action Bar */}
          <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs text-slate-600">
            <button
              type="button"
              onClick={toggleSympathy}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                hasSympathy
                  ? 'border-rose-400 bg-rose-50 text-rose-600 font-bold'
                  : 'border-slate-300 hover:bg-slate-50'
              }`}
            >
              <Heart className={`w-4 h-4 ${hasSympathy ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>공감 {sympathyCount}</span>
            </button>

            <div className="flex items-center gap-2">
              <button type="button" className="p-1.5 hover:bg-slate-100 rounded text-slate-500 cursor-pointer">
                <Share2 className="w-4 h-4" />
              </button>
              <button type="button" className="p-1.5 hover:bg-slate-100 rounded text-slate-500 cursor-pointer">
                <Bookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
