'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Send, Phone, Mail, MapPin } from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  preferredContact: 'email' | 'phone';
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 실제 API 호출을 여기서 구현
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // 성공 후 폼 초기화
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredContact: 'email',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden lg:grid-cols-2">
      {/* Left Section - Map & Contact Info */}
      <div className="relative flex flex-col bg-gradient-to-br from-purple-600 to-indigo-800 p-8 text-white lg:p-12">
        <div className="mb-8">
          <h1 className="mb-4 text-4xl font-bold">문의하기</h1>
          <p className="text-lg text-purple-100">
            질문과 제품에 대한 문제가 있으신가요? 
            <br />
            도와드리겠습니다!
          </p>
        </div>

        <div className="mt-auto space-y-6">
          <div className="flex items-center space-x-4">
            <MapPin className="h-6 w-6 text-purple-300" />
            <div>
              <h3 className="font-semibold">위치</h3>
              <p className="text-purple-100">대한민국, 서울, 어딘가</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-purple-300" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-purple-100">company@example.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-purple-300" />
            <div>
              <h3 className="font-semibold">회사 전화번호</h3>
              <p className="text-purple-100">02-1234-4567</p>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 opacity-10">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <pattern
              id="grid"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Right Section - Contact Form */}
      <div className="flex items-center justify-center bg-white p-8 lg:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">메세지로 문의하기</h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700">
                이름
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-gray-700">
                전화번호
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                문의할 방법
              </label>
              <div className="mt-2 flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="email"
                    checked={formData.preferredContact === 'email'}
                    onChange={handleChange}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">이메일</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="preferredContact"
                    value="phone"
                    checked={formData.preferredContact === 'phone'}
                    onChange={handleChange}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">전화</span>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                문의내용
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-200"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              'flex w-full items-center justify-center space-x-2 rounded-lg bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2',
              isSubmitting && 'cursor-not-allowed opacity-70'
            )}
          >
            <Send className="h-5 w-5" />
            <span>{isSubmitting ? '제출 중...' : '제출하기'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}; 