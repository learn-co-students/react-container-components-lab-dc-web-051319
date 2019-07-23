// Code MovieReviews Here
import React from 'react';
import MovieReview from './MovieReview'

const MovieReviews = (props) => {
  return (
    <div className="review-list row">
      { props.reviews.map((review, idx) => <MovieReview key={idx} review={review} />) }
    </div>
  )
}

export default MovieReviews