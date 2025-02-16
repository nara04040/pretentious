'use client';

import { Revision } from '@/types/revision';
import Link from 'next/link';

interface RevisionListProps {
  revisions: Revision[];
  componentId: string;
}

export default function RevisionList({ revisions, componentId }: RevisionListProps) {
  const filteredRevisions = revisions.filter(
    (revision) => revision.componentId === componentId
  );

  return (
    <div className="w-3/4 mx-auto mt-16 rounded-lg bg-white p-6 shadow-lg transition-colors dark:bg-gray-800">
      <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">고객(클라이언트) 변경 요청</h2>
      <div className="space-y-4">
        {filteredRevisions.map((revision) => (
          <Link
            key={revision.id}
            href={revision.path}
            className="block rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {revision.title}
                </h3>
                <p className="mt-1 text-gray-600 dark:text-gray-300">{revision.description}</p>
                <div className="mt-2 flex items-center gap-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    요청일: {revision.requestDate}
                  </span>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                      ${
                        revision.status === 'completed'
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      }`}
                  >
                    {revision.status === 'completed' ? '완료' : '진행중'}
                  </span>
                </div>
              </div>
              <svg
                className="h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 