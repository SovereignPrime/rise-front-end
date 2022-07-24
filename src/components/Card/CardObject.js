import "bootstrap/dist/css/bootstrap.css";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { CardImg } from "reactstrap";
import { CardImgOverlay } from "reactstrap";
import { CardTitle } from "reactstrap";
import { CardText } from "reactstrap";
import nirvana from "../../styles/assets/nirvana.png";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const CardObject = () => {
	const marketItems = useSelector((state) => state.marketItem.marketItems);
	const dispatch = useDispatch();
	return (
		<div className="cardOb" style={{ marginLeft: "20px" }}>
			{marketItems?.map((item) => (
				<Card
					inverse
					style={{ width: "300px", height: "400px", margin: "10px" }}
					key={item.userName}>
					<CardImgOverlay>
						<div className="overlay">
							<CardTitle tag="h6">
								{item.userName}
								<FontAwesomeIcon className="iconN" icon={faThumbsUp} />
								<span>{item.thumbUp}</span>
								<FontAwesomeIcon className="iconN" icon={faThumbsDown} />
								<span>{item.thumbDown}</span>
							</CardTitle>
							<CardText>{item.itemName}</CardText>
							<CardText tag="h6">
								<img src={nirvana} alt="" width="50px" height="50px" />
								{item.nirvana}
								<Button outline className="bg-white text-black ">
									Detail
								</Button>
							</CardText>
						</div>
					</CardImgOverlay>
				</Card>
			))}
		</div>
	);
};

export default CardObject;
