import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const AddMovies = () => {
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const moviePoster = form.moviePoster.value;
    const movieTitle = form.movieTitle.value;
    const genre = form.genre.value;
    const duration = form.duration.value;
    const releaseYear = form.releaseYear.value;
    const summaryTxt = form.summaryTxt.value;
    const movieRating = rating;

    const data = {
      moviePoster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      rating,
      summaryTxt,
    };
    console.log(
      moviePoster,
      movieTitle,
      genre,
      duration,
      releaseYear,
      summaryTxt,
      movieRating
    );

    fetch("http://localhost:5000/addmovie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };

  return (
    <div className="w-11/12 mx-auto">
      <div>
        <h2 className="text-4xl font-bold text-center">
          Share Your Favorites Movies on Our Portal
        </h2>
        <p className="text-center">
          {" "}
          Found a hidden gem or a must-watch masterpiece? Add it to MoviePortal
          and share it with our community! Whether it's a recent blockbuster or
          an indie film that deserves more love, your contributions help make
          MoviePortal the ultimate hub for movie enthusiasts.{" "}
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-4 flex flex-col gap-4 justify-center"
      >
        {/* Movie Poster */}
        <div className="w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Movie Poster URL</span>
          </label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="input input-bordered w-full"
            name="moviePoster"
          />
        </div>

        {/* Movie Title */}
        <div className="w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Movie Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter movie title"
            className="input input-bordered w-full"
            name="movieTitle"
          />
        </div>

        {/* Genre Dropdown */}
         <div className="w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
          <select
            className="select select-bordered w-full"
             name="genre"
          >
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="documentary">Documentary</option>
            <option value="thriller">Thriller</option>
          </select>
        </div>
       

        {/* Duration */}
        <div className="w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Duration (in minutes)</span>
          </label>
          <input
            type="number"
            placeholder="Enter duration"
            className="input input-bordered w-full"
            name="duration"
          />
        </div>

        {/* Release Year Dropdown */}
        <div className="w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Release Year</span>
          </label>
          <select className="select select-bordered w-full" name="releaseYear">
            <option value="">Select a year</option>
            {Array.from({ length: 60 }, (_, i) => 2024 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>

        {/* Rating */}
        <div className="w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <div className="w-full">
            <Rating
              onClick={(rate) => setRating(rate)}
              ratingValue={rating}
              name="rating"
              size={25}
              transition
              fillColor="orange"
              emptyColor="gray"
              className="star-rating"
              SVGstyle={{ display: "inline" }}
            />
          </div>
        </div>

        {/* Summary */}
        <div className="w-3/4 mx-auto">
          <label className="label">
            <span className="label-text">Summary</span>
          </label>
          <textarea
            placeholder="Enter a short summary of the movie"
            className="textarea textarea-bordered w-full"
            name="summaryTxt"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-3 w-3/4 mx-auto flex justify-center">
          <button type="submit" className="btn btn-secondary btn-wide">
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMovies;
