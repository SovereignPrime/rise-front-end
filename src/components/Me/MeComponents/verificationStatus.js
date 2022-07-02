import React, { Component } from "react";
import { Card, Row, Col, Progress } from "reactstrap";

import "./verificationStatus.css";

class VerificationStatus extends Component {
  render() {
    return (
      <div class="container-fluid">
        <Row className="row-lg-1">
          <Col className="col-12 border text-start">
            <h1>
              <svg height="100" width="100">
                <circle
                  cx="50"
                  cy="50"
                  r="10"
                  stroke="black"
                  stroke-width="3"
                  fill="red"
                />
              </svg>
              Authentic User
            </h1>
          </Col>
        </Row>
        <Row className="row-4 py-3">
          <Col>
            <div class="wrap-circles">
              <div class="circle per-10">
                <div class="inner">10%</div>
              </div>
            </div>
          </Col>
          <Col>
            <Row className="row-4 px-3">
              <h4>23</h4>
              <p>Users Verified</p>
            </Row>

            <Row className="row-4 px-3">
                <h4>Weekly Verification Trend</h4>
                <h1>BAR CHART</h1>
            </Row>
          </Col>
        </Row>
        <Row className="row-1">
          <Col className="border mt-3">5 Verification Left This Week</Col>
        </Row>
      </div>
    );
  }
}

export default VerificationStatus;
