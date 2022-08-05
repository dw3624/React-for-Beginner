바닐라 JS : HTML 생성 후 Javascript로 가져와 수정 및 업데이트
React JS : Javascript 생성 후 HTML 번역 및 렌더 (유저에게 보여질 내용 컨트롤 가능)

JSX
JavaScript 확장 문법

JSX로 작성한 코드 Babel 거쳐 React 코드로 변환 후 렌더

컴퍼넌트 첫글자는 대문자
- 소문자면 html 컴퍼넌트로 간주

state
데이터가 저장되는 곳
modifier 함수로 컴퍼넌트의 state 변경시, 컴퍼넌트는 새로운 값 가지고 리렌더링됨



# 5.0 Introduction
```bash
# node.js 설치 후
node -v
# npx 설치 후
npx

npx create-react-app my-app
cd my-app
npm start
```

package.json에 실행 가능한 script 정보 있음
`npm start` or `npm run start`

- src : 모든 파일 넣을 곳

### prop-types
```bash
$ npm i prop-types
```
