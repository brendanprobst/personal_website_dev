import React from "react";
import "../../styles/components/_header.scss";
import Logo from "../../assets/logo.png";
import MoreIcon from "@mui/icons-material/More";
export default function Header() {
	return (
		<div className="header">
			<div className="container">
				<img src={Logo} id="logo" />

				<div id="title">
					<h2>Welcome</h2>
				</div>
				<div id="options">
					<button>
						<MoreIcon />
					</button>
				</div>
			</div>
		</div>
	);
}
