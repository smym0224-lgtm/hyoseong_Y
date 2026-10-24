export type MediaType =
  | 'instagram'      // 자료 1: SNS 게시물
  | 'personal_blog'  // 자료 2: 개인 블로그
  | 'youtube'        // 자료 3: 유튜브 영상
  | 'online_news'    // 자료 4: 온라인 뉴스
  | 'community'      // 자료 5: 온라인 커뮤니티
  | 'messenger'      // 자료 6: 메신저 단체 대화방
  | 'old_webpage'    // 자료 7: 오래된 웹페이지
  | 'public_agency'; // 자료 8: 공공기관 홈페이지

export type CredibilityType = 'trustworthy' | 'needs_verification' | 'unreliable';

export type ScreenView = 'intro' | 'mission' | 'list' | 'detail' | 'report';

export interface ReliabilityCriteria {
  source: string;      // 1. 출처 (작성자/게시 주체)
  evidence: string;    // 2. 근거 (연구, 링크, 통계 등)
  date: string;        // 3. 작성 날짜 (최신성, 시기 적절성)
  crossCheck: string;  // 4. 다른 자료와의 비교 (공식 기관/타 매체 비교)
  purpose: string;     // 5. 정보 전달 목적 (공익, 클릭 유도, 홍보 등)
}

export interface ClueItem {
  id: number;
  mediaType: MediaType;
  mediaCategory: 'sns' | 'blog' | 'video' | 'news' | 'community' | 'messenger' | 'retro' | 'official';
  mediaLabel: string;
  platformName: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  keyFeature: string;
  learningPoint: string;
  investigationClue: string; // 탐정 판단 단서
  badges: string[];
  disclaimerType: 'health' | 'recycle' | 'science' | 'weather' | 'event' | 'school' | 'safety';
  reliabilityGuide: ReliabilityCriteria;
}

export interface ClueInvestigationRecord {
  verdict: CredibilityType | null;
  note: string;
}
