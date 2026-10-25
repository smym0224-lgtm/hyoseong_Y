import React from 'react';
import { Shield, CheckCircle2, FileText, Calendar, Printer, Share2, Award, Bookmark, BookOpen } from 'lucide-react';
import { VirtualMaterialDisclaimer } from '../VirtualMaterialDisclaimer';

export const PublicAgencyView: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto">
      {/* Educational Safety Disclaimer */}
      <VirtualMaterialDisclaimer type="health" clueNumber={6} />

      {/* Official Public Agency Portal Container */}
      <div className="bg-white border-2 border-blue-900/30 rounded-2xl overflow-hidden shadow-xs">
        {/* Official Agency GNB Header */}
        <div className="bg-blue-900 text-white px-5 py-3.5 flex items-center justify-between border-b-2 border-blue-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Shield className="w-6 h-6 text-cyan-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-base tracking-tight">바른건강정보센터</span>
                <span className="bg-cyan-500/30 text-cyan-200 border border-cyan-400/30 text-[10px] font-bold px-1.5 py-0.5 rounded">
                  공공 보건기관
                </span>
              </div>
              <div className="text-[11px] text-blue-200">KOREA PUBLIC HEALTH INFORMATION CENTER</div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-3 text-xs text-blue-200">
            <span>국민건강포털</span>
            <span>·</span>
            <span>감염병정보관</span>
          </div>
        </div>

        {/* Breadcrumb Navigation */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-2.5 text-xs text-slate-600 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span>홈</span>
            <span>&gt;</span>
            <span>건강증진자료</span>
            <span>&gt;</span>
            <span className="font-bold text-blue-900">감염병 예방수칙</span>
          </div>
          <div className="flex items-center gap-2">
            <button type="button" className="p-1 hover:bg-slate-200 rounded text-slate-600 cursor-pointer" title="인쇄">
              <Printer className="w-3.5 h-3.5" />
            </button>
            <button type="button" className="p-1 hover:bg-slate-200 rounded text-slate-600 cursor-pointer" title="공유">
              <Share2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Article Document Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Official Document Header */}
          <div className="border-b-2 border-slate-900 pb-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-900 font-bold px-2.5 py-0.5 rounded text-xs">
                보건지침 제 2026-09호
              </span>
              <span className="text-xs text-slate-500">인증 공공 보건 간행물</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 leading-snug">
              올바른 손 씻기로 감염병 예방하기
            </h1>

            {/* Official Metadata Info Box */}
            <div className="bg-slate-50 border border-slate-200 p-3.5 rounded-xl flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div className="space-y-1">
                <div>
                  <strong className="text-slate-900">담당 부서:</strong> 바른건강정보센터 감염병예방홍보과 (전문의 감수 완료)
                </div>
                <div>
                  <strong className="text-slate-900">등록일:</strong> 2026년 9월 30일 | <strong className="text-slate-900">최종 갱신:</strong> 2026년 10월 05일
                </div>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-300 px-3 py-1.5 rounded-lg font-bold text-xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>공식 검증 완료</span>
              </div>
            </div>
          </div>

          {/* Section 1: Why Handwashing Matters (Evidence & Logic) */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-l-4 border-blue-600 pl-3">
              1. 올바른 손 씻기가 감염병을 예방하는 과학적 원리
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              손은 호흡기 및 소화기 감염병의 병원체(바이러스, 세균)가 체내로 침투하는 가장 주요한 경로입니다.
              질병관리청 및 보건 당국의 역학조사에 따르면,
              <strong>흐르는 물에 비누를 사용하여 30초 이상 꼼꼼히 손을 씻는 것만으로도</strong>
              인플루엔자, 수족구병, 노로바이러스 장관감염증 등 주요 감염병을 <strong>약 50~70%까지 예방</strong>할 수 있습니다.
            </p>
          </div>

          {/* Section 2: 6 Steps Infographic (Visual Element) */}
          <div className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2 border-l-4 border-blue-600 pl-3">
              2. 올바른 손 씻기 6단계 안내 그림
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {/* Step 1 */}
              <div className="border border-slate-200 rounded-xl p-3 bg-blue-50/40 text-center">
                <div className="text-2xl mb-1">🤲</div>
                <div className="text-xs font-bold text-blue-900 mb-0.5">1단계: 손바닥</div>
                <div className="text-[11px] text-slate-600">손바닥과 손바닥을 마주 대고 문지릅니다.</div>
              </div>

              {/* Step 2 */}
              <div className="border border-slate-200 rounded-xl p-3 bg-blue-50/40 text-center">
                <div className="text-2xl mb-1">🤚</div>
                <div className="text-xs font-bold text-blue-900 mb-0.5">2단계: 손등</div>
                <div className="text-[11px] text-slate-600">손등과 손바닥을 마주 대고 문지릅니다.</div>
              </div>

              {/* Step 3 */}
              <div className="border border-slate-200 rounded-xl p-3 bg-blue-50/40 text-center">
                <div className="text-2xl mb-1">🤞</div>
                <div className="text-xs font-bold text-blue-900 mb-0.5">3단계: 손깍지</div>
                <div className="text-[11px] text-slate-600">손바닥을 마주 대고 손깍지를 끼고 문지릅니다.</div>
              </div>

              {/* Step 4 */}
              <div className="border border-slate-200 rounded-xl p-3 bg-blue-50/40 text-center">
                <div className="text-2xl mb-1">✊</div>
                <div className="text-xs font-bold text-blue-900 mb-0.5">4단계: 손가락</div>
                <div className="text-[11px] text-slate-600">손가락을 마주잡고 돌려가며 문지릅니다.</div>
              </div>

              {/* Step 5 */}
              <div className="border border-slate-200 rounded-xl p-3 bg-blue-50/40 text-center">
                <div className="text-2xl mb-1">👍</div>
                <div className="text-xs font-bold text-blue-900 mb-0.5">5단계: 엄지손가락</div>
                <div className="text-[11px] text-slate-600">엄지손가락을 다른 편 손바닥으로 돌려 문지릅니다.</div>
              </div>

              {/* Step 6 */}
              <div className="border border-slate-200 rounded-xl p-3 bg-blue-50/40 text-center">
                <div className="text-2xl mb-1">💅</div>
                <div className="text-xs font-bold text-blue-900 mb-0.5">6단계: 손톱 밑</div>
                <div className="text-[11px] text-slate-600">손톱 밑을 반대편 손바닥에 문질러 깨끗이 씻습니다.</div>
              </div>
            </div>
          </div>

          {/* Section 3: References & Evidence List (Crucial for Detection) */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
            <h3 className="font-bold text-xs text-slate-800 flex items-center gap-1.5 uppercase tracking-wider">
              <BookOpen className="w-4 h-4 text-blue-700" />
              공식 참고 자료 및 학술 근거 출처
            </h3>
            <ul className="text-xs text-slate-600 space-y-1 list-disc list-inside">
              <li>질병관리청(KDCA), 『2025 지역사회 감염병 예방관리 지침 및 손씻기 실태조사 보고서』</li>
              <li>세계보건기구(WHO), 『Clean Care is Safer Care: Guidelines on Hand Hygiene in Health Care』</li>
              <li>대한감염학회, 『소아청소년 계절성 호흡기 감염병 예방 권고안』 (2025 개정판)</li>
            </ul>
          </div>

          {/* Public Agency Seal & Notice */}
          <div className="border-t border-slate-200 pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-700" />
              <span>본 자료는 공공누리 제1유형(출처표시 조건)으로 자유로운 공공 활용이 가능합니다.</span>
            </div>
            <span className="font-semibold text-slate-700">바른건강정보센터 원장</span>
          </div>
        </div>
      </div>
    </div>
  );
};
