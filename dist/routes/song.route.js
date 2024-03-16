"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const song_controller_1 = require("../controllers/song.controller");
const router = (0, express_1.Router)();
router.route('/').post(song_controller_1.createSong).get(song_controller_1.getAllSongs);
router.route('/:id').get(song_controller_1.getSingleSong);
exports.default = router;
