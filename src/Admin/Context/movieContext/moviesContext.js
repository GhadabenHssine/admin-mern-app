
import { createContext, useReducer } from "react"
import MoviesReducer from "./moviesReducer";

const INISIAL_State = {
    movies: [],
    isFetching: false,
    error: false

}
export const MoviesContext = createContext(INISIAL_State)
export const MoviesContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(MoviesReducer, INISIAL_State)

    return (
        <MoviesContext.Provider
            value={{
                movies: state.movies,
                isFetching: state.isFetching,
                error: state.error, dispatch
            }}>{children}</MoviesContext.Provider>
    )
}