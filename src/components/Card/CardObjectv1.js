import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
    incrementGood,
    incrementBad
} from "../../store/features/marketItem/marketItemSlice";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.css";
import {
    Card,
    CardBody,
    CardText,
    CardImg,
    CardTitle,
    Row,
    Col,
    Button
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, Link } from "react-router-dom";
import CheckSellerInfo from "../marketplace/CheckSellerInfo";
import ProductDetails from "../marketplace/ProductDetails";
import { variance } from "d3";

import img1 from "../../styles/assets/img/jessie.png";
import prod1 from "../../styles/assets/appwatch.jpg";
import prod2 from "../../styles/assets/minicooper.jpeg";
import prod3 from "../../styles/assets/ps5.jpeg";
const marketItems11 = [
    {
        Id: 1,
        perName: "Eric Smith",
        perPic: img1,
        prodName: "Apple Watch",
        Category: "electronics",
        Price: 450,
        Detail: "this is a apple watch",
        prodPic: prod1,
        Good: 14,
        Bad: 2,
        Date: "2022-05-25"
    },
    {
        Id: 2,
        perName: "Eric Smith",
        perPic: img1,
        prodName: "MINI cooper",
        Category: "vehicles",
        Price: 1000,
        Detail: "this is a car",
        prodPic: prod2,
        Good: 14,
        Bad: 2,
        Date: "2022-05-22"
    },
    {
        Id: 3,
        perName: "Eric Smith",
        perPic: img1,
        prodName: "PS5",
        Category: "entertainment",
        Price: 200,
        Detail: "this is a PS station",
        prodPic: prod3,
        Good: 14,
        Bad: 2,
        Date: "2021-05-27"
    }
];

const CardObjectv1 = (props) => {
    // const marketItems = useSelector((state) => state.marketItem.marketItems);

    const data = props.param;
    console.log(data);
    const dispatch = useDispatch();
    function handleGood(id) {
        //console.log(event);
        dispatch(incrementGood({ Id: id }));
    }
    function handleBad(id) {
        //console.log(event);
        dispatch(incrementBad({ Id: id }));
    }

    const [checkSellerInfo, setCheckSellerInfo] = useState(false);
    const [sellerName, setSellerName] = useState("");
    const [sellerPic, setSellerPic] = useState("");

    const closeCheckSellerHandler = () => {
        setCheckSellerInfo(false);
    };

    return (
        <div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div className="containter">
                            <div className="row">
                                {checkSellerInfo && (
                                    <CheckSellerInfo
                                        closeCheckSellerHandler={closeCheckSellerHandler}
                                        checkSellerName={sellerName}
                                        checkSellerPic={sellerPic}
                                    />
                                )}
                                {data.map((item) => (
                                    <div key={item.Id} className="col-lg-4 col-md-6 col-sm-12">
                                        <Card key={item.Id}>
                                            <CardImg
                                                className="cardimg"
                                                alt="Card image cap"
                                                src={item.prodPic}
                                                width="30%"
                                                height={250}
                                                top
                                            />
                                            <CardBody>
                                                <CardText>
                                                    <div className="market-person">
                                                        <img src={item.perPic} width="20%"></img>
                                                        {/* <small className="text-muted">&nbsp; {item.perName}</small> */}
                                                        <small
                                                            className="text-muted"
                                                            onClick={() => {
                                                                setCheckSellerInfo(true);
                                                                setSellerName(item.perName);
                                                                setSellerPic(item.perPic);
                                                            }}>
                                                            &nbsp; {item.perName}
                                                        </small>

                                                        <FontAwesomeIcon
                                                            className="iconN"
                                                            icon={faThumbsUp}
                                                            onClick={() => handleGood(item.Id)}
                                                            size="1x"
                                                            transform="down-9 right-7"
                                                        />
                                                        <span>{item.Good}</span>
                                                        <FontAwesomeIcon
                                                            className="iconN"
                                                            icon={faThumbsDown}
                                                            onClick={() => handleBad(item.Id)}
                                                            size="1x"
                                                            transform="down-10 right-7"
                                                        />
                                                        <span>{item.Bad}</span>
                                                    </div>
                                                    <div className="market-product-name">{item.prodName}</div>
                                                    <div>
                                                        <Row md="2">
                                                            <Col className="market-product-price">${item.Price}</Col>
                                                            <Col>
                                                                <Link
                                                                    key={item.Id}
                                                                    to={`detail/${item.Id}`}>
                                                                    <Button size="sm">Detail</Button>
                                                                </Link>
                                                            </Col>
                                                        </Row>
                                                    </div>
                                                </CardText>
                                            </CardBody>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </div>
                    }
                />
                <Route path="detail/:Id" element={<ProductDetails />} />
            </Routes>
        </div>
    );
};

export default CardObjectv1;
