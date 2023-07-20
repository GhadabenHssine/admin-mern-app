const MoviesReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES_Start":
            return { movies: [], isFetching: true, error: false }
        case "GET_MOVIES_SUCCESS":
            return { movies: action.payload, isFetching: false, error: false }
        case "GET_MOVIES_FAILURE":
            return { movies: [], isFetching: false, error: true }

        case "CREATE_MOVIE_Start":
            return { ...state, isFetching: true, error: false }
        case "CREATE_MOVIE_SUCCESS":
            return { movies: [...state.movies, action.payload], isFetching: false, error: false }
        case "CREATE_MOVIE_FAILURE":
            return { ...state, isFetching: false, error: true }

        case "DELETE_MOVIE_Start":
            return { ...state, isFetching: true, error: false }
        case "DELETE_MOVIE_SUCCESS":
            return { movies: state.movies.filter((movie) => movie !== action.payload), isFetching: false, error: false }
        case "DELETE_MOVIE_FAILURE":
            return { ...state, isFetching: false, error: true }


        default:
            return { ...state }
    }

}

export default MoviesReducer