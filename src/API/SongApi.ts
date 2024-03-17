import { SongFormType } from '../types/common/CommonTypes';
import axios from 'axios';
const baseUrl = 'http://localhost:4000/v1/song';

const postSong = async (data: SongFormType) => {
  const res = await axios.post(baseUrl, data);
  return res;
};

const getAllSongs = async () => {
  const res = await axios.get(baseUrl);
  return res;
};

export { postSong, getAllSongs };
