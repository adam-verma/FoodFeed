// Require dependencies 
const NodeMediaServer = require('node-media-server');
const config = require('./config/media_config').rtmp_server;
const db = require('./models');


const nms = new NodeMediaServer(config);

nms.on("prePublish", async (id, StreamPath, args) => {
    let stream_key = getSKfromSP(StreamPath);
    console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);

    db.User.findOne({stream_key: stream_key}, (err, user) => {
        if (!err) {
            if (!user) {
                let session = nms.getSession(id);
                session.reject();
            } else {
                // do stuff
            }
        }
    });
});

const getSKfromSP = sp => {
    let parts = sp.split("/");
    return parts[parts.length - 1]; 
}

module.exports = nms; 