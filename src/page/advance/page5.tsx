import { createContext, SetStateAction, useContext, useState, Dispatch } from "react"

type TypeCountStateConatext = {
    count: number,
    setCount: Dispatch<SetStateAction<number>>
}

const CountStateContext = createContext({
    count: 0,
    setCount: () => {}
} as TypeCountStateConatext)

const Page5Component1 = () => {
    const { count, setCount } = useContext(CountStateContext)

    console.log("Page5Component1")
    return (
        <div>
            {count}
            <button onClick={() => setCount((c) => c + 1)}>
                +1
            </button>
        </div>
    )
}

const Page5Component2 = () => {
    const { count, setCount } = useContext(CountStateContext)

    console.log("Page5Component2")
    return (
        <div>
            {count}
            <button onClick={() => setCount((c) => c + 2)}>
                +2
            </button>
        </div>
    )
}

const Page5 = () => {
    const [count, setCount] = useState(0)
    console.log("Page5")
    
    return <div className='flex flex-1 flex-col'>
        <CountStateContext.Provider value={{count, setCount}} >
            <Page5Component1/>
            <Page5Component2/>
        </CountStateContext.Provider>
    </div>
}

export default Page5