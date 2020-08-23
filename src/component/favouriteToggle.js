import React from 'react';
import { connect } from 'react-redux';
import { addFavouriteDetails, removeFavouriteDetails } from '../Redux/actions/Favourite'

const ToggleFavourite = (props) => {
    const { movie, addFavorite, removeFavorite, favourites } = props;


    const toggleFavouriteIcon = () => {
        if (favourites.some(favouritedata => favouritedata.imdbID === movie.imdbID)) {
            removeFavorite(movie)
        } else {
            addFavorite(movie)
        }
    }

    const fav = favourites.some(favouritedata => favouritedata.imdbID === movie.imdbID);
    return (
        <div className="fav-icon-inner" style={{ backgroundColor: fav ? '#ea4c89' : '#E7E7E9', color: fav ? '#fff' : '#000' }} onClick={toggleFavouriteIcon}>
            <div className="fav-icon">

                <svg className={fav ? "selected-heart"
                    : "heart"} xmlns="http://www.w3.org/2000/svg" fill={fav ? '#fff' : '#000'} viewBox="0 0 24 24" role="img"><path d="m18.199 2.04c-2.606-.284-4.262.961-6.199 3.008-2.045-2.047-3.593-3.292-6.199-3.008-3.544.388-6.321 4.43-5.718 7.96.966 5.659 5.944 9 11.917 12 5.973-3 10.951-6.341 11.917-12 .603-3.53-2.174-7.572-5.718-7.96z"></path></svg>
            </div>
            <label className="fav-label">{fav ? 'Liked' : 'Like'}</label>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        addFavorite: (data) => dispatch(addFavouriteDetails(data)),
        removeFavorite: (data) => dispatch(removeFavouriteDetails(data))
    }
}

const mapStateToProps = (state) => {
    return { favourites: state.FavouriteReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToggleFavourite);