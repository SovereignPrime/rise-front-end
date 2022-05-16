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
import { faCamera } from "@fortawesome/free-solid-svg-icons";
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

	const handleSubmit = (event) => {
		event.preventDefault();
		// this will be where the backend verifies the user's info
		//  all the input fields should have a ternary/boolean
		console.log(`hello`);
		navigate("/Dashboard");
	};

	return (
		<div className="wrapper">
			<div className="userInputIntro">
				<h2>RISE </h2>
				<h3>Account Setup</h3>
				<div className="logo">
					<img src={riseLogo}></img>
				</div>
				<p>Please Enter Your Account Information</p>
			</div>

			<Form onSubmit={(event) => handleSubmit(event)} className="registerForm">
				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="firstname">First Name:</Label>
							<Input id="firstname" name="firstname" type="firstname" />
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="lastname">Last name:</Label>
							<Input id="lastname" name="lastname" type="lastname" />
						</FormGroup>
					</Col>
				</Row>

				<Row>
					<Col md={6}>
						<FormGroup>
							<Label for="height">Height (cm):</Label>
							<Input id="height" name="height" type="height" />
						</FormGroup>
					</Col>
					<Col md={6}>
						<FormGroup>
							<Label for="age">Age:</Label>
							<Input id="age" name="age" type="age" />
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
								<Input id="exampleSelect" name="select" type="select">
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
							/>
						</FormGroup>
					</Col>
				</Row>
			</Form>

			{/* BEGAN working on camera/ selfie integration. Video appears, the still is still not happening. */}

			<div className="josephCamera">
				<SelfieCamera ref={cameraRef} />

				{/* add button with onclick takeselfie function */}

				<Button
					className="bg-dark p-3 mt-4 takeSelBtn"
					onClick={() => takeSelfie(cameraRef, canvasRef)}>
					Take a Selfie
					<FontAwesomeIcon className="icon camera" icon={faCamera} />
				</Button>

				<canvas ref={canvasRef} />
			</div>

			{/*// onChange={(e) => setUserChoice(e.target.value)} value={userChoice}*/}
			<Button className="bg-dark p-3 mt-4">SUBMIT</Button>
		</div>
	);
};

export default UserInputs;
