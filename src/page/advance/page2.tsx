import ReactNode, { useState } from "react"

type useCountType = [
    number,
    ReactNode.Dispatch<ReactNode.SetStateAction<number>>
]

const Page1 = () => {
    const useCount = (): useCountType => {
        const [count, setCount] = useState<number>(0)
        return [count, setCount]
    }
    
    const [count, setCount] = useCount()
    
    return <div>
        {count}
        <button onClick={() => setCount((c) => c+1)} >
            +1
        </button>
    </div>
}

export default Page1