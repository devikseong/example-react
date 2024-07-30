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
  