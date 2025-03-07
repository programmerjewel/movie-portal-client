import React from "react";
import { Rating } from "react-simple-star-rating";
const MyFavourites = () => {
  return (
    <div>
        <Rating
          size={50}
          transition
          allowFraction
          showTooltip
        />
    </div>
  );
};

export default MyFavourites;
