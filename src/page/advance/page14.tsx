
import { createContext, ReactNode, useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";

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

type State = { count: number, text?: string }

const StoreContext = createContext<Store<State>> (
    createStore<State>( {count: 0, text: "heelo"})
)

const StoreProvier = ({
    initialState,
    children
}: {
    initialState: State
    children: ReactNode
}) => {
    const storeRef = useRef<Store<State>>()
    if(!storeRef.current) {
        storeRef.current = createStore(initialState)
    }

    return (
        <StoreContext.Provider value={storeRef.current}>
            {children}
        </StoreContext.Provider>
    )
}

const useStoreSelector = <T, S>(
    
    selector: (state: T) => S
) => {
    const store = useContext(StoreContext)

    // return useSubscription(
    //     useMemo( () => ({
    //         getCurrentValue: () => selector(store.getState())
    //         subscribe: store.subscribe
    //     }), 
    //     [store, selector]
    //     )
    // )
}

const Page14 = () => {

    return <div></div>
}

export default Page14