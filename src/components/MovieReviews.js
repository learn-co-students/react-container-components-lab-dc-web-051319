import React from 'react'

const MovieReview = props => {
  return (
    <div className="review-list">
      {props.reviews.map(review => <div className="review" key={review.display_title}><h1>{review.display_title}</h1></div>)}
    </div>
  )
}

export default MovieReview