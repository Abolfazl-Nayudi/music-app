"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Song = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const songSchema = new mongoose_1.default.Schema({
    songName: {
        type: String,
        required: true,
    },
    artist: {
        type: String,
        required: true,
    },
    duration: {
        type: Number,
        required: true,
    },
    releaseYear: {
        type: Number,
        required: true,
    },
    songUrl: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
const Song = mongoose_1.default.model('Songs', songSchema);
exports.Song = Song;
