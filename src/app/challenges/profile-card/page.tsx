'use client';

import Link from 'next/link';
import ProfileCard from '@/components/ProfileCard';
import ChallengeContent from '@/components/ChallengeContent';

export default function ProfileCardPage() {
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
        title: '🎯 챌린지 목표',
        content: '반응형 프로필 카드 UI를 구현하면서 모던 웹 디자인 트렌드와 접근성을 고려한 개발을 경험합니다.',
        items: [
          '그라데이션과 그림자를 활용한 현대적인 디자인',
          '소셜 미디어 링크 통합',
          '반응형 레이아웃 구현',
          '웹 접근성 가이드라인 준수',
        ],
      },
      {
        title: '💡 주요 기술 및 개념',
        content: '이 프로젝트를 통해 다음과 같은 기술과 개념을 학습하고 적용했습니다:',
        items: [
          'Next.js Image 컴포넌트를 활용한 이미지 최적화',
          'Tailwind CSS를 활용한 반응형 디자인',
          'CSS Grid와 Flexbox를 활용한 레이아웃 구성',
          'Font Awesome 아이콘 통합',
          'ARIA 레이블과 시맨틱 HTML을 활용한 접근성 개선',
        ],
      },
      {
        title: '🤔 개발 과정에서의 고민',
        content: '프로필 카드를 개발하면서 다음과 같은 부분들을 중점적으로 고민했습니다:',
        items: [
          '이미지 최적화: Next.js의 Image 컴포넌트를 사용하여 이미지 로딩 성능 개선',
          '반응형 디자인: 다양한 화면 크기에서 일관된 사용자 경험 제공',
          '접근성: 스크린 리더 사용자를 위한 적절한 ARIA 레이블 추가',
          '재사용성: 컴포넌트의 props 타입을 명확히 정의하여 재사용성 향상',
          '시각적 피드백: 호버 효과와 트랜지션을 통한 인터랙션 개선',
        ],
      },
      {
        title: '📚 학습한 내용',
        content: '이 챌린지를 통해 다음과 같은 내용을 학습했습니다:',
        items: [
          'Next.js 13+의 새로운 Image 컴포넌트 사용법',
          'Tailwind CSS의 그라데이션과 트랜지션 활용',
          'TypeScript를 활용한 타입 안정성 확보',
          'CSS Grid와 Flexbox의 적절한 사용 시점',
          '웹 접근성 향상을 위한 ARIA 속성 활용',
        ],
      },
      {
        title: '🎨 UI/UX 디자인 결정',
        content: '사용자 경험을 향상시키기 위해 다음과 같은 디자인 결정을 내렸습니다:',
        items: [
          '그라데이션 배경으로 시각적 흥미 유발',
          '소셜 미디어 아이콘에 호버 효과 추가로 인터랙티브한 경험 제공',
          '적절한 여백과 그림자로 카드의 계층 구조 표현',
          '반응형 디자인으로 모든 디바이스에서 최적화된 표시',
        ],
      },
      {
        title: '💻 주요 코드',
        content: '프로필 카드 구현의 핵심 코드와 설명입니다:',
        items: [
          '타입 정의: 컴포넌트의 재사용성과 타입 안정성을 위한 인터페이스 정의',
          '이미지 최적화: Next.js Image 컴포넌트를 활용한 이미지 처리',
          '접근성: ARIA 레이블과 시맨틱 마크업',
          'Tailwind CSS: 반응형 디자인과 스타일링',
        ],
        codeBlocks: [
          {
            title: '타입 정의',
            language: 'typescript',
            code: `interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socialLinks: SocialLink[];
}`,
            explanation: '타입스크립트를 사용하여 컴포넌트의 props와 소셜 링크의 구조를 명확하게 정의했습니다.',
          },
          {
            title: '이미지 처리',
            language: 'tsx',
            code: `<div className="relative h-48 w-full bg-gradient-to-r from-blue-500 to-purple-500">
  <div className="absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 transform">
    <Image
      src={avatar}
      alt={name}
      fill
      className="rounded-full border-4 border-white object-cover"
    />
  </div>
</div>`,
            explanation: 'Next.js의 Image 컴포넌트를 사용하여 이미지 최적화를 구현하고, 절대 위치 지정과 변환을 통해 오버랩 효과를 만들었습니다.',
          },
          {
            title: '소셜 링크 구현',
            language: 'tsx',
            code: `<div className="mt-6 flex justify-center space-x-4">
  {socialLinks.map((link) => (
    <Link
      key={link.platform}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-600 transition-colors hover:text-gray-900"
      aria-label={\`\${name}의 \${link.platform}을 방문합니다.\`}
    >
      <span className="sr-only">{link.platform}</span>
      <i className={\`text-xl \${link.icon}\`} aria-hidden="true" />
    </Link>
  ))}
</div>`,
            explanation: '접근성을 고려하여 스크린 리더 사용자를 위한 텍스트를 추가하고, 아이콘에는 aria-hidden 속성을 적용했습니다.',
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
            챌린지로 돌아가기
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">프로필 카드 UI</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            반응형 디자인과 접근성을 고려한 프로필 카드 컴포넌트
          </p>
        </div>

        <div className="flex justify-center">
          <ProfileCard {...profileData} />
        </div>

        <ChallengeContent {...challengeContent} />
      </div>
    </main>
  );
} 