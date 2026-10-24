import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

interface VirtualMaterialDisclaimerProps {
  type: 'health' | 'recycle' | 'science' | 'weather' | 'event' | 'school' | 'safety';
  clueNumber: number;
}

export const VirtualMaterialDisclaimer: React.FC<VirtualMaterialDisclaimerProps> = ({
  type,
  clueNumber,
}) => {
  const getGuidanceText = () => {
    switch (type) {
      case 'health':
        return '본 게시물은 국어과 매체 신뢰성 판단 학습을 위한 가상 자료입니다. 실제 건강 및 시력 관련 의학 정보는 질병관리청, 안과 전문의 등 공인된 의료 기관의 공식 자료를 확인해야 합니다.';
      case 'recycle':
        return '본 블로그 글은 국어과 매체 신뢰성 판단 학습을 위한 가상 자료입니다. 실제 페트병 및 재활용품 분리배출 방법은 환경부 ‘내 손안의 분리배출’ 앱 및 거주 지역 지자체 공식 지침을 확인하세요.';
      case 'science':
        return '본 영상은 국어과 매체 신뢰성 판단 학습을 위한 가상 자료입니다. 뇌 기능 및 신경과학 관련 정보는 과학기술정보통신부, 학술 연구 기관의 공식 연구 결과를 확인하세요.';
      case 'weather':
        return '본 기사는 국어과 매체 신뢰성 판단 학습을 위한 가상 자료입니다. 실제 날씨와 기온 예보는 기상청 날씨누리(kma.go.kr) 공식 중기/단기 예보를 확인해야 합니다.';
      case 'event':
        return '본 커뮤니티 글은 가상 자료입니다. 인터넷에서 무료 증정이나 링크 클릭을 요구하는 이벤트는 해당 기업의 공식 홈페이지나 공식 SNS 계정 공지를 반드시 교차 확인하세요.';
      case 'school':
        return '본 메신저 대화는 가상 자료입니다. 학교 휴업이나 일정 변경은 친구들의 메신저 소문이 아닌 학교 공식 모바일 알림장(e알리미, 학교종이) 및 학교 홈페이지 공지를 확인해야 합니다.';
      case 'safety':
        return '본 웹페이지는 2019년 설정의 가상 자료입니다. 전자제품 및 배터리 충전 안전 수칙은 국가기술표준원, 한국소비자원, 제조사 공식 사용설명서를 반드시 확인하세요.';
      default:
        return '본 자료는 학생들의 국어과 매체 신뢰성 판단 학습을 위해 제작된 가상 자료입니다.';
    }
  };

  return (
    <div className="bg-amber-50/90 border border-amber-300/80 rounded-xl p-3.5 mb-5 shadow-2xs">
      <div className="flex items-start gap-2.5">
        <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-extrabold text-amber-900 bg-amber-200/80 px-2 py-0.5 rounded text-[11px]">
              수업용 가상 자료 안내 (매체 자료 #{clueNumber})
            </span>
            <span className="text-amber-800 font-semibold">
              ※ 실제 생활에서 그대로 믿거나 따라 하지 마세요!
            </span>
          </div>
          <p className="text-amber-900/90 leading-relaxed font-medium">
            {getGuidanceText()}
          </p>
        </div>
      </div>
    </div>
  );
};
