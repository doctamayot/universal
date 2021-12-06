import React from 'react';

const ListReviews = ({ waitings }) => {
  return (
    <div className="reviews w-75">
      <h3>Waiting List:</h3>
      <hr />
      {waitings &&
        waitings.map((review) => (
          <div key={review._id} className="review-card my-3">
            <p className="review_user">{review.name}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default ListReviews;
