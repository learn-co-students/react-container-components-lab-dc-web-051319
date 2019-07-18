import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import apiKey from '../apiKey'

const NYT_API_KEY = apiKey();
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
    }

    getAllReviews = () => {
        fetch(URL)
            .then(response => response.json())
            .then(reviewObjs => {
                this.setState({
                    reviews: reviewObjs.results
                })
            });
    }

    componentDidMount() {
        this.getAllReviews()
    }

    render() {
        return (
           <div className="latest-movie-reviews">
               <MovieReviews reviews={this.state.reviews} />
           </div> 
        )
    }
}

export default LatestMovieReviewsContainer
