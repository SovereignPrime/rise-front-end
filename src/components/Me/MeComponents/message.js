import React, {Component} from "react";
import {Card, CardImg, CardText, CardTitle, Row, Col} from "reactstrap";

class Message extends Component {

    render(){
        return(
                <Card className="lg mx-3 my-3">
                    <div className="mx-3 my-3">
                    <CardTitle className="border-bottom">
                        <Row>
                            <Col className="text-start mx-3">To xxx</Col> 
                            <Col className="text-end mx-3">date</Col>
                        </Row>
                    </CardTitle>
                    <CardText className="text-start mx-3">
                        something
                    </CardText>
                    </div>
                </Card>
        )
    }
}

export default Message;