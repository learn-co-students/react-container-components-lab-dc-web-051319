// Code MovieReviews Here
import React from 'react'


const MovieReviews = (props) => {

    let displayReviews = (reviews) => {
        if (reviews.length > 0) return (
            reviews.map(review => {
                return (
                    <div className="review">{review.display_title}</div>
                )
            })
        )
    }
    
    return (
        <div className="review-list">
            {displayReviews(props.reviews)}
        </div>
    )
}

export default MovieReviews