import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./authAction";
import { toast } from "react-toastify";



export const login = async (user, dispatch) => {
    dispatch(loginStart())

    try {

        const res = await axios.post("auth/login", user);
        res.data.isAdmin && dispatch(loginSuccess(res.data))
        toast.success('user Login success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    } catch (err) {

        dispatch(loginFailure())

        toast.error(err.response.data, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });


    }

};