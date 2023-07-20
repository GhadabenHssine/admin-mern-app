import {
    cretelistFailure, cretelistStart, cretelistSuccess, deletelistFailure,
    deletelistStart, deletelistSuccess, getlistsFailure, getlistsStart, getlistsSuccess, editListFailure, editListSuccess, editListStart
} from "./listsAction"
import axios from "axios"

export const getLists = async (dispatch) => {
    dispatch(getlistsStart())
    try {

        const res = await axios.get("/lists", {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(getlistsSuccess(res.data))
    } catch (error) {
        dispatch(getlistsFailure())
    }

}
//create
export const createList = async (list, dispatch) => {
    dispatch(cretelistStart())
    try {

        const res = await axios.post("lists", list, {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(cretelistSuccess(res.data))

    } catch (error) {
        dispatch(cretelistFailure())
    }

}

// //delete
export const deleteList = async (id, dispatch) => {
    dispatch(deletelistStart())
    try {

        await axios.delete("lists/" + id, {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(deletelistSuccess(id))

    } catch (error) {
        dispatch(deletelistFailure())
    }

}


// //update
export const updateList = async (id, list, dispatch) => {
    dispatch(editListStart())
    try {

        const res = await axios.put(`lists/${id}`, list, {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(editListSuccess(res.data))

    } catch (error) {
        dispatch(editListFailure())
    }

}