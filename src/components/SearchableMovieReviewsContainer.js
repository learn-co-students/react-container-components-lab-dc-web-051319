import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'l7YCHOlJtS0qAJtbpfwosXZNMLtR5Oq2';
const BASE_URL ='https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;


// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
    constructor(){
        super()
        this.state = {
            reviews : [],
            searchTerm : ""
        }
    }


    onChangeHandler = (e) => {
        this.setState({
            searchTerm : e.target.value
        })
    }

 

            
    handleSubmit = (e) => {
        e.preventDefault();
        fetch(BASE_URL.concat(this.state.searchTerm))
        .then(res => res.json())
        .then(response => {
            console.log(response.results)
            this.setState({
            reviews : response.results
            })
        })
    }

    render(){
        return(
            <div className="searchable-movie-reviews" >
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="search-field" onChange={this.onChangeHandler}/>
                    <input type="submit" />
                </form>
                <div>
                <MovieReviews reviews={this.state.reviews} />
                </div>
            </div>
        )
    }
}