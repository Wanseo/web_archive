export interface Project {
  id: string
  title: string
  category: string
  year: string
  theme: string
  description: string
  url?: string
  video?: string
  poster?: string
}

// public 파일 경로는 앞에 / 없이 입력하세요. 예: videos/project-01.mp4
export const profile = {
  name: 'WANSEO',
  email: '',
  instagram: 'https://www.instagram.com/wsjoy_/',
  introduction: 'I experiment with new experiences through websites.',
}

// 실제 프로젝트 자료가 준비되면 아래 샘플을 교체하세요.
export const projects: Project[] = [
  { id: 'guestbook', title: 'GUESTBOOK', category: 'INTERACTIVE GUESTBOOK', year: '2026', theme: 'form', description: '픽셀 그래픽과 움직이는 배경으로 만든 작은 방명록입니다. 이름과 메시지를 남기며 함께 채워가는 웹사이트입니다.', url: 'https://wanseo.github.io/myfirstweb/', video: 'videos/guestbook.mp4', poster: 'videos/guestbook.jpg' },
  { id: 'orbit', title: 'ORBIT', category: 'INTERACTIVE WEB', year: '2026', theme: 'orbit', description: '빛과 궤도의 움직임을 담은 인터랙티브 웹 샘플입니다. 반복되는 모션과 간결한 타이포그래피를 조합했습니다.' },
  { id: 'still', title: 'STILL LIFE', category: 'EDITORIAL / SHOP', year: '2026', theme: 'still', description: '일상의 사물을 담는 에디토리얼 쇼핑몰 샘플입니다. 차분한 색감과 큼직한 제품 표현으로 구성했습니다.' },
  { id: 'type', title: 'TYPE PLAY', category: 'WEB EXPERIMENT', year: '2026', theme: 'type', description: '타이포그래피를 움직임으로 확장한 웹 실험 샘플입니다. 글자가 하나의 그래픽이 되는 화면을 탐색합니다.' },
  { id: 'wave', title: 'AFTER HOURS', category: 'CULTURE WEBSITE', year: '2026', theme: 'wave', description: '음악과 밤의 분위기를 시각화한 문화 웹사이트 샘플입니다. 흐르는 빛과 선의 리듬을 사용했습니다.' },
  { id: 'amber', title: 'AMBER', category: 'PRODUCT EXPERIENCE', year: '2026', theme: 'amber', description: '빛이 반사되는 오브제를 중심으로 만든 제품 웹 샘플입니다. 따뜻한 색과 유기적인 모션이 특징입니다.' },
]
