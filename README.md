# ReactJS로 영화 웹 서비스 만들기



## Introduction

### Vanilla JS

HTML 생성 후 Javascript로 가져와 수정 및 업데이트

- `handleClick` 실행시 `span` 태그 찾아 counter 갱신
- `button` 태그 찾아 `handleClick` 함수 설정

```javascript
<!DOCTYPE html>
<html>
  <body>
    <span>Total clicks: 0</span>
    <button id="btn">Click me</button>
  </body>
  <script>
    let counter = 0;
    const button = document.getElementById("btn");
    const span = document.querySelector("span");
    function handleClick() {
      counter = counter + 1
      span.innerText = `Total clicks: ${counter}`;
    }
    button.addEventListener("click", handleClick);
  </script>
</html>
```



## Our First React Element

### React.js 설치

브라우저에서 바로 실행시 다음 코드 실행해 설치

```javascript
<script src="https://unpkg.com/react@17/umd/react.development.js"></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
```



## Events in React

Javascript 생성 후 HTML 번역 및 렌더 (유저에게 보여질 내용 컨트롤 가능).

단, 아래와 같은 형식은 일반적으로 사용하는 방식이 아님.

-  `btn` element 생성
- `button`  태그 선택
- event 등록
- (style 지정)

```javascript
const btn = React.createElement(
  "button",
  {
    onClick: () => console.log('im clicked'),
    style: {
      backgroundColor: "tomato",
    }
  },
  "Click me"
);
```



## JSX

- JavaScript 확장 문법

- JSX로 작성한 코드 Babel 거쳐 React 코드로 변환 후 렌더
- JSX 인식 위해서는 Babel 필요

### Babel 설치

```javascript
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

### 코드

위 코드를 JSX로 작성하면 아래와 같아짐

```javascript
const Button = () => (
  <button
    style={{
      backgroundColor: "tomato",
    }}
    onClick={() => console.log("im clicked")}
  >
    Click me
  </button>
);
```

### 전체 코드

```javascript
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    const root = document.getElementById("root");
    const Title = () => (
      <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
        Hello, I'm a title
      </h3>
    );
    const Button = () => (
      <button
        style={{
          backgroundColor: "tomato",
        }}
        onClick={() => console.log("im clicked")}
      >
        Click me
      </button>
    );
    const Container = () => (
      <div>
        <Title/>
        <Button/>
      </div>
    );
    ReactDOM.render(<Container/>, root);
  </script>
</html>
```

### 주의사항

- 컴퍼넌트 첫글자는 대문자
  - 소문자면 html 컴퍼넌트로 간주






## State

데이터가 저장되는 곳

- modifier 함수로 컴퍼넌트의 state 변경시, 컴퍼넌트는 새로운 값 가지고 리렌더링됨

```javascript
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function MinutesToHours() {
      const [amount, setAmount] = React.useState(0);
      const [inverted, setInverted] = React.useState(false);
      const onChange = (event) => {
        setAmount(event.target.value);
      };
      const reset = () => setAmount(0); 
      const onInvert = () => {
        reset();
        setInverted((current) => !current);
      }
      return (
        <div>
          <div>
            <label htmlFor="minutes">Minutes</label>
            <input
              value={inverted ? amount * 60 : amount}
              id="minutes"
              placeholder="Minutes"
              type="number"
              onChange={onChange}
              disabled={inverted}
            />
          </div>
          <div>
            <label htmlFor="hours">Hours</label>
            <input
              value={inverted ? amount : Math.round(amount / 60)}
              id="hours"
              placeholder="Hours"
              type="number"
              onChange={onChange}
              disabled={!inverted}
            />
          </div>
          <button onClick={reset}>Reset</button>
          <button onClick={onInvert}>{inverted ? "Turn back" : "Invert"}</button>
        </div>
        );
      };
    function KmToMiles () {
      return <h3>KM 2 M</h3>
    }
    function App() {
      const [index, setIndex] = React.useState("0")
      const onSelect = (event) => {
        setIndex(event.target.value);
      };
      return (
        <div>
          <h1>Super Converter</h1>
          <select value={index} onChange={onSelect}>
            <option value="0">Minutes & Hours</option>
            <option value="1">Km & Miles</option>
          </select>
          <hr/>
          {index === "0" ? <MinutesToHours/> : null}
          {index === "1" ? <KmToMiles/> : null}
        </div>
      );
    };
    const root = document.getElementById("root");
    ReactDOM.render(<App/>, root);
  </script> 
</html>
```



## Props

### PropTypes

어떤 타입의 prop 받고 있는지 체크

#### 설치

````bash
$ npm i prop-types
````

```bash
$ npm i react-router-dom@5.3.0
```

### 코드

```javas
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
  <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/prop-types@15.7.2/prop-types.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script type="text/babel">
    function Btn({text, fontSize = 16}) {
      return (
        <button
          style={{
            backgroundColor: "tomato",
            color: "white",
            padding: "10px 20px",
            border: 0,
            borderRadius: 10,
            fontSize: fontSize,
          }}
        >
          {text}
        </button>)
    }
    Btn.propTypes = {
      text: PropTypes.string.isRequired,
      fontSize: PropTypes.number,
    }
    function App() {
      return (
        <div>
          <Btn text="Save Changes" fontSize={18}/>
          <Btn text={14} fontSize={"Continue"}/>
        </div>
      );
    };
    const root = document.getElementById("root");
    ReactDOM.render(<App/>, root);
  </script> 
</html>
```