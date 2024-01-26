import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  return (
    <div className="movie" key={imdbID || Math.random()}>
      <div>
        <p>{Year || 6969}</p>
      </div>

      <div>
        <img src={Poster || "https://via.placeholder.com/400"} alt={Title || "idk man"} />
      </div>

      <div>
        <span>{Type || "IDK MAN"}</span>
        <h3>{Title || "NO IDEA"}</h3>
      </div>
    </div>
  );
}

export default MovieCard;