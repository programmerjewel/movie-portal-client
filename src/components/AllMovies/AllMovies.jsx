import { useLoaderData } from "react-router-dom";
import Movie from "../Movie/Movie";


const AllMovies = () => {

  const movies = useLoaderData();
  
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="font-extrabold text-4xl text-center">Explore a World of Movies</h2>
      <p className="text-center">Dive into our extensive collection of films from every genre, era, and corner of the globe. Whether you're in the mood for heart-pounding action, heartwarming romance, spine-chilling horror, or thought-provoking drama, MoviePortal has something for everyone. Browse, search, and discover new favorites or revisit timeless classics. Your next movie night inspiration is just a click away!</p>
      <div className="grid grid-cols-3 gap-4">
        {
          movies.map((movie)=><Movie movie = {movie} key={movie._id}></Movie>)
        }
      </div>
    </div>
  );
};

export default AllMovies;