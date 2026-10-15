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
  email: 'wanseo1206@gmail.com',
  instagram: 'https://www.instagram.com/wsjoy_/',
  introduction: 'I experiment with new experiences through interactive websites.',
}

// 새 작업은 배열 맨 앞에 추가하세요. 최신 작업이 왼쪽부터 표시됩니다.
export const projects: Project[] = [
  { id: 'moodroom', title: 'MOODROOM', category: 'INTERACTIVE MUSIC PLAYER', year: '2026', theme: 'wave', description: '음악의 분위기가 색으로 번지는 공간. 빈티지 MP3 플레이어로 Justin Bieber의 SWAG II를 미리 들어보는 인터랙티브 웹사이트입니다.', url: 'https://wanseo.github.io/swag2/', video: 'videos/moodroom.mp4', poster: 'videos/moodroom.jpg' },
  { id: 'guestbook', title: 'GUESTBOOK', category: 'INTERACTIVE GUESTBOOK', year: '2026', theme: 'form', description: '픽셀 그래픽과 움직이는 배경으로 만든 작은 방명록입니다.', url: 'https://wanseo.github.io/myfirstweb/', video: 'videos/guestbook.mp4', poster: 'videos/guestbook.jpg' },
]
