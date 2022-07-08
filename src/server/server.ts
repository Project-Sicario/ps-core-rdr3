import './events';

const PSBase = global.exports['ps-base-rdr3'].GetCoreObject();

PSBase.Functions.CreateCallback('testCallback', async (source, cb) => {
  cb('Hello im from the server');
});
