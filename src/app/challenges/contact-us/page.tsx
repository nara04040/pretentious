import { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import RevisionList from '@/components/RevisionList';
import ChallengeContent from '@/components/ChallengeContent';
import Link from 'next/link';
import { revisions } from '@/lib/revisions';

export const metadata: Metadata = {
  title: 'Contact Us | UI Challenges',
  description: '문의하기 UI 구현',
};

export default function ContactUsPage() {
  const challengeContent = {
    sections: [
      {
        title: '🎯 챌린지 목표',
        content: '문의하기 UI를 개발해봅니다.',
        items: [
          '사용자 친화적인 문의 양식 구현',
          '입력 필드의 유효성 검사 및 오류 처리',
          '반응형 디자인으로 다양한 기기 지원',
          '접근성을 고려한 폼 요소 설계',
        ],
      },
      {
        title: '💡 주요 기술 및 개념',
        content: '이 프로젝트를 통해 다음과 같은 기술과 개념을 학습하고 적용했습니다:',
        items: [
          'React와 TypeScript를 활용한 폼 상태 관리',
          'Tailwind CSS를 이용한 반응형 디자인',
          '폼 유효성 검사 및 오류 메시지 처리',
          'ARIA 속성을 활용한 웹 접근성 향상',
          '사용자 입력 데이터 처리 및 검증',
        ],
      },
      {
        title: '🤔 개발 과정에서의 고민',
        content: '문의하기 UI를 개발하면서 다음과 같은 부분들을 중점적으로 고민했습니다:',
        items: [
          '사용자에게 적절한 피드백을 제공하는 방식',
          '다양한 입력 필드에 대한 유효성 검사 전략',
          '필수 입력 필드와 선택 입력 필드의 구분',
          '모바일 환경에서의 폼 제출 경험 최적화',
          '오류 메시지 표시 방식과 타이밍',
        ],
      },
      {
        title: '📚 학습한 내용',
        content: '이 챌린지를 통해 다음과 같은 내용을 학습했습니다:',
        items: [
          'React의 useState를 활용한 폼 상태 관리',
          '사용자 입력에 따른 실시간 유효성 검사',
          'Tailwind의 form 요소 스타일링 기법',
          'HTML5 폼 속성을 활용한 기본 유효성 검사',
          '접근성을 고려한 라벨과 에러 메시지 연결',
        ],
      },
      {
        title: '🎨 UI/UX 디자인 결정',
        content: '사용자 경험을 향상시키기 위해 다음과 같은 디자인 결정을 내렸습니다:',
        items: [
          '명확한 레이블과 적절한 입력 필드 크기',
          '오류 상태에 대한 시각적 피드백',
          '제출 버튼의 상태 변화를 통한 인터랙션 피드백',
          '그룹화된 관련 입력 필드로 논리적 구조 제공',
          '일관된 색상과 타이포그래피로 신뢰감 형성',
        ],
      },
      {
        title: '💻 주요 코드',
        content: '주요 기능 구현을 위한 핵심 코드입니다:',
        items: [],
        codeBlocks: [
          {
            title: '폼 상태 관리',
            language: 'typescript',
            code: `const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
});

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};`,
            explanation: '폼 입력 데이터를 관리하기 위한 상태 관리 코드입니다.',
          },
          {
            title: '유효성 검사 구현',
            language: 'typescript',
            code: `const validateForm = () => {
  const errors: Record<string, string> = {};
  
  if (!formData.name.trim()) {
    errors.name = '이름을 입력해주세요';
  }
  
  if (!formData.email.trim()) {
    errors.email = '이메일을 입력해주세요';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = '유효한 이메일 주소를 입력해주세요';
  }
  
  if (!formData.message.trim()) {
    errors.message = '메시지를 입력해주세요';
  }
  
  return errors;
};`,
            explanation: '폼 제출 전 입력 데이터의 유효성을 검사하는 함수입니다.',
          },
          {
            title: '디바운스 처리로 입력 최적화',
            language: 'typescript',
            code: `const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

// 실시간 입력 검증에 적용
const debouncedEmail = useDebounce(formData.email, 500);

useEffect(() => {
  if (debouncedEmail) {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(debouncedEmail);
    setEmailError(!isValid ? '유효한 이메일 주소를 입력해주세요' : '');
  }
}, [debouncedEmail]);`,
            explanation: '사용자 경험 개선을 위해 입력 값의 디바운스 처리로 불필요한 유효성 검사 호출을 줄이고 성능을 최적화합니다. 특히 이메일 검증 같은 정규식 처리는 리소스를 많이 소모할 수 있어 타이핑 중에 지속적으로 검증하는 것을 방지합니다.',
          },
          {
            title: '접근성 고려한 폼 에러 처리',
            language: 'typescript',
            code: `<div className="mb-4">
  <label
    htmlFor="email"
    className="mb-2 block font-medium text-gray-700 dark:text-gray-300"
  >
    이메일 <span className="text-red-500">*</span>
  </label>
  <input
    type="email"
    id="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    onBlur={handleBlur}
    className={cn(
      "w-full rounded-md border p-2 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200",
      errors.email ? "border-red-500" : "border-gray-300"
    )}
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : undefined}
    required
  />
  {errors.email && (
    <p
      id="email-error"
      className="mt-1 text-sm text-red-500"
      role="alert"
    >
      {errors.email}
    </p>
  )}
</div>`,
            explanation: '웹 접근성(a11y)을 고려한 폼 필드 구현으로 스크린 리더 사용자가 오류를 인식할 수 있도록 aria-invalid, aria-describedby, role="alert" 속성을 활용합니다. 또한 시각적 오류 표시와 함께 스크린 리더가 오류 메시지를 정확히 전달할 수 있도록 id 연결을 구현했습니다.',
          },
          {
            title: '제출 상태 관리와 비동기 처리',
            language: 'typescript',
            code: `enum SubmitStatus {
  IDLE = 'idle',
  SUBMITTING = 'submitting',
  SUCCESS = 'success',
  ERROR = 'error'
}

const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(SubmitStatus.IDLE);
const [submitError, setSubmitError] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const validationErrors = validateForm();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    // 첫 번째 오류 필드로 포커스 이동
    const firstErrorField = Object.keys(validationErrors)[0];
    const element = document.getElementById(firstErrorField);
    element?.focus();
    return;
  }
  
  setSubmitStatus(SubmitStatus.SUBMITTING);
  
  try {
    // API 호출을 시뮬레이션
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // 성공 처리
    setSubmitStatus(SubmitStatus.SUCCESS);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    
    // 3초 후 상태 초기화
    setTimeout(() => {
      setSubmitStatus(SubmitStatus.IDLE);
    }, 3000);
  } catch (error) {
    setSubmitStatus(SubmitStatus.ERROR);
    setSubmitError('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    
    // 5초 후 오류 상태 초기화
    setTimeout(() => {
      setSubmitStatus(SubmitStatus.IDLE);
      setSubmitError(null);
    }, 5000);
  }
};`,
            explanation: '폼 제출의 다양한 상태(idle, submitting, success, error)를 열거형으로 정의하고 사용자에게 적절한 피드백을 제공합니다. 오류 발생 시 첫 번째 오류 필드로 자동 포커스하여 UX를 개선하고, 비동기 API 호출 시 적절한 로딩 및 결과 상태를 처리합니다. 이는 네트워크 지연이나 오류 상황에서도 사용자에게 명확한 피드백을 제공합니다.',
          },
          {
            title: '폼 이벤트 방어 코드',
            language: 'typescript',
            code: `// 연속 제출 방지
const [isSubmitting, setIsSubmitting] = useState(false);
const submitTimeoutRef = useRef<NodeJS.Timeout | null>(null);

useEffect(() => {
  // 컴포넌트 언마운트 시 타이머 정리
  return () => {
    if (submitTimeoutRef.current) {
      clearTimeout(submitTimeoutRef.current);
    }
  };
}, []);

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // 이미 제출 중이면 추가 제출 방지
  if (isSubmitting) return;
  
  setIsSubmitting(true);
  
  // 제출 로직...
  
  // 처리 완료 후 일정 시간 후에 제출 가능 상태로 변경
  submitTimeoutRef.current = setTimeout(() => {
    setIsSubmitting(false);
  }, 2000);
};

// 브라우저 이탈 방지 (폼 작성 중 실수로 페이지 이탈 방지)
useEffect(() => {
  const formHasValue = formData.name.trim() || formData.email.trim() || formData.message.trim();
  
  const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    if (formHasValue && submitStatus !== SubmitStatus.SUCCESS) {
      e.preventDefault();
      e.returnValue = '';
      return '';
    }
  };
  
  window.addEventListener('beforeunload', handleBeforeUnload);
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload);
  };
}, [formData, submitStatus]);`,
            explanation: '실제 프로덕션 환경에서 발생할 수 있는 다양한 엣지 케이스를 방어하는 코드입니다. 연속 클릭으로 인한 중복 제출을 방지하고, 사용자가 폼 작성 중 실수로 페이지를 이탈하는 것을 방지합니다. useRef와 useEffect를 활용한 메모리 누수 방지와 클린업 처리는 React 애플리케이션의 안정성을 높이는 중요한 패턴입니다.',
          }
        ],
      },
    ],
  };

  return (
    <main className="min-h-screen bg-gray-100 py-12 transition-colors dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            챌린지 목록으로 돌아가기
          </Link>
        </div>

        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">문의하기 UI</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            반응형 디자인과 접근성을 고려한 문의하기 폼 컴포넌트
          </p>
        </div>

        <div className="flex flex-col items-center justify-center p-4">
          <div className="w-full rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
            <ContactForm />
          </div>
        </div>

        <RevisionList revisions={revisions} componentId="contact-form" />

        <ChallengeContent {...challengeContent} />
      </div>
    </main>
  );
} 