'use client';

import Link from 'next/link';
import ProfileCardWave from '@/components/ProfileCardWave';
import ChallengeContent from '@/components/ChallengeContent';

export default function ProfileCardWavePage() {
  const profileData = {
    name: 'Jin',
    role: 'Frontend Developer',
    bio: '지식을 공유하고 새로운 서비스를 개발하는 데 열정적입니다.',
    avatar: '/ricardo.png',
    socialLinks: [
      {
        platform: 'GitHub',
        url: 'https://github.com',
        icon: 'fab fa-github',
      },
      {
        platform: 'Twitter',
        url: 'https://twitter.com',
        icon: 'fab fa-twitter',
      },
      {
        platform: 'LinkedIn',
        url: 'https://linkedin.com',
        icon: 'fab fa-linkedin',
      },
    ],
  };

  const challengeContent = {
    sections: [
      {
        title: '🔍 변경 요청 분석',
        content: '클라이언트의 요청은 단순한 그라데이션 배경을 더 동적이고 시각적으로 흥미로운 요소로 개선하는 것이었습니다. 이를 위해 다음과 같은 사항들을 고려했습니다:',
        items: [
          '기존 그라데이션의 색상과 조화를 이루는 웨이브 디자인',
          '성능을 고려한 CSS 기반 애니메이션 구현',
          '다크모드 지원을 위한 투명도 조정',
          '부드럽고 자연스러운 움직임을 위한 타이밍 조정',
        ],
      },
      {
        title: '💻 구현 방법',
        content: '웨이브 애니메이션을 구현하기 위해 다음과 같은 기술적 접근을 사용했습니다:',
        codeBlocks: [
          {
            title: 'Tailwind 애니메이션 설정',
            language: 'typescript',
            code: `// tailwind.config.ts
keyframes: {
  wave: {
    '0%': { transform: 'translateX(0)' },
    '100%': { transform: 'translateX(-50%)' },
  },
},
animation: {
  wave: 'wave 8s linear infinite',
  'wave-slow': 'wave 12s linear infinite',
},`,
            explanation: '웨이브 효과를 위해 두 가지 속도의 애니메이션을 정의했습니다. 기본 웨이브는 8초, 느린 웨이브는 12초 주기로 움직입니다.',
          },
          {
            title: '웨이브 레이어 구현',
            language: 'tsx',
            code: `<div className="absolute inset-0 overflow-hidden">
  <div className="wave absolute bottom-0 left-0 h-[20%] w-[200%] animate-wave">
    <div className="absolute h-full w-[50%] origin-bottom-right -skew-x-12 bg-white/20" />
    <div className="absolute left-[50%] h-full w-[50%] origin-bottom-left skew-x-12 bg-white/20" />
  </div>
  <div className="wave absolute bottom-0 left-0 h-[15%] w-[200%] animate-wave-slow">
    <div className="absolute h-full w-[50%] origin-bottom-right -skew-x-12 bg-white/10" />
    <div className="absolute left-[50%] h-full w-[50%] origin-bottom-left skew-x-12 bg-white/10" />
  </div>
</div>`,
            explanation: '각 웨이브는 두 개의 기울어진 직사각형으로 구성되며, transform-origin과 skew를 사용하여 웨이브 모양을 만듭니다. 서로 다른 높이와 투명도로 깊이감을 표현했습니다.',
          },
        ],
      },
      {
        title: '🎨 스타일링 상세',
        content: '다크모드에서는 웨이브의 투명도를 조정하여 배경과의 조화를 이루도록 했습니다:',
        items: [
          '라이트모드: bg-white/20 (20% 불투명도)',
          '다크모드: dark:bg-white/10 (10% 불투명도)',
        ],
      },
      {
        title: '⚡ 기술적 고려사항',
        content: '애니메이션 구현 시 다음과 같은 기술적 측면들을 고려했습니다:',
        items: [
          '성능 최적화: CSS transform만을 사용하여 GPU 가속을 활용',
          '반응형 디자인: 상대적인 단위(%)를 사용하여 모든 화면 크기에서 일관된 표시',
          '접근성: 순수 장식 요소이므로 aria-hidden 속성 적용',
          '브라우저 호환성: 모던 브라우저에서 널리 지원되는 CSS 속성만 사용',
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 transition-colors dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/challenges/profile-card"
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
            원본 프로필 카드로 돌아가기
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            웨이브 애니메이션 프로필 카드
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            그라데이션 배경에 웨이브 애니메이션을 추가한 버전
          </p>
        </div>

        <div className="flex justify-center">
          <ProfileCardWave {...profileData} />
        </div>

        <ChallengeContent {...challengeContent} />
      </div>
    </main>
  );
} 