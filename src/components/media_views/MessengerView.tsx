import React, { useState } from 'react';
import { MessageCircle, Phone, Video, Search, Menu, Send, ArrowRight, CornerDownRight } from 'lucide-react';
import { VirtualMaterialDisclaimer } from '../VirtualMaterialDisclaimer';

export const MessengerView: React.FC = () => {
  const [inputText, setInputText] = useState('');

  return (
    <div className="max-w-md mx-auto">
      {/* Educational Safety Disclaimer */}
      <VirtualMaterialDisclaimer type="school" clueNumber={6} />

      {/* KakaoTalk-style Messenger Window */}
      <div className="bg-[#b2c7da] border-2 border-slate-300 rounded-3xl overflow-hidden shadow-md flex flex-col h-[650px]">
        {/* Messenger Header Bar */}
        <div className="bg-[#a0b6c9] px-4 py-3 flex items-center justify-between border-b border-black/5 text-slate-800 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="relative">
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-slate-900 font-extrabold flex items-center justify-center text-sm shadow-xs">
                5-1
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
            </div>
            <div>
              <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                <span>5학년 1반 친구들 모여라</span>
                <span className="text-xs text-slate-600 font-semibold">(22)</span>
              </div>
              <div className="text-[11px] text-slate-600">김소현, 정다윤, 정필립, 이은호 외 18명</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-slate-700">
            <Search className="w-4 h-4 cursor-pointer" />
            <Menu className="w-4 h-4 cursor-pointer" />
          </div>
        </div>

        {/* Date Divider */}
        <div className="p-3 text-center shrink-0">
          <span className="bg-black/15 text-white text-[11px] font-medium px-3 py-1 rounded-full backdrop-blur-xs">
            2026년 10월 22일 목요일
          </span>
        </div>

        {/* Chat Messages Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-4 space-y-3.5 pb-4 text-xs sm:text-sm">
          {/* Message 1: 김소현 (학생 A) */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              소현
            </div>
            <div className="max-w-[78%]">
              <div className="text-[11px] font-bold text-slate-800 mb-1">김소현</div>
              {/* Forwarded Tag */}
              <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-2xs border border-black/5 space-y-1">
                <div className="text-[10px] text-slate-400 flex items-center gap-1 font-medium">
                  <CornerDownRight className="w-3 h-3 text-slate-400" />
                  <span>전달된 메시지</span>
                </div>
                <div className="font-bold text-slate-900 text-sm">
                  “내일 학교 쉰대!!”
                </div>
              </div>
              <span className="text-[10px] text-slate-600 ml-1">오후 8:15</span>
            </div>
          </div>

          {/* Message 2: 정다윤 (학생 B) */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              다윤
            </div>
            <div className="max-w-[78%]">
              <div className="text-[11px] font-bold text-slate-800 mb-1">정다윤</div>
              <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-2xs border border-black/5">
                <p className="text-slate-800">
                  “진짜야? 어디서 들었어? 나 내일 단원평가 준비하고 있었는데?!”
                </p>
              </div>
              <span className="text-[10px] text-slate-600 ml-1">오후 8:16</span>
            </div>
          </div>

          {/* Message 3: 김소현 (학생 A) */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              소현
            </div>
            <div className="max-w-[78%]">
              <div className="text-[11px] font-bold text-slate-800 mb-1">김소현</div>
              <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-2xs border border-black/5">
                <p className="text-slate-800 font-medium">
                  “친구의 형이 선생님한테 들었다고 했어. 학교 급식실 공사 때문에 임시 휴업이라고 하던데?”
                </p>
              </div>
              <span className="text-[10px] text-slate-600 ml-1">오후 8:17</span>
            </div>
          </div>

          {/* Message 4: 정필립 (학생 C) */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-teal-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              필립
            </div>
            <div className="max-w-[78%]">
              <div className="text-[11px] font-bold text-slate-800 mb-1">정필립</div>
              <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-2xs border border-black/5">
                <p className="text-slate-800">
                  “어?! 다른 반 친구도 그렇다고 하던데? 옆 반 지우도 내일 쉰다고 짐 챙겨갔대!”
                </p>
              </div>
              <span className="text-[10px] text-slate-600 ml-1">오후 8:18</span>
            </div>
          </div>

          {/* Message 5: 이은호 (학생 D) */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              은호
            </div>
            <div className="max-w-[78%]">
              <div className="text-[11px] font-bold text-slate-800 mb-1">이은호</div>
              <div className="bg-amber-50 rounded-2xl rounded-tl-xs p-3 shadow-2xs border border-amber-300">
                <p className="text-amber-950 font-bold">
                  “학교에서 온 공지는 있어? e알리미나 학교 홈페이지 들어가 봤어?”
                </p>
              </div>
              <span className="text-[10px] text-slate-600 ml-1">오후 8:20</span>
            </div>
          </div>

          {/* Message 6: 김소현 (학생 A) */}
          <div className="flex items-start gap-2">
            <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold flex items-center justify-center shrink-0 text-xs">
              소현
            </div>
            <div className="max-w-[78%]">
              <div className="text-[11px] font-bold text-slate-800 mb-1">김소현</div>
              <div className="bg-white rounded-2xl rounded-tl-xs p-3 shadow-2xs border border-black/5">
                <p className="text-slate-700">
                  “공지는 못 봤어. 근데 다들 그런다길래...”
                </p>
              </div>
              <span className="text-[10px] text-slate-600 ml-1">오후 8:21</span>
            </div>
          </div>
        </div>

        {/* Messenger Bottom Input Bar */}
        <div className="bg-white p-3 border-t border-slate-200 flex items-center gap-2 shrink-0">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="메시지를 입력하세요 (관찰 모드)"
            className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-xs text-slate-800 outline-none focus:ring-1 focus:ring-yellow-400"
          />
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center shrink-0 shadow-xs cursor-pointer hover:bg-yellow-500"
            aria-label="전송"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
