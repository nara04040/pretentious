import { Metadata } from 'next';
import { SideNavigationSwipe } from '@/components/SideNavigationSwipe';
import ChallengeContent from '@/components/ChallengeContent';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Side Navigation - Swipe Gesture | UI Challenges',
  description: '모바일 사이드 네비게이션의 스와이프 제스처 구현',
};

export default function SwipeGesturePage() {
  const challengeContent = {
    sections: [
      {
        title: '🎯 구현 목표',
        content: '모바일 환경에 최적화된 스와이프 제스처 기능을 구현합니다.',
        items: [
          '화면 가장자리에서의 스와이프 동작 감지',
          '스와이프 진행도에 따른 자연스러운 애니메이션',
          '제스처 취소 시 원위치로 복귀',
          '터치 이벤트 핸들링과 상태 관리',
        ],
      },
      {
        title: '💡 주요 기술 및 개념',
        content: '이 기능을 구현하기 위해 다음과 같은 기술과 개념을 활용했습니다:',
        items: [
          'React의 useState와 useRef를 활용한 터치 이벤트 상태 관리',
          'TouchEvent 인터페이스를 활용한 터치 제스처 처리',
          'CSS Transform과 Transition을 활용한 부드러운 애니메이션',
          'requestAnimationFrame을 활용한 성능 최적화',
          '모바일 환경에서의 이벤트 버블링 제어',
        ],
      },
      {
        title: '🤔 구현 과정에서의 고민',
        content: '스와이프 제스처를 구현하면서 다음과 같은 부분들을 중점적으로 고민했습니다:',
        items: [
          '스와이프 동작의 자연스러운 감속 효과 구현 방식',
          '디바이스별 터치 감도 차이 대응',
          '스와이프 취소 시 원위치 복귀 애니메이션 타이밍',
          '여러 터치 이벤트가 동시에 발생할 때의 처리 방식',
          '성능 최적화를 위한 리렌더링 최소화 전략',
        ],
      },
      {
        title: '💻 주요 코드',
        content: '핵심 기능 구현을 위한 코드입니다:',
        items: [],
        codeBlocks: [
          {
            title: '터치 이벤트 핸들링',
            language: 'typescript',
            code: `const handleTouchMove = (e: React.TouchEvent) => {
  const currentTouch = e.targetTouches[0].clientX;
  const diff = (currentTouch - (touchStart ?? 0));
  
  // 닫힌 상태에서 오른쪽으로 스와이프
  if (!isOpen && diff > 0) {
    const percentage = Math.min((diff / window.innerWidth) * 100, 0);
    setTranslateX(-100 + percentage);
  }
  // 열린 상태에서 왼쪽으로 스와이프
  else if (isOpen && diff < 0) {
    const percentage = Math.max((diff / window.innerWidth) * 100, -100);
    setTranslateX(percentage);
  }
  
  setTouchEnd(currentTouch);
};`,
            explanation: '터치 이벤트의 위치 변화를 감지하고, 이를 바탕으로 네비게이션의 위치를 계산합니다.',
          },
          {
            title: '스와이프 완료 처리',
            language: 'typescript',
            code: `const handleTouchEnd = () => {
  if (!touchStart || !touchEnd) return;
  
  const distance = touchEnd - touchStart;
  const isLeftSwipe = distance < -minSwipeDistance;
  const isRightSwipe = distance > minSwipeDistance;
  
  if (isRightSwipe && !isOpen) {
    setIsOpen(true);
    setTranslateX(0);
  } else if (isLeftSwipe && isOpen) {
    setIsOpen(false);
    setTranslateX(-100);
  } else {
    // 원래 상태로 복귀
    setTranslateX(isOpen ? 0 : -100);
  }
};`,
            explanation: '스와이프 거리를 계산하여 네비게이션의 최종 상태를 결정하고, 필요한 경우 원위치로 복귀시킵니다.',
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
            href="/challenges/side-navigation"
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
            모바일 네비게이션으로 돌아가기
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            스와이프 제스처 지원
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            모바일 환경에 최적화된 스와이프 제스처로 더 자연스러운 사용자 경험 제공
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="relative mx-auto h-[700px] w-full overflow-hidden rounded-[40px] border-[8px] border-gray-900 bg-white">
              <SideNavigationSwipe />
            </div>
          </div>
        </div>

        <ChallengeContent {...challengeContent} />
      </div>
    </main>
  );
} 