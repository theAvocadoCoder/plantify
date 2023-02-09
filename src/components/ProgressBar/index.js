import React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { createTheme } from "@mui/material/styles";
import styles from "../../components/ProgressBar/progress_bar.module.scss";
import { ThemeProvider } from "@emotion/react";

const index = (props) => {

    const theme = createTheme({
			palette: {
				primary: {
					main: "#00BFA5",
				},
			},
		});

    index.propTypes = {
        value: PropTypes.number.isRequired
    }

	return (
		<div className={styles.sect__container}>
			<Box className={styles.progress__container}>
				<Box className={styles.progress__line}>
					<ThemeProvider theme={theme}>
						<LinearProgress
							variant="determinate"
							{...props}
							className={styles.linear__bar}
						/>
					</ThemeProvider>
					{/* <LinearProgress
                        variant="determinate"
                        {...props}
                        style={LinearProgress}
                        className={styles.linear__bar}
					/> */}
				</Box>
				<Box className={styles.progress__percent}>
					<Typography
						variant="body2"
						className={styles.percent__number}
					>{`${Math.round(props.value)}%`}</Typography>
				</Box>
			</Box>
		</div>
	);
};

export default index;
