import { useEffect, useState } from 'react';

import { Button } from './Button';

import { api } from './../services/api';
import { useGenres } from './../hooks/useGenres';
import { GenreResponseProps } from './../interfaces/interfaces';

import './../styles/sidebar.scss';

export function SideBar() {

  const {selectedGenreId, setSelectedGenreId} = useGenres();
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>

  );
}