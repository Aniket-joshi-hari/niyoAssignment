import React, { useState } from "react";
import { connect } from 'react-redux';
import { getHomePageData } from "../Redux/actions/homePage";
import "../css/searchBox.css"
const SearchBox = (props) => {
    const [searchTxt, setsearchText] = useState('')
    const [category, setcategory] = useState('')
    const [years, setyear] = useState('')
    const { searchMovie, history } = props;
    const search = () => {

        // if (history.location.pathname !== '/') {
        //     history.push('/')
        // }
        searchMovie({ s: searchTxt, apikey: '51c9514d', type: category, y: years })
    }
    const handleOnChange = (e) => {
        setsearchText(e.target.value);
    }

    const selectCategory = (e) => {
        setcategory(e.target.value);
        if (searchTxt && searchTxt.length > 1) {
            searchMovie({ s: searchTxt, apikey: '51c9514d', type: e.target.value, y: years })
        }
    }

    const setYears = (e) => {

        setyear(e.target.value)
    }
    return (
        <React.Fragment>
            <div className="serchOuterContainer">
                <div className="search-container">
                    <input type="search" id="search" name="search" onChange={handleOnChange} />

                </div>
                <div className="filter-container">
                    <select name="category" id="category" onChange={selectCategory}>
                        <option value="">All</option>
                        <option value="movie">Movies</option>
                        <option value="series">Series</option>
                        <option value="episode">Episodes</option>
                    </select>
                </div>
                {/* 
            <button className="search-button" onClick={search}><img src={SearchImg} alt="Search" /></button> */}
                <button className="search-button mobile" onClick={search}>Search</button>
            </div>
        </React.Fragment>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        searchMovie: (data) => dispatch(getHomePageData(data))
    }
}

const mapStateToProps = (state) => {
    return { homedata: state.HomeReducer };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);