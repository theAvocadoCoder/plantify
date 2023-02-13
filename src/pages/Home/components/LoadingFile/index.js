import React from "react"
import CloseIcon from "@mui/icons-material/Close";
import ProgressBar from "../../../../components/ProgressBar"
import styles from "../LoadingFile/loading_file.module.scss";
import plantImg from "../../../../assets/plant-icon.png"

const LoadingFile = () => {
  return (
		<div>
			<div className={styles.upload__progress}>
				<section className={styles.sect__container}>
					<div className={styles.top__layout}>
						<div className={styles.info__flex}>
							<div className={styles.icon__content}>
								<img src={plantImg} alt="plant icon" />
							</div>
							<div className={styles.text__content}>
								<p className={styles.plant__name}>Sunflower Image.png</p>
								<p className={styles.upload__size}>250KB</p>
							</div>
						</div>
						<div className={styles.progress__content}>
							<ProgressBar />
						</div>
					</div>
					<div className={styles.middle__layout}>
						<div className={styles.info__flex}>
							<div className={styles.icon__content}>
								<img src={plantImg} alt="plant icon" />
							</div>
							<div className={styles.text__content}>
								<p className={styles.plant__name}>Sunflower Image.png</p>
								<p className={styles.upload__size}>250KB</p>
							</div>
						</div>
						<div>
							<CloseIcon className={styles.close__icon} />
						</div>
					</div>
					<div className={styles.bottom__layout}>
						<button className={styles.btn__cancel}>Cancel</button>
						<button className={styles.btn__proceed}>Identify</button>
					</div>
				</section>
			</div>
		</div>
	);
}

export default LoadingFile