import WorldManager from './managers/world-manager';

const PSBase = global.exports['ps-base-rdr3'].GetCoreObject();
const worldManager = WorldManager.getInstance();

setImmediate(() => {
  worldManager.start();
});

RegisterCommand(
  'cplayer',
  () => {
    console.log("running command");
    emitNet("ps-core:net:login");
  },
  false,
);
