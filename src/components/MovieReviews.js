import React from "react"

const renderReviews = (reviews) => {
    return reviews.map(review => <li className="review">{review.headline}</li>)
}


function MovieReviews(props){
    return (
        <div className="review-list">
            <ul>
                {renderReviews(props.reviews)}
            </ul>
        </div>
    )
}

export default MovieReviews