export const FavouriteReducer = (state = [], action) => {

    switch (action.type) {
        case 'INITIAL_FAVOURITES':
            return action.data
        case 'ADD_FAVOURITE':
            if (state.indexOf(action.data) !== -1) {
                const favouriteMovies = JSON.stringify(state);
                localStorage.setItem('favourites', favouriteMovies);
                return state
            }
            const favouriteMovies = JSON.stringify([
                ...state,
                action.data
            ]);
            localStorage.setItem('favourites', favouriteMovies);
            return [
                ...state,
                action.data
            ]
        case 'REMOVE_FAVOURITE':
            const data = state.filter((item) => item.imdbID !== action.data.imdbID)
            const favouriteMovies2 = JSON.stringify(data);
            localStorage.setItem('favourites', favouriteMovies2);
            return data
        default:
            return state
    }
}