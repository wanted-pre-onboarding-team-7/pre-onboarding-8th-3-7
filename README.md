# Team :seven: | 국내 임상시험 검색기 구현하기 (Week 3)

이 레파지토리는 원티드 프리온보딩 프론트엔드 인턴십 3주차 과제를 위해 만들어졌습니다.

팀원들과 토론해 선발과제의 요구사항별로 Best Practice를 도출해 하나의 프로젝트로 만들었습니다.

## :heavy_check_mark: 팀원 소개

<table>
  <tbody >
    <tr >
      <td align="center"><a href="https://github.com/SeokyoungYou"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/79842380?v=4" width="100px; height="100px" alt=""/><br /><sub><b>유서경 (팀장)</b></a><ul><li>프로젝트 총괄</li><li>Github issue(기능 구현) 생성</li></sub><br /></td>
      <td align="center"><a href="https://github.com/JiyoonZ"><img style="margin-top: 20px;" src="https://avatars.githubusercontent.com/u/81758576?v=4" width="100px;" alt=""/><br /><sub><b>경지윤</b></sub></a><ul><li>회의록 작성</li><li>제출 전 최종 코드 확인</li><br /></td>
      <td align="center"><a href=""><img style="margin-top: 20px; border-radius: 50%;" src="https://avatars.githubusercontent.com/u/56298540?v=4" width="100px;" alt=""/><br /><sub><b>김수진</b></sub></a><ul><li>리드미 구조 작성 및 배분</li><li>과제 best practice 토론 총괄 및 과제 나누기</li><br /></td>
      <td align="center"><a href="https://github.com/khw970421"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/59253551?v=4" width="100px;" alt=""/><br /><sub><b>김형욱</b></sub></a><ul><li>과제/토론 일정 관리 및 과제 제출</li><li>Github issue(기능 구현) 생성</li><br /></td>
     <tr/>
      <td align="center"><a href="https://github.com/eternalclash"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/77526745?v=4" width="100px;" alt=""/><br /><sub><b>이수창</b></sub></a><ul><li>CSS theme, constants 파일 총괄</li><li>제출 전 최종 코드 확인</li><br /></td>
      <td align="center"><a href="https://github.com/etoile-j?tab=repositories"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/102905624?v=4" width="100px;" alt=""/><br /><sub><b>임수진</b></sub></a><ul><li>팀/코드 컨벤션 총괄</li><li>과제 best practice 토론 총괄 및 과제 나누기</li><br /></td>
      <td align="center"><a href="https://github.com/ckwlghks123"><img style="border-radius: 50%; margin-top: 20px;" src="https://avatars.githubusercontent.com/u/83552466?v=4" width="100px;" alt=""/><br /><sub><b>차지환</b></sub></a><ul><li>프로젝트 기초 세팅 및 폴더/파일 트리 총괄</li><li>배포 or 데모 영상 담당</li><br /></td>
    </tr>
  </tbody>
</table>

## :heavy_check_mark: 팀 컨벤션

[:raised_hands: 팀 컨벤션 페이지](https://github.com/wanted-pre-onboarding-team-7/team-7-Convention/wiki)

## :heavy_check_mark: 사용 라이브러리 및 툴

<div style="float: left;">
  <img src="https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
  <img src="https://img.shields.io/badge/Husky-808080?style=for-the-badge&logo=husky&logoColor=white">
</div>

<br/>

## :heavy_check_mark: 프로젝트 살펴 보기

### :one: 실행 방법

```
git clone
cd pre-onboarding-8th-3-7
npm install
npm start
```

### :two: 배포 링크

[Team 7 국내 임상시험 검색기 구현](https://wanted-pre-onboarding-team-7.github.io/pre-onboarding-8th-3-7/)

### :three: 프로젝트 구조

```
📦src
 ┣ 📂api
 ┃ ┣ 📜AxiosClient.ts
 ┃ ┗ 📜LocalCacheService.ts
 ┣ 📂components
 ┃ ┣ 📂loading
 ┃ ┃ ┣ 📜Loading.module.css
 ┃ ┃ ┗ 📜Loading.tsx
 ┃ ┣ 📂searchBar
 ┃ ┃ ┣ 📜SearchBar.module.css
 ┃ ┃ ┗ 📜SearchBar.tsx
 ┃ ┗ 📂searchResult
 ┃ ┃ ┣ 📜KeywordEmphasize.tsx
 ┃ ┃ ┣ 📜NoSearchKeyword.tsx
 ┃ ┃ ┣ 📜SearchKeyword.tsx
 ┃ ┃ ┣ 📜SearchResult.module.css
 ┃ ┃ ┗ 📜SearchResult.tsx
 ┣ 📂context
 ┃ ┗ 📜SearchApiService.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useDebounce.ts
 ┃ ┣ 📜useKeyboard.ts
 ┃ ┗ 📜useSearchKeyword.ts
 ┣ 📂pages
 ┃ ┣ 📜Home.module.css
 ┃ ┗ 📜Home.tsx
 ┣ 📂utils
 ┃ ┣ 📜DataCaching.ts
 ┃ ┗ 📜types.ts
 ┣ 📜App.module.css
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

## :heavy_check_mark: 과제 요구사항에 따른 Best Practice

꼭 Best Practice로 선정되지 않아도 스스로 공부해보고 싶은 부분을 담당해 코드를 구현했습니다.

### Assignment 1 | 검색기능 구현

🙋🏻‍♀️ 담당자: 김형욱, 김수진

💻 Best Practice: 차지환

[📝 UI 구현](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-3-7/wiki/Assignment-1-%7C-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84#-ui-%EA%B5%AC%ED%98%84)

[📝 볼드처리](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-3-7/wiki/Assignment-1-%7C-%EA%B2%80%EC%83%89-%EA%B8%B0%EB%8A%A5-%EA%B5%AC%ED%98%84#-%EB%B3%BC%EB%93%9C%EC%B2%98%EB%A6%AC)

### Assignment 2 | 키보드만으로 추천 검색어들로 이동 가능

🙋🏻‍♀️ 담당자: 이수창, 차지환

💻 Best Practice: 차지환

[📝 키보드만으로 추천 검색어들로 이동 가능](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-3-7/wiki/Assignment-2-%7C-%ED%82%A4%EB%B3%B4%EB%93%9C%EB%A7%8C%EC%9C%BC%EB%A1%9C-%EC%B6%94%EC%B2%9C-%EA%B2%80%EC%83%89%EC%96%B4%EB%93%A4%EB%A1%9C-%EC%9D%B4%EB%8F%99-%EA%B0%80%EB%8A%A5)

### Assignment 3-1 | API 로컬 캐싱 구현

🙋🏻‍♀️ 담당자: 유서경

💻 Best Practice: 차지환

[📝 SearchApiService 레이어 분리](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-3-7/wiki/Assignment-3-1-%7C-API-%EB%A1%9C%EC%BB%AC-%EC%BA%90%EC%8B%B1-%EA%B5%AC%ED%98%84#-searchapiservice-%EB%A0%88%EC%9D%B4%EC%96%B4-%EB%B6%84%EB%A6%AC)

[📝 LocalCacheService 클래스에서 API 로컬 캐싱 구현](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-3-7/wiki/Assignment-3-1-%7C-API-%EB%A1%9C%EC%BB%AC-%EC%BA%90%EC%8B%B1-%EA%B5%AC%ED%98%84#-localcacheservice-%ED%81%B4%EB%9E%98%EC%8A%A4%EC%97%90%EC%84%9C-api-%EB%A1%9C%EC%BB%AC-%EC%BA%90%EC%8B%B1-%EA%B5%AC%ED%98%84)

### Assignment 3 2 | Axios 인스턴스 생성 (api)

🙋🏻‍♀️ 담당자: 경지윤

💻 Best Practice: 이수창

[📝 Axios 인스턴스 생성](<https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-3-7/wiki/Assignment-3-2-%7C-Axios-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%83%9D%EC%84%B1-(api)#-axios-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%83%9D%EC%84%B1>)

[📝 API 코드 작성 및 타입 지정](<https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-3-7/wiki/Assignment-3-2-%7C-Axios-%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%83%9D%EC%84%B1-(api)#-api-%EC%BD%94%EB%93%9C-%EC%9E%91%EC%84%B1-%EB%B0%8F-%ED%83%80%EC%9E%85-%EC%A7%80%EC%A0%95>)

### Assignment 4 | API 호출 최적화 B: 불필요한 API 요청이 가는 것을 방지

🙋🏻‍♀️ 담당자 : 임수진

💻 Best Practice: 경지윤

[📝 debounce](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-3-7/wiki/Assignment-4-%7C-API-%ED%98%B8%EC%B6%9C-%EC%B5%9C%EC%A0%81%ED%99%94-B:-%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C-API-%EC%9A%94%EC%B2%AD%EC%9D%B4-%EA%B0%80%EB%8A%94-%EA%B2%83%EC%9D%84-%EB%B0%A9%EC%A7%80#-debounce)

[📝 loading UI](https://github.com/wanted-pre-onboarding-team-7/pre-onboarding-8th-3-7/wiki/Assignment-4-%7C-API-%ED%98%B8%EC%B6%9C-%EC%B5%9C%EC%A0%81%ED%99%94-B:-%EB%B6%88%ED%95%84%EC%9A%94%ED%95%9C-API-%EC%9A%94%EC%B2%AD%EC%9D%B4-%EA%B0%80%EB%8A%94-%EA%B2%83%EC%9D%84-%EB%B0%A9%EC%A7%80#-loading-ui)
