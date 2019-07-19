import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
import { nytURL } from './keys'


// Code LatestMovieReviewsContainer Here



export default class LatestMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews : []
        }
    }

    componentDidMount(){
        fetch(nytURL)
        .then(res => res.json())
        .then(response => this.setState({
            reviews : response.results
        }))
    }

    // getAllReviews = () => {
    //     return this.state.reviews.map(reviewObj => <MovieReviews reviewObj={reviewObj} key={reviewObj.display_title}/>)
    // }

    render(){
        console.log(this.state.reviews)
        return(
            <div className="latest-movie-reviews">
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}