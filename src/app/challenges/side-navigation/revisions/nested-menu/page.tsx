import { Metadata } from 'next';
import { SideNavigationNested } from '@/components/SideNavigationNested';
import RevisionList from '@/components/RevisionList';
import ChallengeContent from '@/components/ChallengeContent';
import Link from 'next/link';
import { revisions } from '@/lib/revisions';

export const metadata: Metadata = {
  title: 'Side Navigation - Nested Menu | UI Challenges',
  description: '중첩 메뉴 구조를 지원하는 모바일 사이드 네비게이션',
};

export default function NestedMenuPage() {
  const challengeContent = {
    sections: [
      {
        title: '🎯 구현 목표',
        content: '계층적 구조를 가진 중첩 메뉴를 구현합니다.',
        items: [
          '직관적인 중첩 메뉴 구조 구현',
          '부드러운 展開/縮小 애니메이션',
          '현재 메뉴 깊이의 시각적 표현',
          '다양한 깊이의 서브메뉴 지원',
        ],
      },
      {
        title: '💡 주요 기술 및 개념',
        content: '이 기능을 구현하기 위해 다음과 같은 기술과 개념을 활용했습니다:',
        items: [
          '재귀적 컴포넌트 구조를 통한 중첩 메뉴 렌더링',
          'TypeScript를 활용한 메뉴 아이템 타입 정의',
          'CSS Transform과 Transition을 활용한 展開/縮小 애니메이션',
          '상태 관리를 통한 활성 경로 추적',
          '접근성을 고려한 ARIA 속성 적용',
        ],
      },
      {
        title: '🤔 구현 과정에서의 고민',
        content: '중첩 메뉴를 구현하면서 다음과 같은 부분들을 중점적으로 고민했습니다:',
        items: [
          '복잡한 메뉴 구조에서의 상태 관리 방식',
          '중첩 레벨에 따른 적절한 시각적 계층 표현',
          '展開/縮小 시 자연스러운 애니메이션 처리',
          '깊은 중첩 레벨에서의 UX 최적화',
          '메모리 사용량과 성능 최적화',
        ],
      },
      {
        title: '💻 주요 코드',
        content: '핵심 기능 구현을 위한 코드입니다:',
        items: [],
        codeBlocks: [
          {
            title: '중첩 메뉴 아이템 타입 정의',
            language: 'typescript',
            code: `interface MenuItem {
  id: string;
  icon: string;
  label: string;
  path: string;
  subItems?: MenuItem[];
}`,
            explanation: '재귀적 구조를 가진 메뉴 아이템의 타입을 정의합니다.',
          },
          {
            title: '재귀적 메뉴 아이템 컴포넌트',
            language: 'typescript',
            code: `const MenuItem = ({ item, level, activePath, onSelect }: MenuItemProps) => {
  const isActive = activePath.includes(item.id);
  const isExpanded = isActive && item.subItems;
  const hasSubItems = item.subItems && item.subItems.length > 0;

  return (
    <div className="w-full">
      <a
        className={cn(
          'flex w-full items-center justify-between rounded-lg px-4 py-3',
          isActive && 'bg-gray-100 font-medium',
          level > 0 && 'ml-4'
        )}
        style={{ paddingLeft: \`\${level * 1}rem\` }}
      >
        {/* ... content ... */}
      </a>
      {isExpanded && hasSubItems && (
        <div className="mt-1 space-y-1">
          {item.subItems.map((subItem) => (
            <MenuItem
              key={subItem.id}
              item={subItem}
              level={level + 1}
              activePath={activePath}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};`,
            explanation: '재귀적 구조로 중첩 메뉴를 렌더링하는 컴포넌트입니다.',
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
            href="/challenges/mobile-navigation"
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
            중첩 메뉴 구조 지원
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            계층적 구조를 가진 중첩 메뉴로 더 체계적인 네비게이션 제공
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="relative mx-auto h-[700px] w-full overflow-hidden rounded-[40px] border-[8px] border-gray-900 bg-white">
              <SideNavigationNested />
            </div>
          </div>
        </div>

        <RevisionList revisions={revisions} componentId="side-navigation" />

        <ChallengeContent {...challengeContent} />
      </div>
    </main>
  );
} 