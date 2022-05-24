// Modules
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import riseLogo from "../styles/assets/spLogo.png";
import React, { useEffect, useState, useRef, useImperativeHandle } from "react";
import SelfieCamera, {
  takeSelfie,
  startRecording,
  stopRecording,
} from "./SelfieCamera";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import UserInputsErrorModal from "./UserInputsErrorModal";
import "./UserInputs.css";
import { classicNameResolver } from "typescript";

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
      <div className="bossbox">
        <div className="forms">
          <form
            id="register-form"
            className="formMaster"
            onSubmit={(event) => handleSubmit(event)}
          >
            <div className="secondBox">
              <div className="nameBox">
                <label htmlFor="first name">First Name: </label>
                <input
                  type="text"
                  name="firstName"
                  ref={firstNameRef}
                  onBlur={entryBoxValidator}
                  required
                />
              </div>
              <div className="nameBox">
                <label htmlFor="last name">Last Name: </label>
                <input
                  type="text"
                  name="lastName"
                  ref={lastNameRef}
                  onBlur={entryBoxValidator}
                  id="fname"
                  required
                />
              </div>
            </div>
            <div className="secondBox">
              <div className="infoBox">
                {/* Ideally this will be calandar input for users dob. */}
                <label htmlFor="age">Age:</label>
                <input
                  type="number"
                  name="age"
                  ref={userAgeRef}
                  onBlur={entryBoxValidator}
                  required
                />
              </div>
              <div className="infoBox">
                <label htmlFor="height">Height (cm): </label>
                <input
                  type="number"
                  name="height"
                  ref={userHeightRef}
                  onBlur={entryBoxValidator}
                  required
                />
              </div>
            </div>
            <div className="secondBox">
              <div className="addBox">
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  name="address"
                  ref={userAddressRef}
                  onBlur={entryBoxValidator}
                  required
                />
              </div>
              <div className="occBox">
                <label htmlFor="occupation">Occupation: </label>
                <input
                  type="text"
                  name="occupation"
                  ref={userOccupationRef}
                  onBlur={entryBoxValidator}
                  required
                />
              </div>
            </div>
            <div className="secondBox">
              <div className="infoBox">
                <label htmlFor="sex">Sex:</label>
                <select
                  className="dropDown"
                  id="sex"
                  name="sex"
                  ref={userSexRef}
                >
                  <option value="placeholder" disabled>
                    {" "}
                    Please select your sex
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="bioBox">
                <label htmlFor="bio">Bio: </label>
                <textarea
                  id="message"
                  className="message"
                  placeholder="Your Message"
                  name="message"
                  cols="20"
                  rows="6"
                  ref={userBioRef}
                  onBlur={entryBoxValidator}
                  required
                ></textarea>
              </div>
            </div>
            <div className="josephCamera">
              <SelfieCamera ref={cameraRef} />

              {/* add button with onclick takeselfie function */}

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
                />
              }
            </div>
          </form>
        </div>

        {/* BEGAN working on camera/ selfie integration. Video appears, the still is still not happening. */}
      </div>

      <input
        className="submitButton"
        type="submit"
        value="SUBMIT"
        form="register-form"
        // onChange={(e) => setUserChoice(e.target.value)} value={userChoice}
      />
    </div>
  );
};

export default UserInputs;
