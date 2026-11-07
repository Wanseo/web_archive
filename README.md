# web_archive

Vite vanilla-ts 기반 웹 프로젝트입니다.

## 실행 및 빌드

```sh
npm ci
npm run dev
npm run build:site
```

빌드 결과는 `dist/`에 생성됩니다.

## GitHub Pages 배포

1. GitHub 저장소의 Settings → Pages → Build and deployment에서 Source를 **GitHub Actions**로 선택합니다.
2. 이 프로젝트의 변경 사항을 `main` 브랜치에 commit하고 push합니다.
3. Actions 탭에서 **Deploy to GitHub Pages**의 성공 여부를 확인합니다.

배포 주소: https://wanseojo.com/

이후 `main`에 push할 때마다 자동 배포됩니다. Actions 탭의 Run workflow로 수동 실행할 수도 있습니다. 별도 배포 토큰이나 Secrets는 필요하지 않습니다.

현재 GitHub Pages의 커스텀 도메인 `wanseojo.com`을 사용하므로 `vite.config.ts`의 `base`는 `/`입니다. GitHub 저장소 Settings → Pages의 Custom domain도 `wanseojo.com`으로 유지하세요. 추후 저장소 하위 주소(`wanseo.github.io/web_archive/`)로 되돌리면 `base`도 `/web_archive/`로 변경해야 합니다.

`src`의 이미지는 import로 불러오고, TypeScript에서 `public` 파일을 참조할 때는 `${import.meta.env.BASE_URL}파일명`을 사용하세요. HTML에서는 `%BASE_URL%파일명`을 사용할 수 있습니다. `/파일명` 형태의 경로를 동적으로 작성하면 저장소 하위 경로를 벗어납니다.

공식 문서: [Vite 배포 가이드](https://vite.dev/guide/static-deploy.html), [GitHub Pages 배포 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 포트폴리오 콘텐츠 변경

`src/projects.ts`에서 이름, 소개, 연락처와 프로젝트 목록을 수정합니다. 현재 작업물은 MOODROOM과 GUESTBOOK입니다. 새 작업은 `src/projects.ts`의 `projects` 배열 맨 앞에 추가하면 기존 작업의 왼쪽부터 표시됩니다. 두 프로젝트 카드에는 실제 사이트를 캡처한 6초 MP4 미리보기를 사용합니다. 현재 그리드는 MOODROOM, GUESTBOOK 순서로 표시됩니다.

- `profile.name`: 표시 이름
- `profile.email`: 연락 이메일 (비워두면 준비 중 안내)
- `profile.instagram`: 전체 인스타그램 URL
- 프로젝트 `title`, `category`, `description`, `year`: 작품 정보
- `url`: 실제 사이트의 https URL (설정하면 상세 화면에 방문 링크 표시)
- `video`: `public` 기준 영상 경로, 예: `videos/my-site.mp4`
- `poster`: 자동 재생 전 표시할 이미지 경로, 예: `videos/my-site.jpg`
- `detailVideo`, `detailPoster`: 상세창용 고화질 영상·포스터 (생략하면 카드용 파일 사용). MOODROOM 상세 영상은 1800×1800 해상도입니다.

영상을 `public/videos/`에 넣고 해당 프로젝트의 `video`에 경로를 지정하면 샘플 모션 대신 영상이 표시됩니다. 모바일용으로 짧고 압축된 H.264 MP4와 포스터 이미지를 권장합니다. 영상은 무음·반복·인라인 재생하며 화면 밖에서는 정지합니다. 브라우저가 자동 재생을 제한해도 카드 터치로 상세 화면을 열 수 있습니다. 움직임 줄이기 설정에서는 카드 애니메이션과 자동 재생을 중지합니다.

## 같은 도메인의 프로젝트 사이트

프로젝트 방문 링크는 `https://wanseojo.com/moodroom/`, `https://wanseojo.com/guestbook/`입니다. GitHub Actions에서 `npm run build:site`를 실행하여 포트폴리오와 두 프로젝트를 함께 배포합니다. 포트폴리오만 확인할 때는 기존 `npm run build`를 사용할 수 있습니다.

`scripts/project-sites.json`은 각 원본 저장소와 배포할 커밋을 고정합니다. 원본 프로젝트를 업데이트한 뒤 이 파일의 `revision`을 새 커밋으로 변경하고 다시 배포하세요. 빌드 스크립트는 임시 디렉터리에서 원본을 설치·빌드하고 각 하위 경로에 맞는 파일을 `dist/`에 합칩니다. canonical, Open Graph URL, sitemap도 새 주소로 변환합니다.

방명록의 `publicEnv`는 기존 공개 사이트가 브라우저에 제공하던 Supabase URL과 **공개용 publishable key**입니다. 기존 데이터베이스를 그대로 사용합니다. 서버용 secret/service-role key는 여기에 넣으면 안 됩니다. 도메인이 바뀌므로 기존 도메인의 로컬 저장소에 있던 글 수정 권한은 자동으로 이전되지 않습니다.

## 글꼴 로딩

메인 포트폴리오의 DM Sans와 Space Grotesk는 `public/fonts/`의 WOFF2 파일을 사용하며 HTML에서 미리 로드합니다. `font-display: optional`로 느린 연결에서 표시 도중 글꼴이 교체되며 레이아웃이 움직이는 현상을 방지합니다. 각 글꼴의 SIL Open Font License도 같은 폴더에 포함되어 있습니다.
