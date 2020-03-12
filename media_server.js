// Require dependencies 
const NodeMediaServer = require('node-media-server');
const config = require('./config/media_config.js').rtmp_server;
const Streamer = require('./models/Streamer');

nms = new NodeMediaServer(config);

nms.on("prePublish", async (id, StreamPath, args) => {
    let streamKey = getSKfromSP(StreamPath);
    console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);

    Streamer.findOne({streamKey: streamKey})
    .catch(function(err, user) {
        if (!err) {
            if (!user) {
                let session = nms.getSession(id);
                session.reject(); 
            } else {
                // do stuff
            }
        } 
    })
});

const getSKfromSP = sp => {
    let parts = sp.split("/");
    return parts[parts.length - 1]; 
}

module.exports = nms; 