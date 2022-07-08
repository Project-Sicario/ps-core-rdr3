import GameManager from './managers/game-manager';

// Managers
const gameManager = GameManager.getInstance();

// Start Managers
setTimeout(() => {
  gameManager.start();
})

// Game Manager ------------------------------------------------------------------------------------------------------
on('ps-core:game-manager:get-players', (cb: any) => {
  cb(gameManager.GetPlayers());
});
