import WorldManager from "./managers/world-manager";
const PSBase = global.exports["ps-base-rdr3"].GetCoreObject();

setImmediate(() => {
    WorldManager.getInstance().start();
})

RegisterCommand("tstTr", () => {
    PSBase.Functions.TriggerCallback("testCallback", (response: any) => {
        console.log(response);
    });
    
}, false)