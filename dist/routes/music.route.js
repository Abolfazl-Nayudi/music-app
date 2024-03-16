"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const music_controller_1 = require("../controllers/music.controller");
const router = (0, express_1.Router)();
router.route('/').post(music_controller_1.createSong).get(music_controller_1.getAllSongs);
router.route('/:id').get(music_controller_1.getSingleSong);
exports.default = router;
