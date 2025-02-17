'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu } from 'lucide-react';

interface MenuItem {
  id: string;
  icon: string;
  label: string;
  path: string;
}

const menuItems: MenuItem[] = [
  {
    id: 'personal-data',
    icon: '👤',
    label: '개인정보',
    path: '#personal-data',
  },
  {
    id: 'messages',
    icon: '✉️',
    label: '메세지',
    path: '#messages',
  },
  {
    id: 'notifications',
    icon: '🔔',
    label: '알림',
    path: '#notifications',
  },
  {
    id: 'location',
    icon: '📍',
    label: '위치',
    path: '#location',
  },
  {
    id: 'community',
    icon: '👥',
    label: '커뮤니티',
    path: '#community',
  },
  {
    id: 'faqs',
    icon: '❓',
    label: 'FAQs',
    path: '#faqs',
  },
  {
    id: 'settings',
    icon: '⚙️',
    label: '세팅',
    path: '#settings',
  },
];

export const SideNavigationSwipe = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('personal-data');
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [translateX, setTranslateX] = useState(-100); // percentage
  const navigationRef = useRef<HTMLDivElement>(null);

  // 최소 스와이프 거리 (픽셀)
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.targetTouches[0].clientX;
    const diff = (currentTouch - (touchStart ?? 0));
    
    // 닫힌 상태에서 오른쪽으로 스와이프
    if (!isOpen && diff > 0) {
      const percentage = Math.min((diff / window.innerWidth) * 100, 0);
      setTranslateX(-100 + percentage);
    }
    // 열린 상태에서 왼쪽으로 스와이프
    else if (isOpen && diff < 0) {
      const percentage = Math.max((diff / window.innerWidth) * 100, -100);
      setTranslateX(percentage);
    }
    
    setTouchEnd(currentTouch);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchEnd - touchStart;
    const isLeftSwipe = distance < -minSwipeDistance;
    const isRightSwipe = distance > minSwipeDistance;
    
    if (isRightSwipe && !isOpen) {
      setIsOpen(true);
      setTranslateX(0);
    } else if (isLeftSwipe && isOpen) {
      setIsOpen(false);
      setTranslateX(-100);
    } else {
      // 원래 상태로 복귀
      setTranslateX(isOpen ? 0 : -100);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setTranslateX(isOpen ? -100 : 0);
  };

  // 화면 바깥쪽 터치로 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setTranslateX(-100);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative h-full">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
        <button
          onClick={toggleMenu}
          className="rounded-lg p-2 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <Menu color="black" />
        </button>
      </header>

      {/* Side Navigation */}
      <div
        ref={navigationRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ transform: `translateX(${translateX}%)` }}
        className={cn(
          'absolute inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg transition-transform duration-300 ease-out will-change-transform'
        )}
      >
        <div className="flex h-full flex-col">
          {/* Profile Section */}
          <div className="border-b border-gray-200 p-6">
            <div className="mb-4 flex items-center space-x-4">
              <div className="relative h-16 w-16 overflow-hidden rounded-full">
                <Image
                  src="/ricardo.png"
                  alt="Lisa Richardson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-gray-900">jin</h2>
                <p className="text-sm text-gray-600">frontend-developer</p>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-1 p-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                className={cn(
                  'flex justify-between items-center space-x-3 rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100',
                  activeItem === item.id && 'bg-gray-100 font-medium text-gray-900'
                )}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveItem(item.id);
                }}
              >
                <div>
                  <span className="text-xl mr-2">{item.icon}</span>
                  <span>{item.label}</span>
                </div>
                <div>
                  <span className="ml-auto">
                    {activeItem === item.id ? <ChevronRight color='black'/> : <ChevronRight color='lightgray'/>}
                  </span>
                </div>
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="absolute inset-0 z-40 bg-black bg-opacity-25 transition-opacity"
          onClick={toggleMenu}
        />
      )}
    </div>
  );
}; 