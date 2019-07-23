import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6l2ACYo5GfMi25Z8P4Cq7oSAnF8Ww5G7';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: []
    }
  }

  fetchStories() {
    fetch(URL)
    .then(res => res.status >= 400 ? new Error("Bad response from server") : res.json())
    .then(data => {
      let reviews = data.results
      this.setState({reviews})
    });
  }

  componentDidMount() {
    this.fetchStories()
  }

  render() {
    return (
      <div className="latest-movie-reviews container-fluid">
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default LatestMovieReviewsContainer