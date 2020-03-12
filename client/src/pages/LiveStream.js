import React, {useState, useEffect} from "react";
import LiveStreams from "../components/LiveStreams";
import { Col, Row, Container} from "../components/Grid";
import videojs from "video.js"

const [stream, setStream] = useState({
    stream: false, 
    video
})