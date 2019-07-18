import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import apiKey from '../apiKey'

const NYT_API_KEY = apiKey();

class SearchableMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [],
            searchTerm: ""
        }
    }
    getMovieReviews = () => {
        let url = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
            + `${this.state.searchTerm}` + `&api-key=${NYT_API_KEY}`;
        
        fetch(url)
            .then(response => response.json())
            .then(reviewObjs => {
                this.setState({
                    reviews: reviewObjs.results
                })
            });
    }

    // componentDidUpdate() {
    //     this.getMovieReviews()
    // }

    handleSearch = (event) => {
        event.preventDefault()
        // this.setState({
        //     searchTerm: event.target[0].value
        // })
        this.getMovieReviews()
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })

    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSearch}>
                    <input name="search" type="text" onChange={this.handleChange}></input>
                    <input value="submit" type="submit"></input>
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer