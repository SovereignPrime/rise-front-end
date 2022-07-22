// Modules
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//import riseLogo from "../styles/assets/spLogo.png";
import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import SelfieCamera, {
  takeSelfie,
  startRecording,
  stopRecording,
} from "../../../components/SelfieCamera";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faNotesMedical } from "@fortawesome/free-solid-svg-icons";
//import UserInputsErrorModal from "./UserInputsErrorModal";
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

const EditProfile = (props) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState([]);

  const cameraRef = useRef();
  const canvasRef = useRef();

  const userAddressRef = useRef();
  const userOccupationRef = useRef();
  const userBioRef = useRef();

  const [showImg, setShowImg] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userAddress = userAddressRef.current.value;
    const userOccupation = userOccupationRef.current.value;
    const userBio = userBioRef.current.value;

    var selfieURL = document.getElementById("userSelfieImage").toDataURL();
    if (
      userAddress.trim().length == 0 &&
      userOccupation.trim().length == 0 &&
      userBio.trim().length == 0 &&
      !showImg
    ) {
      console.log("out");
      return;
    }

    if (
      userAddress !== props.currentAddress ||
      userOccupation !== props.currentOccupation ||
      userBio !== props.currentBio
    ) {
      props.handleModalToggle();
      props.editProfile(
        userAddress !== "" ? userAddress : props.currentAddress,
        userOccupation !== "" ? userOccupation : props.currentOccupation,
        userBio !== "" ? userBio : props.currentBio,
        selfieURL
      );

      //return;
    }
  };

  const handleSetImgTrue = (event) => {
    setShowImg(true);
  };

  return (
    <div className="wrapper">
      {/*submitError && <UserInputsErrorModal onConfirm={handleSubmitError} />*/}
      <div className="userInputIntro">
        <h3>Edit Profile</h3>
        <div className="logo"></div>
        <p>Please Enter Your Account Information</p>
      </div>
      <div>
        <Form
          onSubmit={(event) => handleSubmit(event)}
          className="registerForm"
          id="registrationForm"
        >
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="address">Address:</Label>
                <input
                  id="address"
                  name="address"
                  type="text"
                  ref={userAddressRef}
                  placeholder={props.currentAddress}
                />
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <Label for="height">Occupation:</Label>
                <input
                  id="occupation"
                  name="occupation"
                  type="occupation"
                  ref={userOccupationRef}
                  placeholder={props.currentOccupation}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md={8}>
              <FormGroup>
                <Label for="bio">Bio: </Label>
                <input
                  id="bio"
                  name="text"
                  type="textarea"
                  ref={userBioRef}
                  placeholder={props.currentBio}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <div className="josephCamera">
          <SelfieCamera ref={cameraRef} />

          <button
            type="button"
            className="selfieButton"
            onClick={() => {
              handleSetImgTrue();
              takeSelfie(cameraRef, canvasRef);
            }}
          >
            <FontAwesomeIcon className="icon camera" icon={faCamera} />
            Take Selfie
          </button>

          {
            <canvas
              style={{ display: showImg ? "block" : "none" }}
              ref={canvasRef}
              id="userSelfieImage"
            />
          }
        </div>
      </div>

      <Button form="registrationForm" className="bg-dark p-3 mt-4">
        SUBMIT
      </Button>
    </div>
  );
};

export default EditProfile;
