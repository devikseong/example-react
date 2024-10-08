import { useNavigate } from "react-router-dom"

const Index = () => {
    const navigate = useNavigate()

    return <div className="w-full flex flex-col gap-4 overflow-y-auto">
        <button onClick={() => navigate("/page1")}>page1 useState</button>
        <button onClick={() => navigate("/page2")}>page2 useReducer</button>
        <button onClick={() => navigate("/page3")}>page3 useReducer custom</button>
        <button onClick={() => navigate("/page4")}>page4 useContext</button>
        <button onClick={() => navigate("/page5")}>page5 useContext and state</button>
        <button onClick={() => navigate("/page6")}>page6 memo</button>
        <button onClick={() => navigate("/page7")}>page7 useContext issue</button>
        <button onClick={() => navigate("/page8")}>page8 maske small particle</button>
        <button onClick={() => navigate("/page9")}>useReducer and context</button>
        <button onClick={() => navigate("/page10")}>User Custom Hook</button>
        <button onClick={() => navigate("/page11")}>User Custom Hook Custom Context</button>
        <button onClick={() => navigate("/page12")}>Subscriber</button>
        <button onClick={() => navigate("/page13")}>선택자와 useSubscription 사용하기</button>
        <button onClick={() => navigate("/page14")}>컨텍스트와 구독 패턴 사용하기</button>
        
    </div>
}

export default Index