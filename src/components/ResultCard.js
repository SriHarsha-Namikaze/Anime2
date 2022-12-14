import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ anime }) => {
  const {
    addToWatchlist,
    addToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);
  console.log(watchlist);
  let stored = watchlist.find((o) => o.mal_id === anime.mal_id);
  let Watched = watched.find((o) => o.mal_id === anime.mal_id);

  const watchlistDisabled = stored
    ? true
    : Watched
    ? true
    : false;

  const watchedDisabled = Watched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <img src={anime.images.jpg.image_url} alt={`${anime.title} Poster`} />
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{anime.title}</h3>
          <h4 className="release-date">{anime.aired.prop.from.year}</h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addToWatchlist(anime)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addToWatched(anime)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
