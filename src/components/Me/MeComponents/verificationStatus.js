import React, {Component} from "react";
import { Card, Row, Col } from "reactstrap";
import { Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar } from "recharts";
import PieChart from "../../PieChart/PieChart";

function VerificationStatus() {
    const data = [
        {name: 'Mon', value: 30},
        {name: 'Tue', value: 40},
        {name: 'Wed', value: 50},
        {name: 'Thu', value: 60},
        {name: 'Fri', value: 70},
        {name: 'Sat', value: 80},
        {name: 'Sun', value: 90}
    ];

    return(
        <div className="px-3 py-3">
            <Row className="row-lg-1">
                <Col className="col-12 border text-start">Authitic User</Col>
            </Row>
            <Row className="row-4 py-3">
                <Col className="col-7 border me-5">
                    <PieChart />
                </Col>
                <Col className="col-4">
                    <Row className="border mb-3">
                        <p style={{margin: 0, fontSize: 45, fontWeight: "bold"}}>23</p>
                        <p style={{fontSize: 15, color: "#bfbdbd", fontWeight: "700", marginTop: -15}}>User Verified</p>
                    </Row>
                    <Row className="border py-3">
                        <p style={{fontSize: 13, fontWeight: "bold", textAlign: "start"}}>Weekly Verification Number</p>
                        <BarChart
                                width={330}
                                height={230}
                                data={data}
                                // margin={{
                                //     top: 5,
                                //     right: 35,
                                //     left: 5,
                                //     bottom: 5,
                                // }}
                                
                                barSize={18}
                            >
                            <XAxis dataKey="name" padding={{ left: 10, right: 10 }} fontSize={15} fontStyle={'oblique'} ticks={{display:false}}/>
                            {/* <Tooltip  /> */}
                            {/* <Legend /> */}
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <Bar dataKey="value" fill="#99ffdd" background={{ fill: '#eee' }} />
                        </BarChart>
                    </Row>
                </Col>
            </Row>
            <Row className="row-2">
                <Col className="border text-start py-4">
                    <h4>5 Verification Left This Week</h4>
                </Col>
            </Row>

        </div>
    )
}

export default VerificationStatus;



