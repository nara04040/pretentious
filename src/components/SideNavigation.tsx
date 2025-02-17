'use client';

import { useState } from 'react';
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

export const SideNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('personal-data');

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative h-full">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
        <button
          onClick={toggleMenu}
          className="rounded-lg p-2 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <Menu color='black' />
        </button>
      </header>

      {/* Side Navigation */}
      <div
        className={cn(
          'absolute inset-y-0 left-0 z-50 w-64 transform bg-white shadow-lg',
          isOpen ? 'translate-x-0' : '-translate-x-full'
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