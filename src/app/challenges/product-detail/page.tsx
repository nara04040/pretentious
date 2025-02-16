'use client';

import Link from 'next/link';
import ProductDetail from '@/components/ProductDetail';
import ChallengeContent from '@/components/ChallengeContent';
import RevisionList from '@/components/RevisionList';
import { revisions } from '@/lib/revisions';

export default function ProductDetailPage() {
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
      {size: 'S', chest: 52, shoulder: 44, length: 67, sleeve: 62},
      {size: 'M', chest: 54, shoulder: 46, length: 69, sleeve: 63},
      {size: 'L', chest: 56, shoulder: 48, length: 71, sleeve: 64},
      {size: 'XL', chest: 58, shoulder: 50, length: 73, sleeve: 65},
      {size: 'XXL', chest: 60, shoulder: 52, length: 75, sleeve: 66},
    ],
    stock: [
      { size: 'S', quantity: 10 },
      { size: 'M', quantity: 15 },
      { size: 'L', quantity: 20 },
      { size: 'XL', quantity: 5 },
      { size: 'XXL', quantity: 0 },
    ]
  };

  const challengeContent = {
    sections: [
      {
        title: '🔍 구현 내용',
        content: '이커머스 상품 상세 페이지의 핵심 기능을 구현했습니다:',
        items: [
          '이미지 갤러리 - 썸네일과 메인 이미지 전환',
          '상품 정보 표시 - 브랜드, 상품명, 설명',
          '가격 정보 - 할인가, 정가, 할인율 표시',
          '사이즈 선택 기능',
          '장바구니 담기 기능',
        ],
      },
      {
        title: '💡 UI/UX 고려사항',
        content: '사용자 경험을 향상시키기 위해 다음 사항들을 고려했습니다:',
        items: [
          '직관적인 이미지 갤러리 네비게이션',
          '명확한 가격 정보 계층 구조',
          '사이즈 선택 시 시각적 피드백',
          '반응형 레이아웃 구현',
          '다크모드 지원',
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 transition-colors dark:bg-gray-950">
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
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
            상품 상세 페이지
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            이커머스의 핵심인 상품 상세 페이지 구현
          </p>
        </div>

        <div className="w-3/4 mx-auto mb-16 rounded-xl bg-white p-8 shadow-sm dark:bg-gray-800">
          <ProductDetail product={productData} />
        </div>

        <RevisionList revisions={revisions} componentId='product-detail' />

        <ChallengeContent {...challengeContent} />
      </div>
    </main>
  );
} 