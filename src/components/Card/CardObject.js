import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
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
import { Link } from "react-router-dom";

const CardObject = () => {
	const marketItems = useSelector((state) => state.marketItem.marketItems);

	const dispatch = useDispatch();
	function handleGood(id) {
		//console.log(event);
		dispatch(incrementGood({ Id: id }));
	}
	function handleBad(id) {
		//console.log(event);
		dispatch(incrementBad({ Id: id }));
	}
	return (
		<div className="row">
			{marketItems.map((item) => (
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

									<small className="text-muted">&nbsp; {item.perName}</small>

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
											<Link key={item.id} to={`detail/${item.id}`}>
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
	);
};

export default CardObject;
