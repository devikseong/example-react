import { useNavigate } from "react-router-dom"

const Index = () => {
    const navigate = useNavigate()

    return <div>
        <button onClick={() => navigate("/page1")}>page1</button>        
    </div>
}

export default Index