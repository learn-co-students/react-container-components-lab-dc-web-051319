import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dh71PdyfQgbBA3GDqllTKEN3q9K0iAvA';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?';

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(URL + `query=${this.state.searchTerm}` + `&api-key=${NYT_API_KEY}`)
      .then(res => res.json())
      .then(response => this.setState({reviews: response.results}))
  }

  handleSearchInputChange = event =>
    this.setState({ searchTerm: event.target.value });

  render() {
    return (
      <div className="searchable-movie-reviews">
        <h2>Searched Reviews</h2>
        <form onSubmit={this.handleSubmit}>
          <input
           id="search-input"
           type="text"
           style={{ width: 300 }}
           onChange={this.handleSearchInputChange}
           />
       </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}


export default SearchableMovieReviewsContainer;
