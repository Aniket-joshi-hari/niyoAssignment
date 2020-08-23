import React from 'react';
import { connect } from 'react-redux';
import Layout from '../component/layout';
import MovieCard from '../component/movieWrapper';
import '../css/favourite.css';
import NoresultText from "../component/noResult";
import Noresults from "../assets/images/no.svg"

const MyFavourites = (props) => {
    const { history, favourites } = props;
    console.log(favourites)
    return (
        <div>
            <Layout history={history} />
            <div className="favourites-main-container">
                {favourites && favourites[0] ?
                    <div className="favourites-inner-container">
                        {(favourites || []).map((movie) => {
                            return <MovieCard movie={movie} key={movie.imdbID} history={history} />
                        })
                        }
                    </div>
                    :
                    <div>
                        <img src={Noresults} className="no-favourites" alt="No Favourite movies found" height="100" width="100" />
                        <NoresultText />
                    </div>
                }
            </div>

        </div>);
}


const mapStateToProps = (state) => {

    return { favourites: state.FavouriteReducer };
};

export default connect(mapStateToProps)(MyFavourites);