import { useEffect, useState } from 'react';
import { useGenres } from './../hooks/useGenres';
import { GenreResponseProps, MovieProps } from './../interfaces/interfaces';

import { HeaderContent } from './HeaderContent';
import { MovieCard } from './MovieCard';

import { api } from './../services/api';

import './../styles/content.scss';

export function Content() {

  const {selectedGenreId} = useGenres();
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return(
    <div className="container">
      <HeaderContent title={selectedGenre.title} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  );

}