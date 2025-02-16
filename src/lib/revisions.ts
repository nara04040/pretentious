import { Revision } from '@/types/revision';

export const revisions: Revision[] = [
  // profile-card UI
  {
    id: 'wave-bg',
    title: '웨이브 애니메이션 배경 추가',
    description: '상단 이미지의 배경(purple, blue 그라데이션)에 웨이브 애니메이션 효과를 추가해주세요.',
    requestDate: '2024-02-15',
    status: 'completed',
    componentId: 'profile-card',
    path: '/challenges/profile-card/revisions/wave-bg',
  },
  {
    id: 'hover-effect',
    title: '소셜 링크 호버 효과 개선',
    description: '소셜 미디어 아이콘에 호버 시 팝업 효과와 툴팁을 추가해주세요.',
    requestDate: '2024-02-15',
    status: 'completed',
    componentId: 'profile-card',
    path: '/challenges/profile-card/revisions/hover-effect',
  },
  {
    id: 'dark-theme',
    title: '다크 테마 색상 개선',
    description: '다크 모드에서 프로필 카드의 배경과 텍스트 색상 대비를 더 개선해주세요.',
    requestDate: '2024-02-15',
    status: 'pending',
    componentId: 'profile-card',
    path: '/challenges/profile-card/revisions/dark-theme',
  },
  // product-detail UI
  {
    id: 'image-zoom',
    title: '제품 이미지 줌 기능 추가',
    description: '제품 이미지에 마우스 오버 시 확대 기능을 추가하고, 클릭 시 전체화면 모달로 볼 수 있게 해주세요.',
    requestDate: '2024-02-16',
    status: 'completed',
    componentId: 'product-detail',
    path: '/challenges/product-detail/revisions/image-zoom',
  },
  {
    id: 'size-guide',
    title: '사이즈 가이드 기능 추가',
    description: '사이즈 선택 영역 상단에 사이즈 가이드 버튼을 추가하고, 클릭 시 상세 치수 정보를 보여주는 모달을 표시해주세요.',
    requestDate: '2024-02-16',
    status: 'pending',
    componentId: 'product-detail',
    path: '/challenges/product-detail/revisions/size-guide',
  },
  {
    id: 'stock-indicator',
    title: '재고 상태 표시 개선',
    description: '각 사이즈별 재고 상태를 시각적으로 표시하고, 품절된 사이즈는 선택할 수 없도록 비활성화해주세요.',
    requestDate: '2024-02-16',
    status: 'pending',
    componentId: 'product-detail',
    path: '/challenges/product-detail/revisions/stock-indicator',
  },
]; 