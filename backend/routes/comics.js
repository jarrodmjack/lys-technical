// import { Router } from "express";
const express = require('express')
// import { getComicById } from "../controllers/comic";
const { getComicById, getLatestComic } = require('../controllers/comic')

const router = express.Router();

router.get('/', getLatestComic)

router.get('/comic/:id', getComicById)

module.exports = router