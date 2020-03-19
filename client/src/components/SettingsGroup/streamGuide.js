import React from "react";
import {Col, Row, Container} from "../Grid";

const streamGuide = props => {
    return(
<Container fluid>
<h4>How to Stream</h4>
<hr />
<Col size="md-12">
    <Row> 
    <p>
        You can use <a target="_blank" href="https://obsproject.com/">OBS</a> or
        <a target="_blank" href="https://www.xsplit.com/">XSplit</a> to Live stream. If you're
        using OBS, go to Settings > Stream and select Custom from service dropdown. Enter
        <b>rtmp://127.0.0.1:1935/live</b> in server input field. Also, add your stream key.
        Click apply to save.
    </p>
    </Row>
</Col>
</Container>
)
    }
export default streamGuide;