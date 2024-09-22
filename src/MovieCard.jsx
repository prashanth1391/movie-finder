const MovieCard = ({ movie }) => {
  return (
    <div className="movie">
      <div>
        <p>{movie.Year}</p>
      </div>
      <div>
        <img src={movie.Poster} alt={movie.title} />
      </div>
      <div>
        <span className="flex-container">{movie.Type}</span>
        <span>{movie.Title}</span>
      </div>
    </div>
  );
};

export default MovieCard;
