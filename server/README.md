# Server README.md

* 최초 구성시 @ash님의 velog를 참조했습니다.
- https://velog.io/@ash/TypeScript%EB%A1%9C-express-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0

### 타입스크립트 설치가 처음인 경우
* yarn global add typescript

### 프로젝트를 처음 클론받은 경우
* 최상위 .env.sample을 복사한 후 이름을 .env로 변경, 내용 입력
* https://cloud.mongodb.com 가입 및 db 접근권한, IP 추가 요청
* yarn(또는 npm i) 이용 node modules 추가
* 서버 구동
### 서버 구동
* yarn start
* http://localhost:7300/api/users/test
* 구동 확인

### Server API
* 구현되는 API 는 Swagger를 통해 확인할 수 있음
* 서버 구동 상태에서
* http://localhost:7300/api-docs


### 개발을 위한 파일 구조 
* 모든 서버 개발은 src 안에서 이루어짐 (.env, config 파일 제외)
* .env 항목 추가/변경 시, .env.sample 도 같이 업데이트 해 줄것

* src/api
- index.ts 에서 src/api/routes 폴더에 있는 라우터 사용 관리
- src/api/routes 폴더에 각 router api만 위치, 실제 구현은 src/service 폴더에서 할것
- src/api/routes 폴더에 있는 파일을 수정 하는 경우 swagger 주석을 달것

* src/config
- .env 에 정의된 상수를 이용하기 위한 폴더

* src/loaders
- 서버 시작될 때 loading 되는 모듈

* src/service 
- api 의 내용이 실질적으로 동작되는 부분

### ToDo 
* file 구조 생성 (진행중-dy)