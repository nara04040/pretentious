'use client';

import Image from 'next/image';
import Link from 'next/link';

interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

interface ProfileCardProps {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socialLinks: SocialLink[];
}

const ProfileCardHover = ({ name, role, bio, avatar, socialLinks }: ProfileCardProps) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg transition-colors dark:bg-gray-800">
      <div className="relative h-48 w-full bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 transform">
          <Image
            src={avatar}
            alt={name}
            fill
            className="rounded-full border-4 border-white object-cover dark:border-gray-800"
          />
        </div>
      </div>

      <div className="px-6 pb-8 pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>

        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">{bio}</p>

        <div className="mt-6 flex justify-center space-x-6">
          {socialLinks.map((link) => (
            <div key={link.platform} className="group relative">
              <Link
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transform rounded-lg p-2 text-gray-600 transition-all duration-200 hover:scale-110 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                aria-label={`${name}의 ${link.platform}을 방문합니다.`}
              >
                <span className="sr-only">{link.platform}</span>
                <i className={`text-xl ${link.icon}`} aria-hidden="true" />
              </Link>
              {/* Tooltip */}
              <div className="absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 transform">
                <div className="pointer-events-none whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-sm text-white opacity-0 shadow-lg transition-opacity duration-200 dark:bg-gray-700 group-hover:opacity-100">
                  {link.platform}
                  {/* Arrow */}
                  <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 transform bg-gray-900 dark:bg-gray-700" />
                </div>
              </div>
              {/* Ripple Effect */}
              <div className="absolute left-1 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-current opacity-0 group-hover:animate-ripple" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileCardHover; 