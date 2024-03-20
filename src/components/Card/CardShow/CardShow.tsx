import { Music4 } from 'lucide-react';
import React from 'react';
import './CardShow.css';
import { SongObjectType } from '../../../types/common/CommonTypes';

type CardShowPropsType = { data: SongObjectType; number: number };

export default function CardShow({ data, number }: CardShowPropsType) {
  const { artist, image, songName } = data;
  return (
    <div className={`song-card number${number + 1}`}>
      <img src={image} alt="" />
      <h4 className="song-name">{songName}</h4>
      <div>
        <span className="artist-name">{artist}</span>
        <span className="card-song-icon">
          <Music4 />
        </span>
      </div>
    </div>
  );
}
