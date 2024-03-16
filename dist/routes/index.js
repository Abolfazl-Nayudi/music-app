"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const song_route_1 = __importDefault(require("./song.route"));
const router = (0, express_1.Router)();
exports.router = router;
router.use('/song', song_route_1.default);
