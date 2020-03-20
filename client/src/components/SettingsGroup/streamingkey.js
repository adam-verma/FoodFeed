import React from "react";
import {Col, Row, Container} from "../Grid";

const KeyContainer = props => {
return (
    <Container fluid>
        <h4>Streaming Key</h4>
        <hr />
        <Col size="xs-12 sm-12 md-8 lg-6">
            <Row>
                <h5>{props.children}</h5>
            </Row>
            <Row>
                <button className="btn btn-dark mt-2" {...props}>
                Generate a new key
                </button> 
            </Row> 
        </Col>   
    </Container> 
)
}

export default KeyContainer;