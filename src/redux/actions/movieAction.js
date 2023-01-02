import api from "../api";

const API_KEY = process.env.REACT_APP_API_KEY;
function getMovies() {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIES_REQUEST" });

            const popularMovieApi = api.get(
                `/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
            );

            const topRatedApi = api.get(
                `/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
            );

            const upComingApi = api.get(
                `/movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
            );

            const genreApi = api.get(
                `/genre/movie/list?api_key=${API_KEY}&language=ko-KR`
            );

            let [popularMovies, topRatedMovies, upComingMovies, genreList] = await Promise.all([
                popularMovieApi,
                topRatedApi,
                upComingApi,
                genreApi,
            ]);

            dispatch({
                type: "GET_MOVIES_SUCCESS",
                payload: {
                    popularMovies: popularMovies.data,
                    topRatedMovies: topRatedMovies.data,
                    upComingMovies: upComingMovies.data,
                    genreList: genreList.data.genres,
                    loading: false,
                },
            });
        } catch (error) {
            // error handling
            dispatch({ type: "GET_MOVIES_FAILURE" });
        }

    }
}

function getMovieDetail(id) {
    return async (dispatch) => {
        try {
            dispatch({ type: "GET_MOVIES_REQUEST" });
            
            const getMovieDetailApi = api.get(
                `/movie/${id}?api_key=${API_KEY}&language=ko-KR`
            );

            const getReviewApi = api.get(
                `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US-&page=1`
            )

            const getRecomenddApi = api.get(
                `/movie/${id}/recommendations?api_key=${API_KEY}&language=ko-KR&page=1`
            )

            const getTrailerApi = api.get(
                `/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
            )

            let [detailMovieData, reviewDatas, recommendDatas, trailerData] = await Promise.all([
                getMovieDetailApi,
                getReviewApi,
                getRecomenddApi,
                getTrailerApi,
            ]);

            // console.log("detailMovieData", detailMovieData);
            // console.log("reviewDatas", reviewDatas);
            // console.log("recommendDatas", recommendDatas)
            // console.log(trailerData);
            dispatch({
                type: "GET_MOVIE_DETAIL",
                payload: {
                    detailMovieData: detailMovieData.data,
                    reviewDatas: reviewDatas.data.results,
                    recommendDatas: recommendDatas.data.results,
                    trailerData: trailerData.data.results,
                    loading: false,
                }
            });
        } catch (error) {
            dispatch({ type: "GET_MOVIES_FAILURE" });

        }
    }
}


export const movieAction = { getMovies, getMovieDetail };