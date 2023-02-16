import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeFile } from "../../slices/uploadFileSlice";
import CloseIcon from "@mui/icons-material/Close";
import ProgressBar from "../../../../components/ProgressBar"
import styles from "../LoadingFile/loading_file.module.scss";
import plantImg from "../../../../assets/plant-icon.png"
import axios from "axios";

const LoadingFile = () => {
	const [progress, setProgress] = useState(10);
	const [isIdentified, setIsIdentified] = useState(false);
	const { file, name, size } = useSelector((state) => state.fileReducer);
	const dispatch = useDispatch();

	function handleCloseFile() {
		dispatch(closeFile());
		setProgress(10);
		if (isIdentified) setIsIdentified(false);
	}

	async function makePostToPlantChecker() {
		await axios
			.post("https://api.plant.id/v2/identify", {
				images: [file],
				plant_details: [
					"common_names",
					"wiki_description",
					"name_authority",
					"url",
					"watering",
					"wiki_image"
				]
			}, {
				headers: {
					"Api-Key": "QVEdLt0ooP7VIzmPSZo3gXz8Y32IsBLyn2z1fSpjxIl9m2sRGZ"
				}
			})
			.then((response) => {
				setIsIdentified(true);
				console.log("this is the response data: ", response.data.suggestion?.length > 1 ? response.data.suggestion[0] : response.data);
				console.log("this is the request: ", response.request);
			})
			.catch((error) => {
				if (error.response) {
					console.log("error response data: ", error.response.data);
					console.log("error response status: ", error.response.status);
					console.log("error response headers: ", error.response.headers);
				} else if (error.request) {
					console.log("error request: ", error.request);
				} else {
					console.log('error message: ', error.message);
				}
				console.log("error config: ", error.config);
			})

	}

	function handleIdentifyPlant() {
		if (file) {
			makePostToPlantChecker();
		}
	}

  return (
		<div>
			<div className={styles.upload__progress}>
				<section className={styles.sect__container}>
					{
						file ? (
							<div className={styles.top__layout}>
								<div className={styles.info__flex}>
									<div className={styles.icon__content}>
										<img src={plantImg} alt="plant icon" />
									</div>
									<div className={styles.text__content}>
										<p className={styles.plant__name}>{name}</p>
										<p className={styles.upload__size}>{size}</p>
									</div>
								</div>
								<div className={styles.progress__content}>
									<ProgressBar progress={progress} setProgress={setProgress} />
								</div>
							</div>
						) : (<></>)
					}
					{
						progress >= 100 ? (
							<div className={styles.middle__layout}>
								<div className={styles.info__flex}>
									<div className={styles.icon__content}>
										<img src={plantImg} alt="plant icon" />
									</div>
									<div className={styles.text__content}>
										<p className={styles.plant__name}>{name}</p>
										<p className={styles.upload__size}>{size}</p>
									</div>
								</div>
								<div>
									<CloseIcon className={styles.close__icon} onClick={handleCloseFile} />
								</div>
							</div>
						) : (<></>)
					}
					<div className={`${styles.bottom__layout} ${isIdentified | progress < 100 ? styles.hidden : ""}`}>
						<button className={styles.btn__cancel} onClick={handleCloseFile}>Cancel</button>
						<button className={styles.btn__proceed} onClick={handleIdentifyPlant}>Identify</button>
					</div>
				</section>
			</div>
		</div>
	);
}

export default LoadingFile