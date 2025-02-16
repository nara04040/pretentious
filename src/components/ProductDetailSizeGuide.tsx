'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Product } from '@/types/product';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SizeGuideModal from '@/components/SizeGuideModal';
import { Lightbulb } from 'lucide-react';

interface ProductDetailSizeGuideProps {
  product: Product;
}

const ProductDetailSizeGuide = ({ product }: ProductDetailSizeGuideProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  const handleImageSelect = (index: number) => {
    setSelectedImage(index);
  };

  const handleAddToBag = () => {
    if (!selectedSize) {
      alert('제품의 사이즈를 골라주세요');
      return;
    }
    // Add to cart logic here
  };

  return (
    <div className="flex flex-col gap-8 lg:flex-row">
      {/* Product Gallery */}
      <div className="flex w-full gap-4 lg:w-2/3">
        <div className="flex flex-col gap-4">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => handleImageSelect(index)}
              className={cn(
                'relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-all hover:opacity-80',
                selectedImage === index
                  ? 'border-blue-500'
                  : 'border-gray-200 dark:border-gray-700'
              )}
            >
              <Image
                src={image}
                alt={`${product.name} view ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
        <div className="relative flex-1 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            className="object-contain"
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
              {product.price.toFixed(0)} 원
            </span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-gray-500 line-through dark:text-gray-400">
                  {product.originalPrice.toFixed(0)} 원
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
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSizeGuideOpen(true)}
              className="mr-1 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <Lightbulb size={18} />
              <p className='ml-1'>
              사이즈 가이드
              </p>
            </Button>
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
          onClick={handleAddToBag}
          className="w-full rounded-lg bg-blue-500 px-8 py-4 text-center text-sm font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          ADD TO BAG
        </button>
      </div>

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        sizeGuide={product.sizeGuide}
      />
    </div>
  );
};

export default ProductDetailSizeGuide; 