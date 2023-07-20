import AuthReducer from "./authReducer";
import { createContext, useEffect, useReducer } from "react"

const INISIAL_State = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false

}
export const AuthContext = createContext(INISIAL_State)
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INISIAL_State)
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    }, [state.user])
    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error, dispatch
            }}>{children}</AuthContext.Provider>
    )
}