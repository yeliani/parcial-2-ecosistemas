const express = require('express');
const gameController = require('../controllers/game.controller'); //
const router = express.Router();

// Define game-related routes and link them to controller methods
router.post('/join', gameController.joinGame);//no crea el nuevo jugador
router.post('/start', gameController.startGame);
router.post('/marco', gameController.notifyMarco);
router.post('/polo', gameController.notifyPolo);
router.post('/select-polo', gameController.selectPolo);
router.post("/restart", gameController.restartGame); 
module.exports = router;