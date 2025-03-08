

const MovieDetail = (props = {}) => {
  const { movie } = props || {};


  return (
    <div className='border border-gray-200 p-3 rounded-md'>
      <img src={movie.moviePoster} className='rounded-md w-full object-cover' alt="" />
      <h2 className="text-2xl font-semibold">{movie.movieTitle}</h2>
      <div className="badge badge-primary">{movie.genre}</div>
      <div className="ml-4 badge badge-primary">{movie.releaseYear}</div>
      <p>Duration: {movie.duration} minutes</p>
      <p>({movie.rating} / 10)</p>
      <button className="btn btn-primary">Details</button>
    </div>
  );
};

export default MovieDetail;