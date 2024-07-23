import { useNavigate } from "react-router-dom"

const Index = () => {
    const navigate = useNavigate()

    return <div className="w-full flex flex-col gap-4 overflow-y-auto">
        <button onClick={() => navigate("/page1")}>page1 useState</button>
        <button onClick={() => navigate("/page2")}>page2 useReducer</button>
    </div>
}

export default Index