import { creteMovieFailure, creteMovieStart, creteMovieSuccess, deleteMovieFailure, deleteMovieStart, deleteMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess, } from "./moviesAction"
import axios from "axios"

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {

        const res = await axios.get("/movies", {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(getMoviesSuccess(res.data))
    } catch (error) {
        dispatch(getMoviesFailure())
    }

}
//create
export const createMovie = async (movie, dispatch) => {
    console.log(movie);
    dispatch(creteMovieStart())
    try {

        const res = await axios.post("/movies", movie, {

            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(creteMovieSuccess(res.data))

    } catch (error) {
        dispatch(creteMovieFailure())
    }

}
//delete
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart())
    try {

        await axios.delete("movies/" + id, {
            headers: {
                "x-auth-token": JSON.parse(localStorage.getItem("user")).accessToken,
            }
        });
        dispatch(deleteMovieSuccess(id))

    } catch (error) {
        dispatch(deleteMovieFailure())
    }

}