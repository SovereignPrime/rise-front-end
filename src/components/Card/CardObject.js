import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { useState } from "react";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementGood,
  incrementBad,
} from "../../store/features/marketItem/marketItemSlice";
import "./Card.css";
import "bootstrap/dist/css/bootstrap.css";
import { LightButton } from "../Buttons";
import {
  Card,
  CardBody,
  CardText,
  CardImg,
  CardTitle,
  Row,
  Col,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, Link } from "react-router-dom";
import CheckSellerInfo from "../marketplace/CheckSellerInfo";
import ProductDetails from "../marketplace/ProductDetails";
import { variance } from "d3";

const CardObject = (props) => {
  const data = props.param;

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

<<<<<<< HEAD
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
								{data?.map((item) => (
									<div key={item.Id} className="col-lg-4 col-md-6 col-sm-12">
										<Card key={item.Id}>
											<CardImg
												className="cardimg"
												alt="Card image cap"
												src={item.prodPic}
												width="20%"
												height={200}
												top
											/>
											<CardBody>
												<CardText>
													<div className="market-person">
														<img className="market-person-photo" src={item.perPic} width="15%"></img>
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
=======
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
                {data?.map((item) => (
                  <div key={item.Id} className="col-lg-4 col-md-6 col-sm-12">
                    <Card key={item.Id}>
                      <CardImg
                        className="cardimg"
                        alt="Card image cap"
                        //src={item.prodPic}
                        src={
                          Array.isArray(item.prodPic)
                            ? item.prodPic[0]
                            : item.prodPic
                        }
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
                              }}
                            >
                              &nbsp; {item.perName}
                            </small>
>>>>>>> devBranch

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
                          <div className="market-product-name">
                            {item.prodName}
                          </div>
                          <div>
                            <Row md="2">
                              <Col className="market-product-price">
                                ${item.Price}
                              </Col>
                              <Col>
                                <Link key={item.Id} to={`detail/${item.Id}`}>
                                  <LightButton size="sm">Detail</LightButton>
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

export default CardObject;
