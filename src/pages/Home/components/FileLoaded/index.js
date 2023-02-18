import React from "react";
import { useSelector } from "react-redux";
import style from "./file_loaded.module.scss";

const FileLoaded = () => {
  const { plantDetails } = useSelector((state) => state.plantReducer);

  function capitalize(word) {
    let wordArray = word.split("");
    wordArray.splice(0, 1, wordArray[0].toUpperCase());
    return wordArray.join("");
  }
  
  return (
    <div className={style["file-loaded__div"]}>
      {plantDetails ? (
        <div>
          <p className={style.h2}>Plant Information</p>
          <div>
            <img src={plantDetails?.plant_details?.wiki_image.value} alt={`a ${plantDetails?.plant_details?.common_names[0]}`} />
            <span>
              Citation: {plantDetails?.plant_details?.wiki_image.citation}
              <br />
              License: <a href={plantDetails?.plant_details?.wiki_image.license_url}>
                { plantDetails?.plant_details?.wiki_image.license_name }
              </a>
            </span>
          </div>
          <p className={style.h3}>
            Common Name: &nbsp;
            <span>{capitalize(plantDetails?.plant_details?.common_names[0])}</span>
          </p>
          <p className={style.h3}>
            Scientific Name: &nbsp;
            <span>{plantDetails?.plant_name}</span>
          </p>
          <p className={style.h3}>
            Probability: &nbsp;
            <span>{Math.round(plantDetails?.probability * 100)}%</span>
          </p>
          <p className={style.h3}>Plant Details</p>
          <p>
            {plantDetails?.plant_details?.wiki_description.value}
            <br />
            <span>
              Cited from: <a href={plantDetails?.plant_details?.wiki_description.citation}>
                Wikipedia
              </a>
              <br />
              License: <a href={plantDetails?.plant_details?.wiki_description.license_url}>
                { plantDetails?.plant_details?.wiki_description.license_name }
              </a>
            </span>            
          </p>
          <span>For further reading, checkout <a href={plantDetails?.plant_details?.url}>this link</a></span>
        </div>) : (<></>)}
    </div>
  )
}

export default FileLoaded