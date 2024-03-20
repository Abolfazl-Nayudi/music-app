import { useEffect } from 'react';
import './CardList.css';
import { getAllSongs } from '../../../API/SongApi';
import { useSelector, useDispatch } from 'react-redux';
import { addData } from '../../../Redux/slices/songDataSlice';
import {
  WholeReduxState,
  SongObjectType,
} from '../../../types/common/CommonTypes';
import CardShow from '../CardShow/CardShow';
export default function CardList() {
  const songData = useSelector(
    (state: WholeReduxState) => state.songDataReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const res = await getAllSongs();
      dispatch(addData(res.data));
    };
    getData();
  }, []);

  return (
    <div className="card-list">
      {songData.slice(0, 5).map((song: SongObjectType, index: number) => {
        return <CardShow data={song} key={song?._id} number={index} />;
      })}
    </div>
  );
}
