import { createContext, useReducer } from 'react'

export const TitleColorContext = createContext();

export const titleColorReducer = (state, action) => {
    switch(action.type) {
        case "RED":
            return { ...state, color: "#9E0031" }
        case "YELLOW":
            return { ...state, color: "#EFCA08" }
        default:
            return state
    }

}

export const TitleColorContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(titleColorReducer, { color: "purple" })

    return <TitleColorContext.Provider value={{ ...state, dispatch }}>
        {children} 
    </TitleColorContext.Provider>
}