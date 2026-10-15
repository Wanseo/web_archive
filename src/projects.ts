export interface Project {
  id: string
  title: string
  category: string
  year: string
  theme: string
  description: string
  disclaimer?: { ko: string; en: string }
  url?: string
  video?: string
  detailVideo?: string
  detailPoster?: string
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
  { id: 'moodroom', title: 'MOODROOM', category: 'INTERACTIVE MUSIC PLAYER', year: '2026', theme: 'wave', description: '음악의 무드에 따라 색상이 변경되고, 비트가 파장으로 퍼지는 인터랙티브 웹사이트입니다. Justin Bieber의 인스타그램에서 공개된 샘플 SKYLRK 뮤직 플레이어의 외형을 사용하였습니다. 플레이어 안에서 Justin Bieber의 SWAG II를 미리듣기로 들어볼 수 있습니다.', disclaimer: { ko: '팬으로서 만든 비상업적 개인 프로젝트이며, 공식 아티스트 및 관계자와 무관합니다.', en: 'This is a non-commercial personal fan project and is not affiliated with the artist or their representatives.' }, url: 'https://wanseo.github.io/swag2/', video: 'videos/moodroom.mp4', poster: 'videos/moodroom.jpg', detailVideo: 'videos/moodroom-hd.mp4', detailPoster: 'videos/moodroom-hd.jpg' },
  { id: 'guestbook', title: 'GUESTBOOK', category: 'INTERACTIVE GUESTBOOK', year: '2026', theme: 'form', description: '픽셀 그래픽과 움직이는 배경으로 만든 작은 방명록입니다.', url: 'https://wanseo.github.io/myfirstweb/', video: 'videos/guestbook.mp4', poster: 'videos/guestbook.jpg' },
]
