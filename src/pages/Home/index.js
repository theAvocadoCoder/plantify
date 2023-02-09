import React from "react";
import NavBar from "../../components/NavBar";
import UploadBox from "./components/UploadBox";
import FileLoaded from "./components/FileLoaded";
import LoadingFile from "./components/LoadingFile";
import ProgressBar from "../../components/ProgressBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <UploadBox />
      <FileLoaded />
      <LoadingFile />
      <ProgressBar />
    </>
  )
}

export default Home