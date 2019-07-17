import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ugsG3xeTDhqkTKNqhRBwcQcHkpCPZmT0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount() {
        this.fetchReviews()
    }

    fetchReviews = () => {
        fetch(URL)
        .then(resp => resp.json())
        .then(reviews => {
            // console.log(reviews.results)
            this.setState({reviews: reviews.results}) 
        })
    }

    render() {
        return (
            <div className="latest-movie-reviews">
                <h2>Latest Movoie List</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default LatestMovieReviewsContainer