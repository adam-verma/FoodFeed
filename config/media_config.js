const media_config = {
    server: {
        secret: 'hello'
    },
    rtmp_server: {
        rtmp: {
            port: 1935,
            chunk_size: 60000,
            gop_cache: true,
            ping: 60,
            ping_timeout: 30
        },
        http: {
            port: 8888,
            mediaroot: './config/media',
            allow_origin: '*'
        },
        trans: {
            ffmpeg: 'C:\Program Files\ffmpeg-20200315-c467328-win64-static\bin\ffmpeg.exe',   
            tasks: [
                {
                    app: 'live',
                    hls: true,
                    hlsFlags: '[hls_time=2:hls_list_size=3:hls_flags=delete_segments]',
                    dash: true,
                    dashFlags: '[f=dash:window_size=3:extra_window_size=5]'
                }
            ]
        }
    }
};
 
module.exports = media_config;