import React from 'react';
import '../css/App.css';
import { connect } from 'react-redux';
import { getHomePageData } from "../Redux/actions/homePage";
import Layout from "../component/layout";
import Loading from "../component/loading";
import MovieCard from "../component/movieWrapper";
import SearchBox from "../component/searchBox";
import Image from "../assets/images/no.svg"
import NoresultText from "../component/noResult";
function Home(props) {
    const { searchMovie, homedata, history } = props;
    console.log(props)

    React.useEffect(() => {
        props.searchMovie({ s: 'Superman', apikey: '51c9514d' })
    }, [])
    return (
        <div className="Home">
            <Layout />
            <SearchBox />
            {/* {((props.homedata && props.homedata.data.search) || []).map(item=>{ */}
            {homedata && homedata.loading ?
                <Loading className="loadingContainer" /> :
                homedata && homedata.data && homedata.data.Search && homedata.data.Search[0] ?
                    <div className="movies-main-container">
                        <React.Fragment>
                            {((homedata && homedata.data && homedata.data.Search) || []).map((movie) => {
                                return <MovieCard movie={movie} key={movie.imdbID} history={history} />
                            })
                            }
                        </React.Fragment>
                    </div>
                    :
                    <div>
                        <div className="no-results">
                            <img src={Image} className="no-favourites" alt="No results found" width="100" height="100" />

                        </div>
                        <NoresultText />
                    </div>
            }
            {/* <MovieCard /> */}
        </div >
    );
}
const mapDispatchToProps = dispatch => {
    return {
        searchMovie: (data) => dispatch(getHomePageData(data))
    }
}
const mapStateToProps = (state) => {
    console.log(state)
    return { homedata: state.HomeReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
