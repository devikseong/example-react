지연 초기화(lazy initialization)
베일 아웃 bailout 같은값이면 리렌더링 발생 안함
setCount(1) //데이터가 같아서 베일 아웃 발생

//객체가 달라져서 리렌더링 됨
setState({count: 0})
setState({count: 1})

//객체가 달라져서 리렌더링 됨
setCount((c) => c+1)

//조건이 맞으면 베일아웃 다르면 리렌더링됨
setCount((c) => c % 2 === 0 ? c : c + 1)

//지연초기화
//컴포넌트가 마운트 될때 한번만 호출된다.
//setCount 호출되지 전까지 평가되지 않는다.
const init = () => 0 //함수처리
const [count, setCount] = useState(init)
...
setCount((c) => c + 1)

//useReducer
//베일 아웃 발생시키기
//state를 그대로 전달하면 베일아웃으로 리렌더링 하지 않는다.
const reducer = (state, action) => {
  ...
  case "SET_TEXT":
    return state
}

상태 끌어올리기(lifting state up)
내용 끌어올리기(lifting content up)

P39 전역 상태 사용하기 

Props를 전달하는 것이 적절하지 않을 때
이미 리액트 외부에 상태가 있을 때

03. 리액트 컨텍스트를 이용한 컴포넌트 상태 공유
  useContext
    문제, 갱신될때 마다 모든 컨텍스트 소비자(consumer)가 리렌더링 되어 불필요한 렌더링이 발생
useState와 useContext 탐구하기
useContext 없이 useState 사용하기
정적 값을 이용해 useContext 사용하기
  Page4

P50. useContext와 함께 useState 사용하기
  Page5

P53. 컨텍스트 이해하기
  Page6
컨텍스트 전파의 작동 방식
  memo 리렌더링 발생하는것을 방지
  
P56.컨텍스트에 객체를 사용할 때의 한계점
  Page7
  useContext를 포함한 컴포넌트는 불필요한 렌더링을 발생 시킨다.

P59.전역 상태를 위한 컨텍스트 만들기
  Page8
    -작은 상태 조각 만들기
    -useReducer로 하나의 상태를 만들고 여러 컨테스트로 전파하기

P63.useReducer로 하나의 상태를 만들고 여러 개의 컨텍스트로 전파하기
  Page9
    Context와 useReducer 연결 처리

P67.사용자 정의 훅과 공급자 컴포넌트 만들기
  Page10
    사용자 정의훅으로 Context 처리

P71. 사용자 정의 훅이 있는 팩토리 패턴
  Page11
    사용자 정의 훅으로 Context를 하나의 훅으로 사용

P79. 구독을 이용한 모듈 상태 공유
  -모듈 상태 살펴보기
  -리액트에서 전역 상태를 다루기 위한 모듈 상태 사용법
  -기본적인 구독 추가하기
  -선택자(selector)와 useSubscription 사용하기

P80 모듈 상태 살펴보기
P82 리액트 전역 상태를 다루기 위한 모듈 상태 사용법
P86 기초적인 구독 추가하기
  -Page12
  
P90 선택자와 useSubscription 사용하기
  -Page13