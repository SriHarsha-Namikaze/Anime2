import React from "react";
import { MovieControls } from "./MovieControls";

export const MovieCard = ({ anime, type }) => {
  return (
    <div className="anime-card">
      <div className="overlay"></div>
      <img src={anime.images.jpg.image_url} alt={`${anime.title} Poster`} />
      <MovieControls type={type} anime={anime} />
    </div>
  );
};
