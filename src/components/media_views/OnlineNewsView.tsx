import React, { useState } from 'react';
import { Newspaper, Share2, Printer, ThumbsUp, MessageSquare, AlertCircle, TrendingUp } from 'lucide-react';
import { VirtualMaterialDisclaimer } from '../VirtualMaterialDisclaimer';

export const OnlineNewsView: React.FC = () => {
  const [recommendCount, setRecommendCount] = useState(214);
  const [hasRecommended, setHasRecommended] = useState(false);

  const toggleRecommend = () => {
    if (hasRecommended) {
      setHasRecommended(false);
      setRecommendCount(c => c - 1);
    } else {
      setHasRecommended(true);
      setRecommendCount(c => c + 1);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      {/* Educational Safety Disclaimer */}
      <VirtualMaterialDisclaimer type="weather" clueNumber={4} />

      {/* Online News Portal Container */}
      <div className="bg-white border border-slate-300 rounded-2xl overflow-hidden shadow-xs">
        {/* Newspaper Masthead Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-red-600">
          <div className="flex items-center gap-2.5">
            <Newspaper className="w-6 h-6 text-red-500" />
            <div>
              <span className="font-black text-lg tracking-tight font-serif">오늘의 이슈</span>
              <span className="text-[11px] text-slate-400 ml-2 hidden sm:inline">TODAY&apos;S ISSUE NEWS</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="bg-red-600 text-white font-extrabold px-2 py-0.5 rounded text-[11px] animate-pulse">
              속보
            </span>
            <span className="text-slate-400">사회 &gt; 날씨종합</span>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Article Header & Headline */}
          <div className="border-b border-slate-200 pb-5 space-y-2">
            <div className="inline-block bg-red-50 text-red-700 text-xs font-bold px-2.5 py-1 rounded">
              [단독] 기후 긴급 리포트
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug tracking-tight">
              다음 주 전국 40도 육박? 역대급 폭염 예고
            </h1>
            <p className="text-sm font-semibold text-slate-600">
              열돔 현상 겹쳐 다음 주 중반부터 사상 초유의 가마솥더위 우려… 온열질환 비상
            </p>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 pt-3 border-t border-slate-100">
              <div>
                <span className="font-semibold text-slate-800">이슈 기자</span>
                <span className="text-slate-400 mx-1.5">|</span>
                <span>입력 2026. 07. 15. 14:32</span>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="p-1 hover:bg-slate-100 rounded text-slate-600 cursor-pointer" title="공유">
                  <Share2 className="w-4 h-4" />
                </button>
                <button type="button" className="p-1 hover:bg-slate-100 rounded text-slate-600 cursor-pointer" title="인쇄">
                  <Printer className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Simulated Temperature Chart Graphic (Visual Element) */}
          <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/80 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-red-600" />
                [자체 분석 그래픽] 다음 주 일별 최고기온 전망 추이
              </span>
              <span className="text-[11px] text-slate-400 font-mono">단위: ℃</span>
            </div>

            {/* Simulated Chart Bars */}
            <div className="h-44 flex items-end justify-between gap-2 pt-6 pb-2 px-2 border-b border-slate-300">
              <div className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[11px] font-bold text-slate-600">31°</span>
                <div className="w-full bg-orange-300 rounded-t h-16" />
                <span className="text-[11px] text-slate-500 font-medium">월</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[11px] font-bold text-slate-700">33°</span>
                <div className="w-full bg-orange-400 rounded-t h-20" />
                <span className="text-[11px] text-slate-500 font-medium">화</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <span className="text-[11px] font-bold text-rose-600">36°</span>
                <div className="w-full bg-rose-500 rounded-t h-28" />
                <span className="text-[11px] text-slate-500 font-medium">수</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-black text-red-700">39.4°</span>
                <div className="w-full bg-gradient-to-t from-red-500 to-red-600 rounded-t h-36" />
                <span className="text-[11px] font-bold text-red-600">목</span>
              </div>
              <div className="flex-1 flex flex-col items-center gap-1">
                <span className="text-xs font-black text-red-800">40.1°</span>
                <div className="w-full bg-gradient-to-t from-red-600 to-red-800 rounded-t h-40 animate-pulse" />
                <span className="text-[11px] font-black text-red-700">금 (위험)</span>
              </div>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center justify-between">
              <span>※ 데이터 출처: 기상 데이터 자체 집계 모델 (미공개)</span>
              <span>작성일시: 2026.07.15</span>
            </div>
          </div>

          {/* Article Text Content */}
          <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-4 font-serif">
            <p>
              [오늘의 이슈 = 이슈 기자] 본격적인 한여름 무더위가 시작된 가운데, 다음 주 한반도 전역에 낮 최고기온이 <strong>40도에 육박하는 사상 최악의 극한 폭염</strong>이 덮칠 것이라는 관측이 나왔다.
            </p>
            <p>
              본지가 긴급 입수한 내부 기상 데이터 그래프에 따르면, 다음 주 목요일부터 북태평양 고기압과 티베트 고기압이 동시에 한반도 상공을 뒤덮는 &apos;이중 열돔(Heat Dome)&apos;이 형성되면서 일부 내륙 지역은 한낮 기온이 40.1도까지 치솟을 것으로 전망된다.
            </p>
            <p>
              이는 과거 역대 최고기온 기록을 갈아치우는 수준으로, 시민들은 야외 활동을 전면 중단하고 냉방시설이 갖춰진 실내에 머물러야 할 것으로 보인다.
            </p>
            <div className="bg-slate-100 p-3 rounded-lg text-xs font-sans text-slate-600">
              ※ 본 기사의 예보 그래프는 기상청 공식 발표 수치가 아니며, 해외 비공식 민간 기상 모델을 인용한 것입니다.
            </div>
          </div>

          {/* Journalist Byline & Actions */}
          <div className="border-t border-slate-200 pt-5 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              <span className="font-bold text-slate-700">이슈 기자</span> (issue_reporter@todaysissue.com)<br />
              &lt;저작권자 ⓒ 오늘의 이슈, 무단 전재 및 재배포 금지&gt;
            </div>

            <button
              type="button"
              onClick={toggleRecommend}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                hasRecommended
                  ? 'border-red-500 bg-red-50 text-red-600'
                  : 'border-slate-300 hover:bg-slate-100 text-slate-700'
              }`}
            >
              <ThumbsUp className={`w-4 h-4 ${hasRecommended ? 'fill-red-500' : ''}`} />
              <span>추천 {recommendCount}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
