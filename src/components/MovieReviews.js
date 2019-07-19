// Code MovieReviews Here
import React from "react";

const Review = ({display_title, byline, link, summary_short }) => {
        return (
          <div
            key={display_title}
            className="review">
            <header>
                <a className="review-link" href={link.url}>
                {display_title}
              </a>
              <br/>
              <span className="author">{byline}</span>
            </header>
            <blockquote>{summary_short}</blockquote>
          </div>
        );
    };

const MovieReviews = (props) => {
    return(
        <div className="review-list">{props.reviews.map(Review)}</div>
    )
}



export default MovieReviews