import React, {useState, useEffect} from "react";
// import LiveStream from "../components/LiveStreams";
import { Link } from "react-router-dom";
import { Col, Row, Container} from "../components/Grid";
import API from "../utils/API";
import axios from "axios"; 
import config from "../config/media_config";

const LiveStream = () => {
    // Setting our component's intial state 
    const [streams, setStream] = useState({
        live_streams: []
    })

    useEffect(() => {
        loadLiveStream();
        loadStreamInfo();
    });

    const loadLiveStream = async (props) => {
        try {
            axios.get('http://127.0.0.1:' + config.rtmp_server.http.port + '/api/streams')
            .then(res => {
                let streams = res.data;
                if (typeof (streams['live'] !== 'undefined')) {
                    loadStreamInfo(streams['live']);
                }
            });
        } catch (err) { 
            console.group("Load Live Stream");
            console.log(err);
            console.groupEnd();
        }
    }
    
    const loadStreamInfo = async (live_streams) => {
        try {
            const res = await API.getStreamInfo({
                params: {
                    streams: live_streams
                }
            })
            setStream({live_streams: res.data})
            console.log(streams);
        } catch (err) { 
            console.group("Load Live Stream");
            console.log(err);
            console.groupEnd();
        }
    }

    return (
        <Container fluid> 
            <h4>Live Streams</h4>
            <hr />
            <Row className= "streams row">
                {(streams.live_streams.length > 0)
                    && streams.live_streams.map((stream) => (
                        <Col size= "xs-12 sm-12 md-3 lg-4">
                            <span className="live-label">LIVE</span>
                            <Link to = {`/streams/${stream.username}`}>
                            <div className="stream-thumbnail">
                                <img src={`/thumbnails/${stream.stream_key}.png`} />
                            </div>
                            </Link>
                            <span className="username">
                                <Link to= {`/streams/${stream.username}`}>
                                    {stream.username}
                                </Link>
                            </span>
                        </Col>
                    ))
                }
            </Row> 
        </Container>
    );
}

export default LiveStream;
