import React from "react";
import sunflower from "../../assets/sunflower.png";
import style from "./file_loaded.module.scss";

const FileLoaded = () => {
  return (
    true ? (
      <div className={style["file-loaded__div"]}>
        <div>
          <p className={style.h2}>Plant Information</p>
          <img src={sunflower} alt="a sunflower" title="blah blah blah" />
          <p className={style.h3}>
            Common Name: &nbsp;
            <span>Sunflower</span>
          </p>
          <p className={style.h3}>
            Scientific Name: &nbsp;
            <span>Helianthus annuus</span>
          </p>
          <p className={style.h3}>
            Probability: &nbsp;
            <span>20%</span>
          </p>
          <p className={style.h3}>Plant Details</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero earum, assumenda voluptatum deleniti, eveniet sapiente aperiam minus ad porro ab recusandae. Culpa architecto voluptatum iusto laborum voluptas itaque ea suscipit.
          </p>
          <span>For further reading, checkout <a href="/">this link</a></span>
        </div>
      </div>
    ) : (<></>)
  )
}

export default FileLoaded