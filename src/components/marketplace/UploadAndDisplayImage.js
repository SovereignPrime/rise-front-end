import React, { useState } from "react";
import { DarkButton } from "../Buttons";

const UploadAndDisplayImage = (props) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <h1>Upload and Display Image using React Hook's</h1>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <DarkButton onClick={() => setSelectedImage(null)}>Remove</DarkButton>
        </div>
      )}
      <br />

      <br />
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
          props.handleImageUpload(selectedImage);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
