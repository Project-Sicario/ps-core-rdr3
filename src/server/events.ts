import GameManager from './managers/game-manager';
import PlayerManager from './managers/player-manager';

const PSBase = global.exports['ps-base-rdr3'].GetCoreObject();

// Managers
const gameManager = GameManager.getInstance();
const playerManager = PlayerManager.getInstance();

// Start Managers
setTimeout(() => {
  gameManager.start();
})

// Game Manager ------------------------------------------------------------------------------------------------------
on('ps-core:game-manager:get-players', (cb: any) => {
  cb(gameManager.GetPlayers());
});

// Player Manager ----------------------------------------------------------------------------------------------------
onNet("ps-core:net:login", () => {
  const source = (global as any).source;
  const license: string = GetPlayerIdentifier(source, 1);
  playerManager.Login(source, license);
})
