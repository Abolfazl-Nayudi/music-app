import { Router } from 'express';
import {
  getAllSongs,
  createSong,
  getSingleSong,
} from '../controllers/song.controller';
const router: Router = Router();

router.route('/').post(createSong).get(getAllSongs);
router.route('/:id').get(getSingleSong);

export default router;
