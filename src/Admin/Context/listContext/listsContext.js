
import { createContext, useReducer } from "react"
import ListsReducer from "./listsReducer";

const INISIAL_State = {
    lists: [],
    isFetching: false,
    error: false,
    edit: ""

}
export const ListsContext = createContext(INISIAL_State)
export const ListsContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ListsReducer, INISIAL_State)

    return (
        <ListsContext.Provider
            value={{
                lists: state.lists,
                isFetching: state.isFetching,
                error: state.error, dispatch
            }}>{children}</ListsContext.Provider>
    )
}