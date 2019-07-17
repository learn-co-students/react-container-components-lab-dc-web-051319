import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.fetchSearchableReviews()
    }

    fetchSearchableReviews = () => {
        const NYT_API_KEY = 'ugsG3xeTDhqkTKNqhRBwcQcHkpCPZmT0';
        const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + 
        this.state.searchTerm + 
        `&api-key=${NYT_API_KEY}`;
        fetch(URL)
        .then(resp => resp.json())
        .then(reviews => {
            // console.log(reviews)
            this.setState({reviews: reviews.results})
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={(e) => this.setState({searchTerm: e.target.value})} 
                        type="text"
                        name="search"
                        value={this.state.searchTerm}
                    />
                    <input 
                        type="submit"
                        value="submit"
                    />
                </form>
                <h2>Searchable List</h2>
                {<MovieReviews reviews={this.state.reviews}/>}
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer
