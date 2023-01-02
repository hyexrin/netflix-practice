let initialState = {
    popularMovies: [],
    topRatedMovies: [],
    upComingMovies: [],
    loading: true,
    genreList: [],
    detailMovieData: [],
    reviewDatas: [],
    recommendDatas: [],
    trailerData: [],
}

function movieReducer(state = initialState, action) {
    let {type, payload} = action;
    switch(type) {
        case "GET_MOVIES_REQUEST":
            return {...state, loading: true}
        case "GET_MOVIES_SUCCESS":
            return {...state, 
                popularMovies: payload.popularMovies,
                topRatedMovies: payload.topRatedMovies,
                upComingMovies: payload.upComingMovies,
                genreList: payload.genreList,
                loading: false,
            };
        case "GET_MOVIES_FAILURE":
            return {...state, loading: false}
        case "GET_MOVIE_DETAIL":
            return {...state, 
                detailMovieData: payload.detailMovieData, 
                reviewDatas: payload.reviewDatas,
                recommendDatas: payload.recommendDatas,
                trailerData: payload.trailerData,
                loading: false
            };
        default:
            return {...state};
    }
}

export default movieReducer;