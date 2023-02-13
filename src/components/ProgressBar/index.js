import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import LinearProgressBar from "./component/LinearProgressBar";

const Index = ({ progress, setProgress }) => {

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 100 ? 100 : prevProgress + 10
			);
        }, 150);
        return () => {
            clearInterval(timer);
        };
	});

	return (
		<div>
			<Box sx={{ width: "100%" }}>
                <LinearProgressBar value={progress} />
			</Box>
		</div>
	);
};

export default Index;
