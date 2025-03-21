import Image from "next/image";
import Link from "next/link";

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

const ProfileCard = ({name, role, bio, avatar, socialLinks}: ProfileCardProps) => {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg transition-colors dark:bg-gray-800">
      <div className="relative h-48 w-full bg-gradient-to-r from-blue-500 to-purple-500">
        <div className="absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 transform">
          <Image src={avatar} alt={name} fill className="rounded-full border-4 border-white object-cover dark:border-gray-800"/>
        </div>
      </div>

      <div className="pt-20 pb-8 px-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">{name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
        
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">{bio}</p>

        <div className="mt-6 flex justify-center space-x-4">
          {socialLinks.map((link) => (
            <Link key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" aria-label={`${name}의 ${link.platform}을 방문합니다.`}>
              <span className="sr-only">{link.platform}</span>
              <i className={`text-xl ${link.icon}`} aria-hidden="true" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfileCard; 