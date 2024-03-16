import { Router } from 'express';
import musicRoute from './song.route';

const router: Router = Router();

router.use('/song', musicRoute);

export { router };
