//Get lists
export const getlistsStart = () => ({
    type: "GET_LISTS_Start"
})
export const getlistsSuccess = (lists) => ({
    type: "GET_LISTS_SUCCESS",
    payload: lists
})
export const getlistsFailure = () => ({
    type: "GET_LISTS_FAILURE"
})

// // create list
export const cretelistStart = () => ({
    type: "CREATE_LIST_Start"
})
export const cretelistSuccess = (list) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: list
})
export const cretelistFailure = () => ({
    type: "CREATE_LIST_FAILURE"
})

// //delete list
export const deletelistStart = () => ({
    type: "DELETE_LIST_Start"
})
export const deletelistSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id
})
export const deletelistFailure = () => ({
    type: "DELETE_LIST_FAILURE"
})

//edit list

export const editListStart = () => ({
    type: "EDIT_LIST_Start"
})
export const editListSuccess = (id, list) => ({
    type: "EDIT_LIST_SUCCESS",
    payload: list
})
export const editListFailure = () => ({
    type: "EDIT_LIST_FAILURE"
})