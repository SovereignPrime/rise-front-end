import React from "react";
import { DarkButton } from "./Buttons";
import classes from "./UserInputsErrorModal.module.css";
import alert from "./stockalert.png";

const UserInputsErrorModal = (props) => {
  return (
    <div onClick={props.onConfirm} className={classes.backdrop}>
      <div className={classes.modal}>
        <img src={alert} width="10%" height="10%" />
        <br />
        <h4>An Error Has Occured!</h4>
        <p>Please take a selfie before submission.</p>
        <span>
          <DarkButton className={classes.button}>DISMISS</DarkButton>
        </span>
      </div>
    </div>
  );
};

export default UserInputsErrorModal;
