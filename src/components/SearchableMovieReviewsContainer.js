import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '6l2ACYo5GfMi25Z8P4Cq7oSAnF8Ww5G7';
const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  fetchStories() {
    fetch(URL + this.state.searchTerm)
    .then(res => res.json())
    .then(data => {

      let reviews = data.results
      this.setState({reviews})
    });
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    this.fetchStories()
  }

  render() {
    return (
      <div className="searchable-movie-reviews container-fluid">
        <form onSubmit={this.handleFormSubmit}>
          <label>Search Movie Reviews: &nbsp; 
            <input onChange={this.handleChange} type="text" placeholder="Enter movie title..." />
            <input type="submit" />
          </label>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer