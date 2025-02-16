'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { SizeGuide } from '@/types/product';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  sizeGuide: SizeGuide[];
}

export default function SizeGuideModal({
  isOpen,
  onClose,
  sizeGuide,
}: SizeGuideModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative mx-auto w-full max-w-2xl rounded-lg bg-white p-6 shadow-xl dark:bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">사이즈 가이드</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="닫기"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>

        {/* Size Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[500px] border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="p-4 text-left font-semibold">사이즈</th>
                <th className="p-4 text-left font-semibold">가슴</th>
                <th className="p-4 text-left font-semibold">어깨</th>
                <th className="p-4 text-left font-semibold">총장</th>
                <th className="p-4 text-left font-semibold">소매</th>
              </tr>
            </thead>
            <tbody>
              {sizeGuide.map((item) => (
                <tr
                  key={item.size}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <td className="p-4 font-medium">{item.size}</td>
                  <td className="p-4">{item.chest}cm</td>
                  <td className="p-4">{item.shoulder}cm</td>
                  <td className="p-4">{item.length}cm</td>
                  <td className="p-4">{item.sleeve}cm</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Notes */}
        <div className="mt-6 space-y-2 text-sm text-gray-500 dark:text-gray-400">
          <p>
            * 상세 치수는 측정 방법과 위치에 따라 1-3cm 정도의 오차가 발생할 수
            있습니다.
          </p>
          <p>
            * 모니터의 해상도와 설정에 따라 실제 제품의 색상과 차이가 있을 수
            있습니다.
          </p>
        </div>
      </div>
    </div>
  );
} 