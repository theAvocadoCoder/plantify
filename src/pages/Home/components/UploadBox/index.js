import React, { useState } from "react";
import style from "./upload_box.module.scss";
import uploadIcon from "../../assets/upload-icon.svg";

const UploadBox = () => {
  const [file, setFile] = useState(null);

  function handleDragOver (event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    handleOnSelectFile(Array.from(event.dataTransfer.files)[0]);
  }

  function handleOnSelectFile(file) {
    setFile(file);
  }

  return (
    <div className={style["upload-box"]}>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <img src={uploadIcon} alt="" />
        <input type="file" id="plant-image" hidden name="plant-image" onChange={(event) => { handleOnSelectFile(Array.from(event.target.files)[0]) }} />
        <p>
          <button disabled={file?false:true}><label htmlFor="plant-image">Choose</label></button>
           &nbsp;a file or drag and drop to upload
        </p>
        <p>Upload JPG, PNG or PDF File, max 10MB</p>
        <button disabled={file?false:true}><label htmlFor="plant-image">Choose Files</label></button>
      </div>
    </div>
  )
}

export default UploadBox