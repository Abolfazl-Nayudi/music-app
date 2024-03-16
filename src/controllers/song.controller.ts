import { Request, Response } from 'express';
import { Song } from '../model/song.schema';
const getAllSongs = async (req: Request, res: Response) => {
  res.send('all musics');
};
const createSong = async (req: Request, res: Response) => {
  const createdSong = await Song.create(req.body);
  console.log('here');
  res.status(201).json(createdSong);
};
const getSingleSong = async (req: Request, res: Response) => {
  res.send('send a music');
};

export { getAllSongs, createSong, getSingleSong };
