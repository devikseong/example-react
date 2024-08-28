import { useEffect, useRef, useState } from "react";

type Store<T> = {
    getState: () => T
    setState: (action: T | ((prev: T) => T)) => void;
    subscribe: (callback: () => void) => () => void;
}

const createStore = <T extends unknown>(
    initialState: T
): Store<T> => {
    let state = initialState;

    const callbacks = new Set<() => void>();
    const getState = () => state;
    const setState = (nextState: T | ((prev: T) => T)) => {
        state = typeof nextState === "function"
            ? (nextState as (prev: T) => T)(state)
            : nextState
        callbacks.forEach((callback) => callback())
    }

    const subscribe = (callback: () => void) => {
        callbacks.add(callback)
        return () => {
            callbacks.delete(callback)
        }
    }

    return { getState, setState, subscribe }
}

const store = createStore({ count: 0 })
console.log(store.getState())
store.setState({ count: 1 })


const useStore = (store: Store<any>) => {
    const [state, setState] = useState(store.getState())

    useEffect(() => {
        const unsubscribe = store.subscribe(() => {
            setState(store.getState())
        })

        //setState(store.getState()) //지워도 별 차이 없는데 ㅋ        
        return unsubscribe
    }, [store])

    return [state, store.setState]
}

const Component1 = () => {
    const [state, setState] = useStore(store)
    const inc1 = () => {
        setState((prev: { count: number; }) => ({
            ...prev,
            count: prev.count + 1
        }))
    }

    const ref = useRef(0)

    useEffect(() => {
        ref.current += 1
    }, [])

    return (<div>{state.count} {ref.current} <button onClick={inc1}> +1 </button></div>)
}

const Component2 = () => {
    const [state, setState] = useStore(store)
    const inc2 = () => {
        setState((prev: { count: number; }) => ({
            ...prev,
            count: prev.count + 2
        }))
    }

    const ref = useRef(0)

    useEffect(() => {
        ref.current += 1
    }, [])

    return (<div>{state.count} {ref.current} <button onClick={inc2}> +2 </button></div>)
}

const Page12 = () => {
    return <>
        <Component1 />
        <Component2 />
    </>
}

export default Page12