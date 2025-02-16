'use client';

import Link from 'next/link';
import ProductDetailSizeGuide from '@/components/ProductDetailSizeGuide';
import ChallengeContent from '@/components/ChallengeContent';

export default function ProductSizeGuidePage() {
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
        content: '사이즈 가이드 기능 추가 요청을 분석했습니다:',
        items: [
          '사이즈 선택 영역에 가이드 버튼 추가',
          '상세 치수 정보를 모달로 표시',
          '사이즈별 상세 측정 정보 제공',
          '모바일 대응 테이블 레이아웃',
        ],
      },
      {
        title: '💡 구현 방법',
        content: '다음과 같은 기술적 접근으로 사이즈 가이드 기능을 구현했습니다:',
        items: [
          '모달 컴포넌트를 활용한 사이즈 정보 표시',
          '반응형 테이블 레이아웃 구현',
          '키보드 네비게이션 지원',
          '다크모드 대응 UI',
        ],
      },
      {
        title: '⚡ 기술적 고려사항',
        content: '기능 구현 시 다음과 같은 기술적 측면들을 고려했습니다:',
        items: [
          '접근성: 키보드 조작 및 스크린리더 지원',
          '반응형: 모바일 환경에서의 가독성',
          '사용성: 직관적인 UI/UX 제공',
          '성능: 모달 렌더링 최적화',
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
            사이즈 가이드 기능 추가
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            사이즈 가이드 모달을 통한 상세 치수 정보 제공
          </p>
        </div>

        <div className="w-3/4 mx-auto mb-16 rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
          <ProductDetailSizeGuide product={productData} />
        </div>

        <ChallengeContent {...challengeContent} />
      </div>
    </main>
  );
}