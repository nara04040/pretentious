'use client';

import Link from 'next/link';
import ProfileCardHover from '@/components/ProfileCardHover';

export default function ProfileCardHoverPage() {
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
            개선된 호버 효과 프로필 카드
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            소셜 미디어 아이콘에 툴팁과 리플 효과를 추가한 버전
          </p>
        </div>

        <div className="flex justify-center">
          <ProfileCardHover {...profileData} />
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-lg bg-white p-8 shadow-lg transition-colors dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">구현 설명</h2>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">
              소셜 미디어 링크의 호버 효과는 다음과 같은 방식으로 개선되었습니다:
            </p>
            <ul className="mt-4 list-inside list-disc space-y-2">
              <li className="text-gray-600 dark:text-gray-300">
                아이콘 호버 시 부드러운 스케일 업 애니메이션 적용
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                호버 시 배경색 변경과 함께 리플 효과 표시
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                플랫폼 이름을 보여주는 툴팁 추가 (화살표 포함)
              </li>
              <li className="text-gray-600 dark:text-gray-300">
                다크모드에서도 자연스러운 전환 효과 구현
              </li>
            </ul>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              모든 애니메이션은 부드러운 전환을 위해 CSS transition과 transform을 활용했으며,
              접근성을 위한 ARIA 레이블도 유지했습니다.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 