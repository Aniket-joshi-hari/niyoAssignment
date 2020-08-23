
export const HomeReducer = (state = {}, action) => {

    switch (action.type) {
        case 'HOME_DATA_REQUEST':
            return { ...state, loading: true };
        case 'HOME_DATA_SUCCESS':
            return { ...state, loading: false, data: action.data }
        default:
            return state
    }
}


export const MovieDetailsReducer = (state = {}, action) => {

    switch (action.type) {
        case 'GET_MOVIE_BY_ID_REQUEST':
            return { ...state, loading: true };
        case 'GET_MOVIE_BY_ID_SUCCESS':
            return { ...state, loading: false, data: action.data }
        default:
            return state
    }
}