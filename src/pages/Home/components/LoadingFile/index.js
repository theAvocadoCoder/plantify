import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeFile } from "../../slices/uploadFileSlice";
import CloseIcon from "@mui/icons-material/Close";
import ProgressBar from "../../../../components/ProgressBar"
import styles from "../LoadingFile/loading_file.module.scss";
import plantImg from "../../../../assets/plant-icon.png"

const LoadingFile = () => {
	const [progress, setProgress] = useState(10);
	const { file, name, size } = useSelector((state) => state.fileReducer);
	const dispatch = useDispatch();

	function handleCloseFile() {
		dispatch(closeFile());
		setProgress(10);
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
					<div className={styles.bottom__layout}>
						<button className={styles.btn__cancel} onClick={handleCloseFile}>Cancel</button>
						<button className={styles.btn__proceed}>Identify</button>
					</div>
				</section>
			</div>
		</div>
	);
}

export default LoadingFile