'use client';

import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';

interface CodeBlock {
  title: string;
  code: string;
  language?: string;
  explanation: string;
}

interface ContentSection {
  title: string;
  content: string;
  items?: string[];
  codeBlocks?: CodeBlock[];
}

interface ChallengeContentProps {
  sections: ContentSection[];
  sourceCode?: string;
}

const ChallengeContent = ({ sections, sourceCode }: ChallengeContentProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [sections]);

  return (
    <div className="mx-auto mt-16 max-w-3xl rounded-lg bg-white p-8 shadow-lg transition-colors dark:bg-gray-800">
      {sections.map((section, index) => (
        <div key={index} className="mb-12 last:mb-0">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p className="text-gray-600 dark:text-gray-300">{section.content}</p>
            {section.items && (
              <ul className="mt-4 list-inside list-disc space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 dark:text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            )}
            {section.codeBlocks && (
              <div className="mt-6 space-y-6">
                {section.codeBlocks.map((block, blockIndex) => (
                  <div
                    key={blockIndex}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900"
                  >
                    <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                      {block.title}
                    </h3>
                    <div className="overflow-hidden rounded-lg bg-[#2d2d2d] p-4">
                      <pre className="overflow-x-auto">
                        <code className={`language-${block.language || 'typescript'}`}>
                          {block.code}
                        </code>
                      </pre>
                    </div>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">{block.explanation}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}

      {sourceCode && (
        <div className="mt-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Source Code</h2>
          <div className="overflow-hidden rounded-lg bg-gray-900 p-4">
            <pre className="overflow-x-auto">
              <code className="text-sm text-gray-100">{sourceCode}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChallengeContent; 