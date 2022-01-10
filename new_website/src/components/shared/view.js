import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useWindowDimensions from "../../helper/getWindowDimensions";
import { HeightTwoTone } from "@mui/icons-material";

const View = ({ children, num }) => {
	const { height, width } = useWindowDimensions();
	const [opacity, setOpacity] = useState(0);
	const [visible, setVisible] = useState(false);
	useScrollPosition(({ prevPos, currPos }) => {
		console.log(currPos.y);
		function handleOpacity() {
			for (let i = -currPos.y; i < height * num; i++) {
				console.log("test");
				console.log(-currPos.y / (height * num));
			}
		}

		if (-currPos.y < height * (num - 1)) {
			setOpacity(0);
		}
		if (-currPos.y < height * num + 150 && -currPos.y > height * (num - 1)) {
			setOpacity(1);
		}

		if (-currPos.y > height * num - 150) {
			setOpacity(0);
		}
	});

	return (
		<div className="view">
			<div className="section" style={{ opacity: opacity }}>
				{children}
			</div>
		</div>
	);
};
export default View;
