import { useState } from 'react';
import tracksList from '../../assets/tracksList';
import Track from '../../components/Track/Track';
import style from './MainPage.module.scss';
import { Input } from '@mui/material';

const runSearch = query => {
  if (!query) return tracksList;

  const lowerCaseQuery = query.toLowerCase();

  return tracksList.filter(
    track =>
      track.title.toLowerCase().includes(lowerCaseQuery) ||
      track.artists.toLowerCase().includes(lowerCaseQuery)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);

  const changeHandler = e => {
    const foundTracks = runSearch(e.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className={style.search}>
      <Input
        className={style.input}
        placeholder="Поиск треков"
        onChange={changeHandler}
      />
      <div className={style.list}>
        {tracks.map(track => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
