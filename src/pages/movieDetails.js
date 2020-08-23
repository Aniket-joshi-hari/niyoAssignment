import Layout from '../component/layout';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getMovieById } from '../Redux/actions/homePage';
import ToggleFavourite from '../component/favouriteToggle';
import Loading from '../component/loading';
import '../css/movieDetails.css';

const MovieDetails = (props) => {
    const { getMovieDetails, match, movieDetails, history } = props;
    const id = match.params.id
    console.log('match: ', movieDetails);
    console.log(props)
    useEffect(() => {
        getMovieDetails({ i: id, apikey: '51c9514d' })
    }, []);
    const data = movieDetails && movieDetails.data
    return (<div history={history}>
        <Layout />
        <div className="movie-details-main-wrapper">
            {!data ?
                <Loading /> :
                <React.Fragment>
                    <div className="movie-details-inner-wrapper">
                        <div className="movie-details-left-wrapper">
                            <img src={data.Poster} className="movie-details-poster" />
                        </div>
                        <div className="movie-details-right-wrapper">
                            <label className="movie-name">{data.Title}</label>
                            <div className="movie-ratings">Imdb Rating {data.imdbRating}</div>
                            <h6>{data.Genre}</h6>
                            <h6>{data.Language}</h6>
                            <div className="movie-details-desc">{data.Plot}</div>
                            <div className="movie-sub-details-wrapper">
                                <div className="movie-sub-details-item-wrapper">
                                    <div className="movie-sub-details-title">Director</div>
                                    <div className="movie-sub-details-value">{data.Director}</div>
                                </div>
                                <div className="movie-sub-details-item-wrapper">
                                    <div className="movie-sub-details-title">Production</div>
                                    <div className="movie-sub-details-value">{data.Production}</div>
                                </div>
                                <div className="movie-sub-details-item-wrapper">
                                    <div className="movie-sub-details-title">Released</div>
                                    <div className="movie-sub-details-value">{data.Released}</div>
                                </div>
                                <div className="movie-sub-details-item-wrapper">
                                    <div className="movie-sub-details-title">Duration</div>
                                    <div className="movie-sub-details-value">{data.Runtime}</div>
                                </div>
                            </div>
                            <div className="favourite-btn-wrapper">
                                <ToggleFavourite movie={data} />
                            </div>
                            {data.Ratings && data.Ratings.length > 0 &&
                                <div className="movie-ratings-main-wrapper">
                                    <div className="movie-ratings-inner-wrapper">
                                        {(data.Ratings || []).map((rating) => {
                                            return (<div className="movie-ratings-item-wrapper">
                                                <div className="movie-sub-details-title">{rating.Source}</div>
                                                <div className="movie-rating-container">
                                                    {[...Array(+Math.floor(4)).keys()].map(n => {
                                                        return (
                                                            <span
                                                                className="star"
                                                                key={n + 1}
                                                                data-value={n + 1}
                                                            >
                                                                &#9733;
                                                            </span>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </React.Fragment>
            }
        </div>
    </div>);
}

const mapDispatchToProps = dispatch => {
    return {
        getMovieDetails: (data) => dispatch(getMovieById(data))
    }
}

const mapStateToProps = (state) => {
    return { movieDetails: state.MovieDetailsReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);