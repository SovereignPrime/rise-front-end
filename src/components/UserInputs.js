// Modules
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import riseLogo from "../styles/assets/spLogo.png";
import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import SelfieCamera, {
	takeSelfie,
	startRecording,
	stopRecording
} from "./SelfieCamera";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import UserInputsErrorModal from "./UserInputsErrorModal";
import "./UserInputs.css";
import { classicNameResolver } from "typescript";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "reactstrap";
import { Form } from "reactstrap";
import { Row } from "reactstrap";
import { Col } from "reactstrap";
import { FormGroup } from "reactstrap";
import { Label } from "reactstrap";
import { Input } from "reactstrap";

// Add Joseph's code for the image capture.

// - Make the input page look like the figma, left half input form, right half Joseph's image/camera portion.
// Bottom/ footer is the button to add user/ should reroute user to dashboard.

const UserInputs = () => {
	const navigate = useNavigate();

	const cameraRef = useRef();
	const canvasRef = useRef();

	const firstNameRef = useRef();
	const lastNameRef = useRef();
	const userAgeRef = useRef();
	const userHeightRef = useRef();
	const userAddressRef = useRef();
	const userOccupationRef = useRef();
	const userSexRef = useRef();
	const userBioRef = useRef();

	const [showImg, setShowImg] = useState(false);
	const [submitError, setSubmitError] = useState(false);

	const handleSubmit = (event) => {
		event.preventDefault();
		// this will be where the backend verifies the user's info
		//  all the input fields should have a ternary/boolean
		const firstName = firstNameRef.current.value;
		const lastName = lastNameRef.current.value;
		const userAge = userAgeRef.current.value;
		const userHeight = userHeightRef.current.value;
		const userAddress = userAddressRef.current.value;
		const userOccupation = userOccupationRef.current.value;
		const userSex = userSexRef.current.value;
		const userBio = userBioRef.current.value;

		if (!showImg) {
			setSubmitError(true);

			return;
		}

		navigate("/Dashboard");
	};

	const entryBoxValidator = (props) => {
		if (props.target.value.length == 0) {
			props.target.className = "empty";
			return;
		} else {
			props.target.className = "done";
			return;
		}

		props.target.className = " ";
	};

	const handleSubmitError = (event) => {
		setSubmitError(false);
	};

	const handleSetImgTrue = (event) => {
		setShowImg(true);
	};

	return (
		<div className="wrapper">
			{submitError && <UserInputsErrorModal onConfirm={handleSubmitError} />}
			<div className="userInputIntro">
				<h2>RISE </h2>
				<h3>Account Setup</h3>
				<div className="logo">
					<img src={riseLogo}></img>
				</div>
				<p>Please Enter Your Account Information</p>
			</div>
			<div>
				<Form
					onSubmit={(event) => handleSubmit(event)}
					className="registerForm">
					<Row>
						<Col md={6}>
							<FormGroup>
								<Label for="firstname">First Name:</Label>
								<Input
									id="firstname"
									name="firstname"
									type="firstname"
									ref={firstNameRef}
									onBlur={entryBoxValidator}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for="lastname">Last name:</Label>
								<Input
									id="lastname"
									name="lastname"
									type="lastname"
									ref={lastNameRef}
									onBlur={entryBoxValidator}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col md={6}>
							<FormGroup>
								<Label for="height">Height (cm):</Label>
								<Input
									id="height"
									name="height"
									type="height"
									ref={userHeightRef}
									onBlur={entryBoxValidator}
								/>
							</FormGroup>
						</Col>
						<Col md={6}>
							<FormGroup>
								<Label for="age">Age:</Label>
								<Input
									id="age"
									name="age"
									type="age"
									ref={userAgeRef}
									onBlur={entryBoxValidator}
								/>
							</FormGroup>
						</Col>
					</Row>

					<Row>
						<Col>
							<FormGroup>
								<Label for="sex" md={8}>
									Sex:
								</Label>
								<Col xxl={13}>
									<Input
										id="exampleSelect"
										name="select"
										type="select"
										ref={userSexRef}
										onBlur={entryBoxValidator}>
										<option>Male</option>
										<option>Female</option>
										<option>Other</option>
									</Input>
								</Col>
							</FormGroup>
						</Col>
						<Col md={8}>
							<FormGroup>
								<Label for="bio">Bio: </Label>
								<Input
									id="bio"
									name="text"
									type="textarea"
									placeholder="Your message"
									ref={userBioRef}
									onBlur={entryBoxValidator}
								/>
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</div>

			<Button className="bg-dark p-3 mt-4">SUBMIT</Button>
		</div>
	);
};

export default UserInputs;
