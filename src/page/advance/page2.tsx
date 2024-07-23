import ReactNode, { useReducer, useState } from "react"

type useCountType = [
    number,
    ReactNode.Dispatch<ReactNode.SetStateAction<number>>
]

type Page2ReducerAction = {
    text: string,
    type: string
}

const Page2 = () => {
    const init = (count: any) => ({ count, text: 'hi' })

    const reducer = (state: any, action: Page2ReducerAction) => {
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

    const Component = () => {
        console.log("Component > Second")  

        const [state, dispatch] = useReducer(reducer, 0, init)

        return <div className="flex flex-col gap-4">
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
        </div>
    }

    console.log("Component > First")

    return <div>
        <Component />
    </div>
}

export default Page2