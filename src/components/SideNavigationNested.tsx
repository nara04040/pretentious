'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronRight, Menu, ChevronDown } from 'lucide-react';

interface MenuItem {
  id: string;
  icon: string;
  label: string;
  path: string;
  subItems?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 'personal',
    icon: '👤',
    label: '개인',
    path: '#personal',
    subItems: [
      {
        id: 'personal-info',
        icon: '📋',
        label: '개인정보',
        path: '#personal-info',
      },
      {
        id: 'security',
        icon: '🔒',
        label: '보안',
        path: '#security',
        subItems: [
          {
            id: 'password',
            icon: '🔑',
            label: '비밀번호 변경',
            path: '#password',
          },
          {
            id: 'two-factor',
            icon: '📱',
            label: '2단계 인증',
            path: '#two-factor',
          },
        ],
      },
      {
        id: 'preferences',
        icon: '⚙️',
        label: '환경설정',
        path: '#preferences',
      },
    ],
  },
  {
    id: 'messages',
    icon: '✉️',
    label: '메시지',
    path: '#messages',
    subItems: [
      {
        id: 'inbox',
        icon: '📥',
        label: '받은편지함',
        path: '#inbox',
      },
      {
        id: 'sent',
        icon: '📤',
        label: '보낸편지함',
        path: '#sent',
      },
      {
        id: 'drafts',
        icon: '📝',
        label: '임시보관함',
        path: '#drafts',
      },
    ],
  },
  {
    id: 'community',
    icon: '👥',
    label: '커뮤니티',
    path: '#community',
    subItems: [
      {
        id: 'groups',
        icon: '👥',
        label: '그룹',
        path: '#groups',
      },
      {
        id: 'events',
        icon: '📅',
        label: '이벤트',
        path: '#events',
        subItems: [
          {
            id: 'upcoming',
            icon: '🗓️',
            label: '예정된 이벤트',
            path: '#upcoming',
          },
          {
            id: 'past',
            icon: '⌛',
            label: '지난 이벤트',
            path: '#past',
          },
        ],
      },
    ],
  },
  {
    id: 'help',
    icon: '❓',
    label: '도움말',
    path: '#help',
    subItems: [
      {
        id: 'faq',
        icon: '📖',
        label: 'FAQ',
        path: '#faq',
      },
      {
        id: 'contact',
        icon: '📞',
        label: '문의하기',
        path: '#contact',
      },
    ],
  },
];

interface MenuItemProps {
  item: MenuItem;
  level: number;
  activePath: string[];
  onSelect: (path: string[]) => void;
}

const MenuItem = ({ item, level, activePath, onSelect }: MenuItemProps) => {
  const isActive = activePath.includes(item.id);
  const isExpanded = isActive && item.subItems;
  const hasSubItems = item.subItems && item.subItems.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const newPath = activePath.slice(0, level).concat(item.id);
    onSelect(newPath);
  };

  return (
    <div className="w-full">
      <a
        href={item.path}
        className={cn(
          'flex w-full items-center justify-between rounded-lg px-4 py-3 text-gray-700 transition-colors hover:bg-gray-100',
          isActive && 'bg-gray-100 font-medium text-gray-900',
          level > 0 && 'ml-4'
        )}
        onClick={handleClick}
        style={{ paddingLeft: `${level * 1}rem` }}
      >
        <div className="flex items-center gap-2">
          <span className="text-xl">{item.icon}</span>
          <span>{item.label}</span>
        </div>
        {hasSubItems && (
          <span className="ml-auto">
            {isExpanded ? (
              <ChevronDown className={cn('h-5 w-5', isActive ? 'text-gray-900' : 'text-gray-400')} />
            ) : (
              <ChevronRight className={cn('h-5 w-5', isActive ? 'text-gray-900' : 'text-gray-400')} />
            )}
          </span>
        )}
      </a>
      {isExpanded && hasSubItems && (
        <div className="mt-1 space-y-1">
          {item.subItems!.map((subItem) => (
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
};

export const SideNavigationNested = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePath, setActivePath] = useState<string[]>([]);
  const navigationRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuSelect = (path: string[]) => {
    setActivePath(path);
  };

  return (
    <div className="relative h-full">
      {/* Header */}
      <header className="flex items-center justify-between border-b border-gray-200 bg-white p-4">
        <button
          onClick={toggleMenu}
          className="rounded-lg p-2 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-gray-900" />
        </button>
      </header>

      {/* Side Navigation */}
      <div
        ref={navigationRef}
        className={cn(
          'absolute inset-y-0 left-0 z-50 w-72 transform overflow-y-auto bg-white shadow-lg transition-transform duration-300 ease-out',
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
                  alt="Profile"
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
              <MenuItem
                key={item.id}
                item={item}
                level={0}
                activePath={activePath}
                onSelect={handleMenuSelect}
              />
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