import React from "react";
import style from "./upload_box.module.scss";
import uploadIcon from "../../assets/upload-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import { setFile } from "../uploadFileSlice";

const UploadBox = () => {
  const fileState = useSelector((state) => (state.file));
  const dispatch = useDispatch();



  function handleDragOver (event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    handleOnSelectFile({ target: event.dataTransfer });
  }

  function handleOnSelectFile(event) {
    const { files } = event.target;
    const localImageURL = window.URL.createObjectURL(files[0]);
    dispatch(setFile(localImageURL));
  }

  return (
    <div className={style["upload-box"]}>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <img src={uploadIcon} alt="" />
        <input type="file" id="plant-image" hidden name="plant-image" onChange={handleOnSelectFile} />
        <p>
          <button disabled={fileState.file ? false : true}><label htmlFor="plant-image">Choose</label></button>
           &nbsp;a file or drag and drop to upload
        </p>
        <p>Upload JPG, PNG or PDF File, max 10MB</p>
        <button disabled={fileState.file ? false : true}><label htmlFor="plant-image">Choose Files</label></button>
      </div>
    </div>
  )
}

export default UploadBox