import React from "react";
import NavBar from "../../components/NavBar";
import UploadBox from "./components/UploadBox";
import FileLoaded from "./components/FileLoaded";
import LoadingFile from "./components/LoadingFile";

const Home = () => {
  return (
    <div>
      <NavBar />
      <UploadBox />
      <LoadingFile />
      <FileLoaded />
    </div>
  )
}

export default Home