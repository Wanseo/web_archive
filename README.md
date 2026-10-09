# webservice_site

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

배포 주소: https://wanseo.github.io/webservice_site/

이후 `main`에 push할 때마다 자동 배포됩니다. Actions 탭의 Run workflow로 수동 실행할 수도 있습니다. 별도 배포 토큰이나 Secrets는 필요하지 않습니다.

`vite.config.ts`의 `base`는 `/webservice_site/`입니다. 저장소 이름을 변경하면 이 값도 변경하세요. 사용자 사이트(`wanseo.github.io` 저장소)나 커스텀 도메인을 사용하면 `/`로 변경하세요.

`src`의 이미지는 import로 불러오고, TypeScript에서 `public` 파일을 참조할 때는 `${import.meta.env.BASE_URL}파일명`을 사용하세요. HTML에서는 `%BASE_URL%파일명`을 사용할 수 있습니다. `/파일명` 형태의 경로를 동적으로 작성하면 저장소 하위 경로를 벗어납니다.

공식 문서: [Vite 배포 가이드](https://vite.dev/guide/static-deploy.html), [GitHub Pages 배포 소스 설정](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
