import { createContext, useContext } from "react"

const ColorContext = createContext("black")

const Page4Context = () => {

    const color = useContext(ColorContext)
    
    return <div style={{color}}>
        Hello {color}
    </div>
}

const Page4 = () => {
    

    return <div className='flex flex-1 flex-col'>
        <ColorContext.Provider value="red">
            <Page4Context/>
        </ColorContext.Provider>
        <ColorContext.Provider value="blue">
            <Page4Context/>
        </ColorContext.Provider>
        <ColorContext.Provider value="green">
            <Page4Context/>
        </ColorContext.Provider>
    </div>
}

export default Page4