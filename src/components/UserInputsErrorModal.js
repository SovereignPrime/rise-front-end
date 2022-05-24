import React from "react";

import classes from "./UserInputsErrorModal.module.css";

const UserInputsErrorModal = (props) => {
  return (
    /* <div onClick={props.onConfirm}>
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <header className={classes.header}>
            <img src="https://100dayscss.com/codepen/alert.png" width="10%" height="10%" />
          <h2> <br/>Please take a selfie <br/> <br/></h2>
          <div className={classes.lower}>
              <button className={classes.button}>Okay</button>
          </div>
        </header>
       
        <footer className={classes.actions}>
          
          
        </footer>
      </div>
    </div>*/

    //<button className={classes.button}>Okay</button> LINE 22 after footer
    <div onClick={props.onConfirm} className={classes.backdrop}>
      <div className={classes.modal}>
        <img
          src="https://100dayscss.com/codepen/alert.png"
          width="10%"
          height="10%"
        />
        <br />
        <h4>An Error Has Occured!</h4>
        <p>Please take a selfie before submission.</p>
        <span>
          <button className={classes.button}>DISMISS</button>
        </span>
      </div>
    </div>
  );
};

export default UserInputsErrorModal;
