'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ImageModal from './ImageModal';
import SizeGuideModal from './SizeGuideModal';

interface ProductDetailZoomProps {
  product: Product;
}

const ProductDetailZoom = ({ product }: ProductDetailZoomProps) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isZoomed, setIsZoomed] = useState(false);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleImageClick = () => {
    setIsImageModalOpen(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Product Gallery */}
      <div className="flex w-full gap-4 lg:w-2/3">
        <div className="flex flex-col gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={cn(
                'relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-all hover:opacity-80',
                currentImageIndex === index
                  ? 'border-blue-500'
                  : 'border-gray-200 dark:border-gray-700'
              )}
              aria-label={`${product.name} 이미지 ${index + 1} 선택`}
            >
              <Image
                src={image}
                alt={`${product.name} 썸네일 ${index + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
        <div
          className="relative flex-1 overflow-hidden rounded-lg bg-gray-300 dark:bg-gray-800"
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleImageClick}
          role="button"
          tabIndex={0}
          aria-label={`${product.name} 이미지 확대보기`}
        >
          <Image
            src={product.images[currentImageIndex]}
            alt={`${product.name} 이미지 ${currentImageIndex + 1}`}
            fill
            className={cn(
              'object-contain transition-transform duration-200',
              isZoomed && 'scale-150'
            )}
            style={{
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
            sizes="(max-width: 1024px) 100vw, 66vw"
            priority
          />
        </div>
      </div>

      {/* Product Info */}
      <div className="w-full lg:w-1/3">
        <div className="mb-6">
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {product.brand}
          </span>
          <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {product.name}
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {product.description}
          </p>
        </div>

        <div className="mb-8">
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              {product.price.toLocaleString()} 원
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-gray-500 line-through dark:text-gray-400">
                  {product.originalPrice.toLocaleString()} 원
                </span>
                {product.discount && (
                  <span className="rounded-md bg-blue-100 px-2 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                    -{product.discount}%
                  </span>
                )}
              </>
            )}
          </div>
        </div>

        <div className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              사이즈
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => handleSizeSelect(size)}
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-md border text-sm font-medium transition-all hover:border-blue-500 hover:text-blue-500',
                  selectedSize === size
                    ? 'border-blue-500 bg-blue-500 text-white hover:bg-blue-600'
                    : 'border-gray-200 text-gray-900 dark:border-gray-700 dark:text-white'
                )}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => {}}
          className="w-full rounded-lg bg-blue-500 px-8 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          ADD TO BAG
        </button>
      </div>

      {/* Modals */}
      <ImageModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        images={product.images}
        currentIndex={currentImageIndex}
        productName={product.name}
      />
    </div>
  );
};

export default ProductDetailZoom; 