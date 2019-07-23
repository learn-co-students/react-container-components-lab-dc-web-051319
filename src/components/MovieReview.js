import React from "react";

const MovieReview = (props) => {
  let {display_title, summary_short, multimedia} = props.review

  if (multimedia !== null) {
    <img className="card-img-top" src={multimedia.src} alt={display_title} />
  }

  return (
    <div className="movie-review card col-sm-6 col-md-3" style={{marginBottom: 1 + 'em'}}>
      {multimedia !== null ? <img className="card-img-top" src={multimedia.src} alt={display_title} /> : ""}
      <div className="card-body">
        <h5 className="card-title">{display_title}</h5>
        <p className="card-test">{summary_short}</p>
      </div>
    </div>
  )
}

export default MovieReview
  