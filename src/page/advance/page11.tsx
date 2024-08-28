import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

type CountContextType = [
    number,
    Dispatch<SetStateAction<number>>
];


const createStateContext = (
    useValue: (init: any) => any
) => {
    const StateContext = createContext<CountContextType | null>(null)

    const StateProvider = ({
        initialValue,
        children
    }: {initialValue: number, children: ReactNode}) => (
        <StateContext.Provider value={useValue(initialValue)} >
            {children}
        </StateContext.Provider>
    )

    const useContextState = () => {
        const value = useContext(StateContext)
        if( value === null) throw new Error("Provider missing")
        return value
    }

    return [StateProvider, useContextState] as const
}

const useNumberState = (init: number) => useState(init || 0)

const [Count1Provider, useCount1] = createStateContext(useNumberState)
const [Count2Provider, useCount2] = createStateContext(useNumberState)


const Counter1 = () => {
    const [count1, setCount1] = useCount1()

    return (
        <div>
            Count1: {count1}
            <button onClick={() => setCount1((c) => c + 1)}>
                +1
            </button>
        </div>
    )
}

const Counter2 = () => {
    const [count2, setCount2] = useCount2()

    return (
        <div>
            Count1: {count2}
            <button onClick={() => setCount2((c) => c + 1)}>
                +1
            </button>
        </div>
    )
}

const Parent = () => (
    <div>
        <Counter1/>
        <Counter1/>
        <Counter2/>
        <Counter2/>
    </div>
)

const Page11 = () => {
    return <>
        <Count1Provider initialValue={0} >
            <Count2Provider initialValue={0}>
                <Parent/>
            </Count2Provider>
        </Count1Provider>
    </>
}

export default Page11
