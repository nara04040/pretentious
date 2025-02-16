export interface Revision {
  id: string;
  title: string;
  description: string;
  requestDate: string;
  status: 'pending' | 'completed';
  componentId: string; // 어떤 UI 컴포넌트에 대한 요청인지
  path: string; // 수정된 UI를 보여줄 페이지 경로
} 