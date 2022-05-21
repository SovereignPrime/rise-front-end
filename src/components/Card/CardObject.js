import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import { Card } from "reactstrap";
import { CardImg } from "reactstrap";
import { CardImgOverlay } from "reactstrap";
import { CardTitle } from "reactstrap";
import { CardText } from "reactstrap";
import nirvana from "../../styles/assets/nirvana.png";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

const CardObject = () => {
	return (
		<Card inverse style={{ width: "34%" }}>
			<CardImg
				alt="Card image cap"
				src="https://picsum.photos/318/270"
				width="20%"
				height="100%"
			/>
			<CardImgOverlay>
				<div className="overlay">
					<CardTitle tag="h6">
						<img src="#"></img> User Name{" "}
						<FontAwesomeIcon className="iconN" icon={faThumbsUp} />
						<FontAwesomeIcon className="iconN" icon={faThumbsDown} />
					</CardTitle>
					<CardText>goods name</CardText>
					<CardText tag="h6">
						<img src={nirvana} />
						1,000
						<Button outline className="bg-white text-black ">
							Detail
						</Button>
					</CardText>
				</div>
			</CardImgOverlay>
		</Card>
	);
};
export default CardObject;
