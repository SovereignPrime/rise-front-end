import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { CardImg } from "reactstrap";
import { CardImgOverlay } from "reactstrap";
import { CardTitle } from "reactstrap";
import { CardText } from "reactstrap";
import nirvana from "../../styles/assets/nirvana.png";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import person1 from "../../styles/assets/person1.jpg";
import person2 from "../../styles/assets/person2.jpg";
import person3 from "../../styles/assets/person3.jpg";
import person4 from "../../styles/assets/person4.jpg";
import bread from "../../styles/assets/bread.jpg";
import steak from "../../styles/assets/steak.jpg";
import milk from "../../styles/assets/milk.jpg";
import tea from "../../styles/assets/tea.jpg";

const data = [
	{
		userName: "user 1",
		userImg: person1,
		itemName: "Bread",
		nirvana: "100",
		explanation: "sweet bread",
		itemImg: bread,
		thumbUp: 10,
		thumbDown: 1
	},
	{
		userName: "user 2",
		userImg: person2,
		itemName: "Steak",
		nirvana: "1100",
		explanation: "Delicious Steak",
		itemImg: steak,
		thumbUp: 100,
		thumbDown: 0
	},
	{
		userName: "user 3",
		userImg: person3,
		itemName: "Tea",
		nirvana: "10",
		explanation: "Good for thirsty",
		itemImg: tea,
		thumbUp: 3,
		thumbDown: 1
	},
	{
		userName: "user 4",
		userImg: person4,
		itemName: "milk",
		nirvana: "12",
		explanation: "Good for thirsty too",
		itemImg: milk,
		thumbUp: 4,
		thumbDown: 1
	}
];

const CardObject = () => {
	return (
		<div className="cardOb">
			{data.map((item) => (
				<Card inverse style={{ width: "34%" }} key={item.userName}>
					<CardImg
						alt="Card image cap"
						src={item.itemImg}
						width="20%"
						height="360px"
					/>
					<CardImgOverlay>
						<div className="overlay">
							<CardTitle tag="h6">
								<img
									src={item.userImg}
									width="50px"
									height="50px"
									alt=""
									style={{
										borderRadius: "50%",
										objectFit: "cover"
									}}></img>{" "}
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
