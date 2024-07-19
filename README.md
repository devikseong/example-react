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


