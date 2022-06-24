import React, { useState, useRef, useEffect } from "react";
import { useDropzone } from "react-dropzone";
const myMessage = [];

const NewMessageModal = (props) => {
  var images;
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const duplicateChecker = (someFile) => {
    for (let i in uploadedFiles) {
      if (someFile[0].name == uploadedFiles[i][0].path) {
        return true;
      }
    }
    return false;
  };

  const entryBoxValidator = (props) => {
    if (props.target.value.trim().length == 0) {
      props.target.style.background = "#fbdada";
      props.target.style.borderColor = "red";

      return;
    } else {
      props.target.style.background = "#e1f5fe";
      props.target.style.borderColor = "blue";

      return;
    }
  };

  const hideFunction = (e) => {
    e.target.style.display = "none";
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 1) {
        for (let i in acceptedFiles) {
          if (!duplicateChecker([acceptedFiles[i]])) {
            Object.assign(acceptedFiles[i], {
              preview: URL.createObjectURL(acceptedFiles[i]),
            });

            setUploadedFiles((prevUploadedFiles) => {
              return [[acceptedFiles[i]], ...prevUploadedFiles];
            });
          }
        }
      } else {
        if (!duplicateChecker(acceptedFiles)) {
          Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0]),
          });

          setUploadedFiles((prevUploadedFiles) => {
            return [acceptedFiles, ...prevUploadedFiles];
          });
        }
      }
    },
  });

  images = uploadedFiles.map((file) => (
    //file.name and file.preview works for the multi upload
    //use catch try to preset key and src

    <div key={file[0].name}>
      <div>
        <img
          src={file[0].preview}
          style={{ width: "200px" }}
          alt="File Uploaded"
          onClick={(e) => {
            //console.log(uploadedFiles.indexOf(file));
            const start = uploadedFiles.indexOf(file);
            const deleteCount = 1;
            uploadedFiles.splice(start, deleteCount);
            hideFunction(e);
          }}
        />
      </div>
    </div>
  ));

  const receiverIDRef = useRef();
  const messageRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !(
        receiverIDRef.current.value.trim().length > 0 &&
        messageRef.current.value.trim().length > 0
      )
    ) {
      return;
    }
    const receiver = receiverIDRef.current.value;
    const message = messageRef.current.value;
    const date = new Date();

    myMessage.push({
      sender: "TBA",
      receiverID: receiver,
      userMessage: message,
      date: date,
      files: uploadedFiles,
    });
    console.log(myMessage);
    receiverIDRef.current.value = "";
    messageRef.current.value = "";
    setUploadedFiles([]);
  };

  return (
    <div onClick={props.closeAddProduct}>
      <div onClick={(e) => e.stopPropagation()}>
        <form
          id="register-form"
          className="formMaster"
          onSubmit={(event) => handleSubmit(event)}
        >
          <label htmlFor="product name">User ID: </label>
          <input
            type="text"
            name="productName"
            id="username"
            ref={receiverIDRef}
            onBlur={entryBoxValidator}
            required
          />
          <label htmlFor="detail">Message: </label>
          <div {...getRootProps()}>
            <textarea
              id="message"
              className="message"
              placeholder="Your Message... Drag and drop any files, or use the button below"
              name="detail"
              cols="20"
              rows="6"
              ref={messageRef}
              required
              onBlur={entryBoxValidator}
              onClick={(e) => {
                e.stopPropagation();
              }}
            ></textarea>
            <br />
            <input {...getInputProps()} />
            <p
              style={{
                borderRadius: "10px",
                width: "50%",
                border: "2px solid #cfdcec",
                overflow: "hidden",
              }}
            >
              Upload Files
            </p>
            {/* You could use an image to prompt users to click and upload instead of the <p></p> tags. Unfortunately from my experience
            a button just removes all the other images from user view.
              <img src="https://findicons.com/files/icons/1014/ivista/256/plus.png"></img>
            */}
          </div>
          <br />
          {images}

          <button>Post Product</button>
        </form>
      </div>
    </div>
  );
};

export default NewMessageModal;
