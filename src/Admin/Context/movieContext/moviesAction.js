//Get movies
export const getMoviesStart = () => ({
    type: "GET_MOVIES_Start"
})
export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies
})
export const getMoviesFailure = () => ({
    type: "GET_MOVIES_FAILURE"
})

// create movie
export const creteMovieStart = () => ({
    type: "CREATE_MOVIE_Start"
})
export const creteMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie
})
export const creteMovieFailure = () => ({
    type: "CREATE_MOVIE_FAILURE"
})

//delete movie
export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_Start"
})
export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id
})
export const deleteMovieFailure = () => ({
    type: "DELETE_MOVIE_FAILURE"
})
