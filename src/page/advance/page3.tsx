import ReactNode, { useReducer, useState } from "react"

type useCountType = [
    number,
    ReactNode.Dispatch<ReactNode.SetStateAction<number>>
]

type Page3ReducerAction = {
    text: string,
    type: string
}

type Page3Props = {
    initComponent: any,
    reducerComponent: (state: any, action: Page3ReducerAction) => any
}

const Page3 = () => {

    const Page3Hook = () => {
        console.log("Page3Hook")

        const init = (count: any) => ({ count, text: 'hi' })

        const reducer = (state: any, action: Page3ReducerAction) => {
            switch (action.type) {
                case "INCREMENT":
                    return { ...state, count: state.count + 1 }
                case "SET_TEXT":
                    return { ...state, text: action.text }
                case "VAIL":
                    return state
                default:
                    throw new Error("unknown action type")
            }
        }

        return { init, reducer }
    }

    const { init, reducer } = Page3Hook()


    const Component = ( props: Page3Props) => {
        console.log("Component > Second")
        
        const [state, dispatch] = useReducer(props.reducerComponent, 0, props.initComponent)

        const ComponentSub = () => {

            console.log("Component > Third")

            return <>
                <div>{state.count}</div>
                <button onClick={() => dispatch({
                    type: "INCREMENT",
                    text: ""
                })}>
                    Increment Count
                </button>
                <input className="border-green-700" value={state.text} onChange={(e) => dispatch({
                    type: "SET_TEXT",
                    text: e.target.value
                })}>
                </input>
                <button onClick={() => dispatch({ type: "VAIL", text: "" })}>
                    VAIL
                </button>
            </>
        }

        return <div className="flex flex-col gap-4">
            
            <ComponentSub />
        </div>
    }

    console.log("Component > First")

    return <div>
        <Component initComponent={init} reducerComponent={reducer}/>
    </div>
}

export default Page3