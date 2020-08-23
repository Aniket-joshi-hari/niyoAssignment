const HOME_DATA_REQUEST = "HOME_DATA_REQUEST";
const GET_MOVIE_BY_ID_REQUEST = "GET_MOVIE_BY_ID_REQUEST";

export function getHomePageData(data) {
    return {
        type: HOME_DATA_REQUEST,
        data
    };
}

export function getMovieById(data) {
    return {
        type: GET_MOVIE_BY_ID_REQUEST,
        data
    };
}