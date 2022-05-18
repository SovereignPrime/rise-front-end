import React, {Component} from "react";
import {Card, CardImg, CardText, CardTitle, Row, Col} from "reactstrap";

class MarketPlace extends Component {

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
                <CardImg
                    className="mx-3 my-3"
                    src="#"
                    alt="img"
                    width="30%"
                    bottom
                />
                </div>
            </Card>
        )
    }
}

export default MarketPlace;