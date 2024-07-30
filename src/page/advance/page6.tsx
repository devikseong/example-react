import { createContext, SetStateAction, useContext, useState, Dispatch, useRef, useEffect } from "react"


const Page6ColorContext = createContext('black')

const Page6Component1 = () => {
    const color = useContext(Page6ColorContext)
    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current += 1;
    })
    
    console.log("Page6Component1")
    return (
        <div style={{ color }}>            
            Hello {color} (renders: {renderCount.current})
        </div>
    )
}

const Page6 = () => {
    const [count, setCount] = useState(0)
    console.log("Page6")
    
    return <div className='flex flex-1 flex-col'>
        <Page6ColorContext.Provider value='green' >
            <Page6Component1/>
        </Page6ColorContext.Provider> 
    </div>
}

export default Page6