import React, { useState } from 'react';
import { Users, ThumbsUp, MessageSquare, Share2, AlertTriangle, ExternalLink, Flame } from 'lucide-react';
import { VirtualMaterialDisclaimer } from '../VirtualMaterialDisclaimer';

export const CommunityView: React.FC = () => {
  const [upvotes, setUpvotes] = useState(153);
  const [hasUpvoted, setHasUpvoted] = useState(false);

  const toggleUpvote = () => {
    if (hasUpvoted) {
      setHasUpvoted(false);
      setUpvotes(c => c - 1);
    } else {
      setHasUpvoted(true);
      setUpvotes(c => c + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Educational Safety Disclaimer */}
      <VirtualMaterialDisclaimer type="event" clueNumber={5} />

      {/* Online Community Board Container (e.g. Instiz / TheQoo / Cafe style) */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        {/* Forum Header Bar */}
        <div className="bg-indigo-600 text-white px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-200" />
            <span className="font-extrabold text-sm tracking-tight">스튜던트톡 커뮤니티</span>
            <span className="bg-indigo-700 text-indigo-100 text-[11px] px-2 py-0.5 rounded font-medium">
              자유게시판
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-indigo-200 font-semibold">
            <Flame className="w-4 h-4 text-amber-300" />
            <span>실시간 인기글 등극</span>
          </div>
        </div>

        {/* Post Container */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Post Header */}
          <div className="border-b border-slate-200 pb-4 space-y-2">
            <div className="flex items-center gap-2 text-xs">
              <span className="bg-rose-100 text-rose-700 font-bold px-2 py-0.5 rounded">
                [이벤트/꿀정보]
              </span>
              <span className="text-slate-400">글번호 89402</span>
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              선착순 100명! 유명 문구 브랜드 학용품 무료 증정
            </h1>

            {/* Author Meta Row */}
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 pt-1">
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-800 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  lucky_student
                </span>
                <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px]">
                  새싹회원 (Lv.2)
                </span>
                <span>·</span>
                <span>2026. 10. 21. 18:40</span>
              </div>
              <div className="flex items-center gap-3">
                <span>조회 4,920</span>
                <span>추천 153</span>
                <span>댓글 28</span>
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-4">
            <p>
              대박 사건!! 학생들 사이에서 제일 인기 많은 그 유명 프리미엄 문구 브랜드에서 이번 신학기 감사 이벤트로
              <strong>샤프, 형광펜, 플래너 세트(정가 4만 5천 원 상당)</strong>를 선착순 100명한테 무료로 나눠 준대요!! 🎁✏️
            </p>

            {/* Simulated Event Banner Box */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-dashed border-amber-300 p-5 rounded-2xl text-center space-y-3">
              <div className="text-4xl">🎉✏️📦</div>
              <h3 className="font-black text-lg text-amber-950">
                [선착순 100명 한정] 프리미엄 학용품 스페셜 박스 0원 증정!
              </h3>
              <p className="text-xs text-amber-800">
                ※ 준비된 수량 소진 시 즉시 종료됩니다. 지금 마감 임박 (남은 수량: 14개)
              </p>

              {/* Suspicious Unofficial Link */}
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-black text-sm px-5 py-2.5 rounded-xl shadow-xs transition-colors cursor-pointer">
                  <span>신청 링크 바로가기 (bit.ly/stationery-free-gift)</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
              <p className="text-[11px] text-amber-700/80">
                (링크 클릭 후 이름, 전화번호, 집 주소를 입력하면 택배로 무료 발송!)
              </p>
            </div>

            <p>
              저도 방금 친구한테 카톡으로 링크 받아서 후다닥 신청하고 왔어요!! 🏃‍♀️💨<br />
              이거 금방 마감될 것 같으니까 여러분도 <strong>빨리 서둘러서 신청하시고 다른 친구들 단톡방에도 다 공유</strong>해 주세요!!
            </p>
          </div>

          {/* Upvote & Share Action Buttons */}
          <div className="border-t border-b border-slate-100 py-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={toggleUpvote}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl border text-sm font-bold transition-colors cursor-pointer ${
                hasUpvoted
                  ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                  : 'border-slate-300 hover:bg-slate-50 text-slate-700'
              }`}
            >
              <ThumbsUp className={`w-4 h-4 ${hasUpvoted ? 'fill-indigo-600' : ''}`} />
              <span>추천 {upvotes}</span>
            </button>
            <button
              type="button"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-semibold transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>공유하기</span>
            </button>
          </div>

          {/* Comments Section */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <span className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-indigo-600" />
                <span>댓글 (28)</span>
              </span>
              <span className="text-xs text-slate-400">등록순</span>
            </div>

            <div className="space-y-2.5 text-xs sm:text-sm">
              {/* Comment 1 from prompt */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">study_king</span>
                  <span className="text-[11px] text-slate-400">2026.10.21 18:44</span>
                </div>
                <p className="text-slate-700">저 신청했어요! 제발 선착순 안에 들었으면 좋겠네요 ㅠㅠ</p>
              </div>

              {/* Comment 2 from prompt */}
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-900">pencil_case</span>
                  <span className="text-[11px] text-slate-400">2026.10.21 18:49</span>
                </div>
                <p className="text-slate-700">친구가 보내 줘서 저도 우리 반 단톡방에 공유합니다! 다들 빨리 ㄱㄱ</p>
              </div>

              {/* Comment 3 from prompt (critical question) */}
              <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-300">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-amber-900">smart_detective</span>
                  <span className="text-[11px] text-amber-700 font-semibold">의문 제기</span>
                </div>
                <p className="text-amber-900 font-medium">
                  공식 이벤트 맞나요? 해당 문구 브랜드 공식 홈페이지나 인스타그램 가봤는데 아무런 공지가 없던데요… 주최자가 공식 계정인지 확인하셨나요?
                </p>
              </div>

              {/* Reply */}
              <div className="bg-slate-100 p-3 rounded-xl border border-slate-200 ml-4">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-indigo-700">lucky_student (작성자)</span>
                  <span className="text-[11px] text-slate-400">2026.10.21 18:55</span>
                </div>
                <p className="text-slate-700 text-xs">
                  @smart_detective 저도 다른 커뮤니티에서 보고 공유한 거라 잘 모르겠는데 일단 무료라길래 얼른 신청했어요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
