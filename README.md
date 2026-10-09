# web_archive

Vite vanilla-ts 기반 웹 프로젝트입니다.

## 실행 및 빌드

```sh
npm ci
npm run dev
npm run build
```

빌드 결과는 `dist/`에 생성됩니다.

## GitHub Pages 배포

1. GitHub 저장소의 Settings → Pages → Build and deployment에서 Source를 **GitHub Actions**로 선택합니다.
2. 이 프로젝트의 변경 사항을 `main` 브랜치에 commit하고 push합니다.
3. Actions 탭에서 **Deploy to GitHub Pages**의 성공 여부를 확인합니다.

배포 주소: https://wanseo.github.io/web_archive/

이후 `main`에 push할 때마다 자동 배포됩니다. Actions 탭의 Run workflow로 수동 실행할 수도 있습니다. 별도 배포 토큰이나 Secrets는 필요하지 않습니다.

`vite.config.ts`의 `base`는 `/web_archive/`입니다. 저장소 이름을 변경하면 이 값도 변경하세요. 사용자 사이트(`wanseo.github.io` 저장소)나 커스텀 도메인을 사용하면 `/`로 변경하세요.

`src`의 이미지는 import로 불러오고, TypeScript에서 `public` 파일을 참조할 때는 `${import.meta.env.BASE_URL}파일명`을 사용하세요. HTML에서는 `%BASE_URL%파일명`을 사용할 수 있습니다. `/파일명` 형태의 경로를 동적으로 작성하면 저장소 하위 경로를 벗어납니다.

공식 문서: [Vite 배포 가이드](https://vite.dev/guide/static-deploy.html), [GitHub Pages 배포 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 포트폴리오 콘텐츠 변경

`src/projects.ts`에서 이름, 소개, 연락처와 프로젝트 목록을 수정합니다. 현재 작업물은 Guestbook 하나입니다. 새 작업은 `src/projects.ts`의 `projects` 배열 맨 앞에 추가하면 기존 작업의 왼쪽부터 표시됩니다. Guestbook 카드에는 실제 사이트를 캡처한 6초 MP4 미리보기를 사용합니다.

- `profile.name`: 표시 이름
- `profile.email`: 연락 이메일 (비워두면 준비 중 안내)
- `profile.instagram`: 전체 인스타그램 URL
- 프로젝트 `title`, `category`, `description`, `year`: 작품 정보
- `url`: 실제 사이트의 https URL (설정하면 상세 화면에 방문 링크 표시)
- `video`: `public` 기준 영상 경로, 예: `videos/my-site.mp4`
- `poster`: 자동 재생 전 표시할 이미지 경로, 예: `videos/my-site.jpg`

영상을 `public/videos/`에 넣고 해당 프로젝트의 `video`에 경로를 지정하면 샘플 모션 대신 영상이 표시됩니다. 모바일용으로 짧고 압축된 H.264 MP4와 포스터 이미지를 권장합니다. 영상은 무음·반복·인라인 재생하며 화면 밖에서는 정지합니다. 브라우저가 자동 재생을 제한해도 카드 터치로 상세 화면을 열 수 있습니다. 움직임 줄이기 설정에서는 카드 애니메이션과 자동 재생을 중지합니다.
