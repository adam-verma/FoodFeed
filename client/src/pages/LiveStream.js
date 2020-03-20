import React, {useState, useEffect} from "react";
// import LiveStream from "../components/LiveStreams";
import { Link } from "react-router-dom";
import { Col, Row, Container} from "../components/Grid";
import API from "../utils/API"

const LiveStream = () => {
    // Setting our component's intial state 
    const [streams, setStream] = useState[{
        live_streams: []
    }]

    useEffect(() => {
        loadLiveStream();
    }, []);

    const loadLiveStream = async (props) => {
        try {
            const res = await API.getLiveStream(props.match.params.streams);
            setStream({live_streams: res.data})
            console.log(streams);
        } catch (err) { 
            console.group("Load Live Stream");
            console.log(err);
            console.groupEnd();
        }
    }

        let streamView = streams.map((stream, index) => {
            return (
            <Container fluid> 
                <Row>
                    <Col size= "xs-12 sm-12 md-3 lg-4">
                        <span className="live-label">LIVE</span>
                        <Link to = {`/streams/${stream.username}`}>
                           <div className="stream-thumbnail">
                               <img src={`/thumbnails/${stream.streamKey}.png`} />
                           </div>
                        </Link>
                        <span className="username">
                            <Link to= {`/streams/${stream.username}`}>
                                {stream.username}
                            </Link>
                        </span>
                    </Col>
                </Row>
    
                <Row> 
                    <Container fluid> 
                        <h4>Live Streams</h4>
                        <hr />
                        <Row className= "streams row">
                            {streamView}
                        </Row> 
                    </Container>
                </Row>
            </Container>
            )
        })
}

export default LiveStream;