import React from 'react';
import { Calendar, User, Eye, AlertOctagon, HelpCircle, HardDrive } from 'lucide-react';
import { VirtualMaterialDisclaimer } from '../VirtualMaterialDisclaimer';

export const OldWebpageView: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Educational Safety Disclaimer */}
      <VirtualMaterialDisclaimer type="safety" clueNumber={7} />

      {/* Retro 2010s HTML Website Layout */}
      <div className="bg-[#f0f0f0] border-2 border-[#999999] rounded-lg overflow-hidden shadow-md font-sans text-slate-800">
        {/* Retro Browser / Site Banner */}
        <div className="bg-gradient-to-b from-[#2b5876] to-[#4e4376] text-white px-4 py-3 border-b-2 border-[#1c3b52]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-yellow-300" />
              <div>
                <span className="font-bold text-base tracking-wider">테크 & 라이프 팁</span>
                <span className="text-[11px] text-slate-200 ml-2 hidden sm:inline">| IT 생활정보 포털</span>
              </div>
            </div>
            <div className="text-[11px] bg-black/30 px-2 py-0.5 rounded font-mono text-yellow-300">
              [VISITOR COUNT: 014892]
            </div>
          </div>
        </div>

        {/* Retro Nav Bar */}
        <div className="bg-[#dcdcdc] border-b border-[#ababab] px-3 py-1.5 flex gap-4 text-xs font-semibold text-slate-700">
          <span className="hover:text-blue-700 cursor-pointer">[홈]</span>
          <span className="hover:text-blue-700 cursor-pointer">[하드웨어 상식]</span>
          <span className="text-blue-800 font-bold underline cursor-pointer">[배터리/충전기 연구소]</span>
          <span className="hover:text-blue-700 cursor-pointer">[질문과 답변]</span>
        </div>

        {/* Article Container with Classic Table Borders */}
        <div className="p-4 sm:p-6 bg-white m-3 border border-[#cccccc] shadow-inner space-y-4">
          {/* Post Header Table */}
          <div className="border-b-2 border-slate-700 pb-3">
            <div className="text-xs text-red-600 font-bold mb-1">
              [생활 속 IT 주의경보]
            </div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
              밤새 휴대전화를 충전하면 반드시 폭발한다
            </h1>

            {/* Retro Metadata Bar */}
            <div className="bg-[#f9f9f9] border border-[#e0e0e0] p-2 mt-3 rounded flex flex-wrap items-center justify-between text-xs text-slate-600 gap-2">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <strong>글쓴이:</strong> it_master (운영자)
                </span>
                <span>|</span>
                <span className="flex items-center gap-1 text-rose-700 font-semibold">
                  <Calendar className="w-3.5 h-3.5" />
                  <strong>작성일:</strong> 2019-03-05 11:20:04
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span>조회수: 12,492</span>
                <span>추천: 45</span>
              </div>
            </div>
          </div>

          {/* Retro Warning Callout */}
          <div className="bg-[#fff3cd] border-l-4 border-[#ffc107] p-3 text-xs text-amber-900 flex items-start gap-2">
            <AlertOctagon className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <strong>※ 독자 긴급 공지:</strong> 본 게시물은 <strong>2019년 3월</strong>에 작성된 게시물입니다. 
              최근 업데이트 이력 및 현대 스마트폰 BMS 회로 관련 수정 사항은 반영되어 있지 않습니다.
            </div>
          </div>

          {/* Old Device & Swollen Battery Visual (Old Photo) */}
          <div className="border border-slate-300 p-3 bg-slate-50 rounded text-center space-y-2">
            <div className="h-44 bg-gradient-to-b from-slate-200 to-slate-300 rounded border border-slate-400 flex flex-col items-center justify-center p-4">
              <div className="text-5xl mb-2">🔋⚠️💥</div>
              <span className="font-bold text-xs text-slate-700">
                [자료 사진] 과거 구형 피처폰 부풀어 오른 탈착식 리튬 배터리 모습
              </span>
              <span className="text-[10px] text-slate-500">
                (촬영일자: 2018년 불명 / 제공: 미상)
              </span>
            </div>
            <div className="text-xs text-slate-500 italic">
              ▲ 충전기를 계속 꽂아두어 과열로 팽창된 구형 배터리의 사례
            </div>
          </div>

          {/* Article Text Content with Extreme Absolute Wording */}
          <div className="text-sm text-slate-800 leading-relaxed space-y-3">
            <p>
              많은 분들이 잠자리에 들기 전 스마트폰을 머리맡에 두고 밤새 충전기에 꽂아둡니다.
              하지만 이것은 시한폭탄을 머리맡에 두고 자는 것과 다름없습니다!
            </p>

            <div className="bg-rose-50 border border-rose-300 p-3.5 rounded text-rose-950 font-semibold space-y-2">
              <p className="text-base font-black text-rose-700">
                ⚠️ [작성자의 주장] 100% 충전 후 방치 시 반드시 폭발합니다!
              </p>
              <p className="text-xs leading-relaxed text-slate-800">
                “휴대전화 배터리가 100% 충전된 이후에도 전기가 계속해서 흘러들어가면 전압이 급상승하여 
                <strong>모든 휴대전화는 반드시 과열되어 폭발하거나, 배터리 수명이 그 자리에서 완전히 망가지게 됩니다.</strong> 
                단 1초도 초과해서 충전해서는 안 되며, 자는 동안 충전기를 꽂아두는 것은 절대 금물입니다!”
              </p>
            </div>

            <p>
              제가 지난 10년간 IT 기기들을 수리하면서 수많은 기기를 보았는데, 밤새 충전한 폰들은 하나같이 전부 망가져 있었습니다.
              따라서 충전이 100% 완료되는 즉시 자다가도 일어나서 플러그를 뽑아야 안전합니다.
            </p>
          </div>

          {/* Retro Signature & Footer */}
          <div className="border-t border-slate-200 pt-3 text-xs text-slate-500 flex items-center justify-between">
            <span>태그: #배터리폭발 #스마트폰주의 #충전기위험 #2019년꿀팁</span>
            <span className="text-slate-400">IP: 121.135.***.***</span>
          </div>
        </div>

        {/* Vintage Bottom Bar */}
        <div className="bg-[#e9e9e9] border-t border-[#cccccc] p-3 text-center text-xs text-slate-500">
          Copyright &copy; 2019 Tech &amp; Life Tips. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};
