import React, { useState } from "react";

const MovieForm = () => {
  const [moviePoster, setMoviePoster] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [duration, setDuration] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Validate Movie Poster (must be a valid URL)
    if (!moviePoster || !/^https?:\/\/.*\.(png|jpg|jpeg|gif)$/i.test(moviePoster)) {
      newErrors.moviePoster = "Please enter a valid image URL (e.g., https://example.com/image.png)";
    }

    // Validate Movie Title (must be at least 2 characters)
    if (!movieTitle || movieTitle.length < 2) {
      newErrors.movieTitle = "Movie title must be at least 2 characters long";
    }

    // Validate Genre (must be selected)
    if (!genre) {
      newErrors.genre = "Please select a genre";
    }

    // Validate Duration (must be a number greater than 60)
    if (!duration || isNaN(duration) || duration <= 60) {
      newErrors.duration = "Duration must be a number greater than 60 minutes";
    }

    // Validate Release Year (must be selected)
    if (!releaseYear) {
      newErrors.releaseYear = "Please select a release year";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", { moviePoster, movieTitle, genre, duration, releaseYear });
      alert("Movie added successfully!");
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <div className="p-6 bg-base-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Add a New Movie</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Movie Poster */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Movie Poster URL</span>
          </label>
          <input
            type="text"
            placeholder="Enter image URL (e.g., https://example.com/image.png)"
            className={`input input-bordered ${errors.moviePoster ? "input-error" : ""}`}
            value={moviePoster}
            onChange={(e) => setMoviePoster(e.target.value)}
          />
          {errors.moviePoster && <span className="text-error text-sm">{errors.moviePoster}</span>}
        </div>

        {/* Movie Title */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Movie Title</span>
          </label>
          <input
            type="text"
            placeholder="Enter movie title"
            className={`input input-bordered ${errors.movieTitle ? "input-error" : ""}`}
            value={movieTitle}
            onChange={(e) => setMovieTitle(e.target.value)}
          />
          {errors.movieTitle && <span className="text-error text-sm">{errors.movieTitle}</span>}
        </div>

        {/* Genre Dropdown */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Genre</span>
          </label>
          <select
            className={`select select-bordered ${errors.genre ? "select-error" : ""}`}
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          >
            <option value="">Select a genre</option>
            <option value="comedy">Comedy</option>
            <option value="drama">Drama</option>
            <option value="horror">Horror</option>
            <option value="action">Action</option>
            <option value="sci-fi">Sci-Fi</option>
          </select>
          {errors.genre && <span className="text-error text-sm">{errors.genre}</span>}
        </div>

        {/* Duration */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Duration (in minutes)</span>
          </label>
          <input
            type="number"
            placeholder="Enter duration"
            className={`input input-bordered ${errors.duration ? "input-error" : ""}`}
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          {errors.duration && <span className="text-error text-sm">{errors.duration}</span>}
        </div>

        {/* Release Year Dropdown */}
        <div className="form-control">
          <label className="label">
            <span className="label-text">Release Year</span>
          </label>
          <select
            className={`select select-bordered ${errors.releaseYear ? "select-error" : ""}`}
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
          >
            <option value="">Select a year</option>
            {Array.from({ length: 25 }, (_, i) => 2024 - i).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
          {errors.releaseYear && <span className="text-error text-sm">{errors.releaseYear}</span>}
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Add Movie
          </button>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;