'use client';

import Link from 'next/link';
import ProductDetailZoom from '@/components/ProductDetailZoom';
import ChallengeContent from '@/components/ChallengeContent';

export default function ProductImageZoomPage() {
  const productData = {
    id: 'product-1',
    brand: '제품 브랜드',
    name: '제품 이름',
    description: '제품에 대한 설명입니다..',
    price: 100000,
    originalPrice: 150000,
    discount: 25,
    images: [
      '/ricardo.png',
      '/quka.png',
      '/dancing-quka.png',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    sizeGuide: [
      { size: 'S', chest: 52, shoulder: 44, length: 67, sleeve: 62 },
      { size: 'M', chest: 54, shoulder: 46, length: 69, sleeve: 63 },
      { size: 'L', chest: 56, shoulder: 48, length: 71, sleeve: 64 },
      { size: 'XL', chest: 58, shoulder: 50, length: 73, sleeve: 65 },
      { size: 'XXL', chest: 60, shoulder: 52, length: 75, sleeve: 66 },
    ],
    stock: [
      { size: 'S', quantity: 10 },
      { size: 'M', quantity: 15 },
      { size: 'L', quantity: 20 },
      { size: 'XL', quantity: 5 },
      { size: 'XXL', quantity: 0 },
    ],
  };

  const challengeContent = {
    sections: [
      {
        title: '🔍 변경 요청 분석',
        content: '제품 이미지의 상세 확인을 위한 줌 기능 추가 요청을 분석했습니다:',
        items: [
          '마우스 오버 시 커서 위치 기반 확대 기능',
          '클릭 시 전체화면 모달로 이미지 보기',
          '모달에서 이미지 갤러리 네비게이션',
          '키보드 접근성 지원',
        ],
      },
      {
        title: '💡 구현 방법',
        content: '다음과 같은 기술적 접근으로 이미지 줌 기능을 구현했습니다:',
        items: [
          'CSS transform과 scale을 활용한 부드러운 줌 효과',
          '마우스 좌표 기반 동적 transform-origin 계산',
          '모달 컴포넌트를 통한 전체화면 갤러리',
          '키보드 네비게이션과 접근성 고려',
        ],
      },
      {
        title: '⚡ 기술적 고려사항',
        content: '기능 구현 시 다음과 같은 기술적 측면들을 고려했습니다:',
        items: [
          '성능 최적화: 불필요한 리렌더링 방지',
          '접근성: 키보드 탐색 및 ARIA 레이블 추가',
          '반응형: 모든 디바이스에서의 일관된 경험',
          '사용성: 직관적인 인터랙션과 시각적 피드백',
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 transition-colors dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/challenges/product-detail"
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
            원본 상품 상세 페이지로 돌아가기
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            이미지 줌 기능 추가
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            제품 이미지에 줌 기능과 전체화면 갤러리를 추가한 UI 버전
          </p>
        </div>

        <div className="w-3/4 mx-auto mb-16 rounded-xl bg-gray-200 p-8 shadow-sm dark:bg-gray-800">
          <ProductDetailZoom product={productData} />
        </div>

        <ChallengeContent {...challengeContent} />
      </div>
    </main>
  );
} 