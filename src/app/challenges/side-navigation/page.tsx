import { Metadata } from 'next';
import { SideNavigation } from '@/components/SideNavigation';
import RevisionList from '@/components/RevisionList';
import ChallengeContent from '@/components/ChallengeContent';
import Link from 'next/link';
import { revisions } from '@/lib/revisions';

export const metadata: Metadata = {
  title: 'Side Navigation | UI Challenges',
  description: '모바일 사이드 네비게이션 UI 구현',
};

export default function SideNavigationPage() {
  const challengeContent = {
    sections: [
      {
        title: '🎯 챌린지 목표',
        content: '모바일 사이드 네비게이션 UI를 개발해봅니다.',
        items: [
          '직관적이고 사용하기 쉬운 모바일 네비게이션 구현',
          '부드러운 애니메이션과 전환 효과 적용',
          '접근성을 고려한 인터랙션 구현',
          '반응형 레이아웃과 터치 인터페이스 최적화',
        ],
      },
      {
        title: '💡 주요 기술 및 개념',
        content: '이 프로젝트를 통해 다음과 같은 기술과 개념을 학습하고 적용했습니다:',
        items: [
          'React와 TypeScript를 활용한 컴포넌트 상태 관리',
          'Tailwind CSS를 이용한 반응형 디자인 구현',
          'Framer Motion을 활용한 부드러운 애니메이션 효과',
          'ARIA 속성을 활용한 웹 접근성 향상',
          'CSS Transform과 Transition을 활용한 슬라이드 효과',
          '모바일 터치 이벤트 핸들링',
        ],
      },
      {
        title: '🤔 개발 과정에서의 고민',
        content: '사이드 네비게이션을 개발하면서 다음과 같은 부분들을 중점적으로 고민했습니다:',
        items: [
          '네비게이션 열림/닫힘 상태에 따른 적절한 애니메이션 타이밍',
          '모바일 환경에서의 터치 제스처 지원 방식',
          '화면 크기에 따른 네비게이션 메뉴의 적절한 너비 설정',
          '오버레이 클릭 시 네비게이션 닫힘 처리 방식',
          '키보드 네비게이션 지원을 위한 포커스 관리',
          '다크 모드 지원을 위한 색상 시스템 설계',
        ],
      },
      {
        title: '📚 학습한 내용',
        content: '이 챌린지를 통해 다음과 같은 내용을 학습했습니다:',
        items: [
          'React의 useState를 활용한 토글 상태 관리',
          'CSS Transform 속성을 활용한 슬라이드 애니메이션 구현',
          'Tailwind의 transition 클래스를 활용한 부드러운 전환 효과',
          'ARIA 속성을 활용한 접근성 있는 네비게이션 구현',
          '모바일 환경에서의 터치 이벤트 처리 방법',
          'z-index를 활용한 레이어 관리',
        ],
      },
      {
        title: '🎨 UI/UX 디자인 결정',
        content: '사용자 경험을 향상시키기 위해 다음과 같은 디자인 결정을 내렸습니다:',
        items: [
          '햄버거 메뉴 아이콘의 크기와 터치 영역 최적화',
          '메뉴 아이템 간의 적절한 간격과 크기 설정',
          '활성 상태의 메뉴 아이템에 대한 시각적 피드백 제공',
          '오버레이의 투명도를 통한 깊이감 표현',
          '프로필 섹션을 상단에 배치하여 사용자 컨텍스트 제공',
          '아이콘과 텍스트의 조화로운 배치',
        ],
      },
      {
        title: '💻 주요 코드',
        content: '주요 기능 구현을 위한 핵심 코드입니다:',
        items: [],
        codeBlocks: [
          {
            title: '메뉴 아이템 타입 정의',
            language: 'typescript',
            code: `interface MenuItem {
  id: string;
  icon: string;
  label: string;
  path: string;
}`,
            explanation: '메뉴 아이템의 구조를 정의하는 타입스크립트 인터페이스입니다.',
          },
          {
            title: '슬라이드 애니메이션 구현',
            language: 'typescript',
            code: `<div
  className={cn(
    'absolute inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-in-out',
    isOpen ? 'translate-x-0' : '-translate-x-full'
  )}
>`,
            explanation: 'Tailwind CSS의 transform과 transition 클래스를 활용한 슬라이드 애니메이션 구현 코드입니다.',
          },
        ],
      },
    ],
  };
  return (
    <main className="min-h-screen bg-gray-100 py-12 transition-colors dark:bg-gray-950">
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <Link
          href="/"
          className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <svg
            className="mr-2 h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          챌린지 목록으로 돌아가기
        </Link>
      </div>

      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">프로필 카드 UI</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          반응형 디자인과 접근성을 고려한 프로필 카드 컴포넌트
        </p>
      </div>

      <div className='flex flex-col items-center justify-center p-4'>
        <div className='w-full max-w-md'>
          <div className='relative mx-auto h-[700px] w-full overflow-hidden rounded-[40px] border-[8px] border-gray-900 bg-white'>
          <SideNavigation />
          </div>
        </div>
      </div>
      

      <RevisionList revisions={revisions} componentId="side-navigation" />

      <ChallengeContent {...challengeContent} />
    </div>
  </main>
  );
} 