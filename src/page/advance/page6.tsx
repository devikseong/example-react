import { createContext, SetStateAction, useContext, useState, Dispatch, useRef, useEffect, memo } from "react"


const Page6ColorContext = createContext('black')

const Page6ColorComponent1 = () => {
    const color = useContext(Page6ColorContext)
    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current += 1;
    })
        
    return (
        <div style={{ color }}>            
            Hello {color} (renders: {renderCount.current})
        </div>
    )
}

const MemoedColorComponent = memo(Page6ColorComponent1)

const Page6DummyComponent = () => {
    const renderCount = useRef(1)

    useEffect( () => {
        renderCount.current += 1;
    })

    return <div>Dummy (renders: {renderCount.current})</div>
}

const MemoedDummyComponent = memo(Page6DummyComponent)

const Parent = () => {

    return <ul>
        <li><Page6DummyComponent/></li>
        <li><MemoedDummyComponent/></li>
        <li><Page6ColorComponent1 /></li>
        <li><MemoedColorComponent /></li>
    </ul>
}

const Page6 = () => {
    const [color, setColor] = useState('red')
    console.log("Page6")
    
    return <div className='flex flex-1 flex-col'>
        <Page6ColorContext.Provider value={color} >
            <input value={color} onChange={(e) => setColor(e.target.value)} />
            <Parent/>
        </Page6ColorContext.Provider> 
    </div>
}

export default Page6