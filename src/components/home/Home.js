import { Link, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSliders, faPlus } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import { Table } from "reactstrap";
import { Input } from "reactstrap";
import React, { useState } from "react";
import DropdownMessage from "../DropdownMenus/DropdownMessage";
import DropdownCategory from "../DropdownMenus/DropdownCategory";
import PaymentModal from "../Modals/PaymentModal";
import { Button, Modal, ModalFooter, ModalHeader, ModalBody } from "reactstrap";
import CardObject from "../Card/CardObject";
import person1 from "../../styles/assets/person1.jpg";
import person2 from "../../styles/assets/person2.jpg";
import person3 from "../../styles/assets/person3.jpg";
import person4 from "../../styles/assets/person4.jpg";

const data = [
	{
		userName: "user 1",
		userImg: person1,
		typeOfaction: "Message",
		timeOfAction: "10h"
	},
	{
		userName: "user 2",
		userImg: person2,
		typeOfaction: "Payment",
		timeOfAction: "10h"
	},
	{
		userName: "user 3",
		userImg: person3,
		typeOfaction: "MarketPlace",
		timeOfAction: "10h"
	},
	{
		userName: "user 4",
		userImg: person4,
		typeOfaction: "autheticate",
		timeOfAction: "10h"
	}
];

const Home = () => {
	const [filterBtnClicked, setFilterBtnClicked] = useState(false);
	const [plusBtnClicked, setPlusBtnClicked] = useState(false);

	// Modal1 open state
	const [modal1, setModal1] = React.useState(false);

	// Toggle1 for Modal
	const toggle1 = () => setModal1(!modal1);

	// Modal2 open state
	const [modal2, setModal2] = React.useState(false);

	// Toggle2 for Modal
	const toggle2 = () => setModal2(!modal2);

	// Modal3 open state
	const [modal3, setModal3] = React.useState(false);

	// Toggle3 for Modal
	const toggle3 = () => setModal3(!modal3);

	return (
		<div style={{ marginLeft: " 2%" }}>
			<div>
				<Input
					placeholder="Say something..."
					className="searchInput"
					style={{ width: "70%" }}></Input>
			</div>
			<div className="container d-flex mt-4">
				<div className="row">
					<div
						className="col-lg p-4 overflow-scroll box mr-auto"
						style={{ width: "800px" }}>
						<div className="topBar">
							<div>
								<h3>Notification</h3>
							</div>
							<div
								className="icons"
								style={{
									marginLeft: "5%",
									marginTop: "25px"
								}}>
								<ul
									className="menuContainer"
									style={{
										visibility:
											plusBtnClicked || filterBtnClicked ? "visible" : "hidden",
										padding: "10px"
									}}>
									<FontAwesomeIcon
										style={{
											visibility: plusBtnClicked ? "hidden" : "visible"
										}}
										className="iconN"
										icon={faSliders}
										onClick={() =>
											setFilterBtnClicked(
												(prevFilterBtnClicked) => !prevFilterBtnClicked
											)
										}
									/>
									<FontAwesomeIcon
										className="iconN"
										icon={faPlus}
										style={{
											visibility: filterBtnClicked ? "hidden" : "visible"
										}}
										onClick={() =>
											setPlusBtnClicked(
												(prevPlusBtnClicked) => !prevPlusBtnClicked
											)
										}
									/>
									<li
										onClick={!filterBtnClicked && toggle1}
										style={{ textAlign: "left" }}>
										Message
									</li>
									<li
										onClick={!filterBtnClicked && toggle2}
										style={{ textAlign: "left" }}>
										Payment
									</li>
									<li
										onClick={!filterBtnClicked && toggle3}
										style={{ textAlign: "left" }}>
										MarketPlace
									</li>
								</ul>
							</div>
						</div>

						<Table borderless className="mr-4">
							<tbody>
								{data.map((item) => (
									<tr key={item.userName}>
										<td style={{ display: "flex" }}>
											<img src={item.userImg} width="50px" height="50px"></img>
											<p>{item.typeOfaction}</p>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
					<div className="col-lg p-2 box">
						<h3 style={{ textAlign: "left" }}>Verification</h3>
						<Table borderless>
							<tbody>
								<tr>
									<td style={{ textAlign: "left", paddingLeft: "35px" }}>
										<Link to="../Matching/" style={{ color: "black" }}>
											<span className="dot"></span>2 Verification left
										</Link>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
			</div>

			<PaymentModal />
			<Modal isOpen={modal1} toggle={toggle1}>
				<ModalHeader toggle={toggle1}>Add Message</ModalHeader>
				<ModalBody>
					<Input
						id="unmountOnClose1"
						name="unmountOnClose1"
						onChange={function noRefCheck() {}}
						type="textarea"
						className="textareaModal"></Input>
				</ModalBody>

				<ModalFooter>
					<DropdownMessage />

					<Button className="bg-dark" onClick={toggle1}>
						Send
					</Button>
				</ModalFooter>
			</Modal>
			<Modal isOpen={modal2} toggle={toggle2}>
				<ModalHeader toggle={toggle2}>Add Payment</ModalHeader>
				<ModalBody>
					<p>Payment Amount</p>
					<div style={{ display: "flex" }} className="mb-3">
						<p className="mt-3">$</p>
						<Input
							id="unmountOnClose"
							name="unmountOnClose"
							onChange={function noRefCheck() {}}
							type="input"
							placeholder="0.00"></Input>
					</div>

					<Input
						id="unmountOnClose"
						name="unmountOnClose"
						onChange={function noRefCheck() {}}
						type="textarea"
						placeholder="Say something..."
						className="textareaModal"></Input>
				</ModalBody>

				<ModalFooter>
					<DropdownMessage />

					<Button className="bg-dark" onClick={toggle1}>
						Send
					</Button>
				</ModalFooter>
			</Modal>
			<Modal isOpen={modal3} toggle={toggle3}>
				<ModalHeader toggle={toggle3}>Add New MarketPlace</ModalHeader>
				<ModalBody>
					<div style={{ display: "flex" }}>
						{" "}
						<p>Price</p> <DropdownCategory />
					</div>

					<div style={{ display: "flex" }} className="mb-3">
						{" "}
						<p className="mt-3">$</p>
						<Input
							id="unmountOnClose"
							name="unmountOnClose"
							onChange={function noRefCheck() {}}
							type="input"
							placeholder="0.00"></Input>
					</div>
					<Input
						id="unmountOnClose"
						name="unmountOnClose"
						onChange={function noRefCheck() {}}
						type="textarea"
						placeholder="Say something..."
						className="textareaModal"></Input>
				</ModalBody>

				<ModalFooter>
					<DropdownMessage />

					<Button className="bg-dark" onClick={toggle1}>
						Send
					</Button>
				</ModalFooter>
			</Modal>
			<div className="marketItem mt-4">
				<p className="text-secondary" style={{ textAlign: "right" }}>
					View All MarketPlace update &gt;
				</p>
				<CardObject />
			</div>
		</div>
	);
};

export default Home;
