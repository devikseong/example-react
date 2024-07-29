import { createContext, SetStateAction, useContext, useState, Dispatch } from "react"

type TypeCountStateConatext = {
    count: number,
    setCount: Dispatch<SetStateAction<number>>
}

const CountStateContext = createContext({
    count: 0,
    setCount: () => {}
} as TypeCountStateConatext)

const Page5 = () => {
    const [count, setCount] = useState(0)
    
    return <div className='flex flex-1 flex-col'>
        <CountStateContext.Provider value={{count, setCount}} >

        </CountStateContext.Provider>
    </div>
}

export default Page5