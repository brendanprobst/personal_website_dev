import React, { FC, useState } from "react";
import View from "../components/shared/view";
import Hello from "../components/landingpage/hello";
import Welcome from "../components/landingpage/welcome";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import useWindowDimensions from "../helper/getWindowDimensions";
// import VisWithHooks from "../three/cube.js";
const LandingPage = ({}) => {
	const { height, width } = useWindowDimensions();

	useScrollPosition(({ prevPos, currPos }) => {
		console.log(currPos.x);
		console.log(currPos.y);
	});
	return (
		<div className="page">
			<div className="background"></div>
			{/* <div id="three-js"></div> */}
			{/* <VisWithHooks /> */}
			{/* <View children={<Hello />} num={1} /> */}
			{/* <View children={<Welcome />} num={2} /> */}
		</div>
	);
};

export default LandingPage;
