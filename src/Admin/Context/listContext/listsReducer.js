const ListsReducer = (state, action) => {
    switch (action.type) {
        case "GET_LISTS_Start":
            return { lists: [], isFetching: true, error: false }
        case "GET_LISTS_SUCCESS":
            return { lists: action.payload, isFetching: false, error: false }
        case "GET_LISTS_FAILURE":
            return { lists: [], isFetching: false, error: true }

        case "CREATE_LIST_Start":
            return { ...state, isFetching: true, error: false }
        case "CREATE_LIST_SUCCESS":
            return { lists: [...state.lists, action.payload], isFetching: false, error: false }
        case "CREATE_LIST_FAILURE":
            return { ...state, isFetching: false, error: true }

        case "UPDATE_LIST_Start":
            return { ...state, isFetching: true, error: false }
        case "UPDATE_LIST_SUCCESS":
            return { lists: state.lists.map((list) => list._id === action.payload && action.payload), isFetching: false, error: false }
        case "UPDATE_LIST_FAILURE":
            return { ...state, isFetching: false, error: true }


        case "DELETE_LIST_Start":
            return { ...state, isFetching: true, error: false }
        case "DELETE_LIST_SUCCESS":
            return { lists: state.lists.filter((list) => list !== action.payload), isFetching: false, error: false }
        case "DELETE_LIST_FAILURE":
            return { ...state, isFetching: false, error: true }

        case "EDIT_LIST_Start":
            return { ...state, isFetching: true, error: false }
        case "EDIT_LIST_SUCCESS":
            return { ...state, isFetching: false, edit: action.payload }
        case "EDIT_LIST_FAILURE":
            return { ...state, isFetching: false, error: true }
        default:
            return { ...state }
    }

}

export default ListsReducer