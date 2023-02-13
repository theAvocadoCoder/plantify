import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgressBar from "./component/LinearProgressBar";

const Index = () => {
	const [progress, setProgress] = useState(10);

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) =>
				prevProgress >= 100 ? 10 : prevProgress + 10
			);
        }, 800);
        return () => {
            clearInterval(timer);
        };
	}, []);

	return (
		<div>
			<Box sx={{ width: "100%" }}>
                <LinearProgressBar value={progress} />
			</Box>
		</div>
	);
};

export default Index;
