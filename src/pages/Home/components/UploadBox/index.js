import React from "react";
import style from "./upload_box.module.scss";
import uploadIcon from "../../assets/upload-icon.svg";
import { useDispatch } from "react-redux";
import { setFile, setName, setSize } from "../../slices/uploadFileSlice";

const UploadBox = () => {
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
    const [file] = files;
    let reader = new FileReader();
    reader.onloadend = function() {
      dispatch(setFile(reader.result));
    }
    reader.readAsDataURL(file);
    const formatSize = (numInBytes) => {
      if (numInBytes/1024 <= 1024) {
        return `${Math.floor(numInBytes/1024)}KB`;
      } else {
        return `${Math.floor(numInBytes/1024/1024)}MB`
      }
    }
    dispatch(setSize(formatSize(file.size)));
    dispatch(setName(file.name));
  }

  return (
    <div className={style["upload-box"]} onDragOver={handleDragOver} onDrop={handleDragOver}>
      <div className={style["mobile-text-div"]}>
        <h1>Plant Identifier</h1>
        <p>Identify your plants instantly using Machine Learning</p>
      </div>
      <div onDragOver={handleDragOver} onDrop={handleDrop}>
        <img src={uploadIcon} alt="" />
        <input type="file" id="plant-image" hidden name="plant-image" onChange={handleOnSelectFile} />
        <p>
          <button><label htmlFor="plant-image">Choose</label></button>
           &nbsp;a file or drag and drop to upload
        </p>
        <p>Upload JPG, PNG or PDF File, max 10MB</p>
        <button><label htmlFor="plant-image">Choose Files</label></button>
      </div>
    </div>
  )
}

export default UploadBox