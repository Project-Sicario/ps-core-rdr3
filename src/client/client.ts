import WorldManager from './managers/world-manager';

const PSBase = global.exports['ps-base-rdr3'].GetCoreObject();
const worldManager = WorldManager.getInstance();

setImmediate(() => {
  worldManager.start();
});

RegisterCommand(
  'tstTr',
  () => {
    PSBase.Functions.TriggerCallback('testCallback', (response: any) => {
      console.log(response);
    });
  },
  false,
);
