export function addFavouriteDetails(data) {
    return {
        type: 'ADD_FAVOURITE',
        data
    };
}

export function removeFavouriteDetails(data) {
    return {
        type: 'REMOVE_FAVOURITE',
        data
    };
}