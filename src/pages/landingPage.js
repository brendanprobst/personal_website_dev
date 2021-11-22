import React from "react";
import { Link } from "react-router-dom";
import headShot from "@/assets/picture.jpg";
import EmailLink from "@/components/shared/emailLink";
export default function LandingPage() {
	return (
		<header className="App-header">
			<img src={headShot} className="picture" />
			<Link to={"/about_me"} id="about_me_link">
				<h4>About Me</h4>
			</Link>
			<h2>Hi, Website Coming Soon</h2>
			<h5>
				If you need to contact me, please email{" "}
				<EmailLink
					email="bprobst1029@gmail.com"
					subject="Hi! I found your website"
					body=""
				>
					bprobst1029@gmail.com
				</EmailLink>{" "}
				or{" "}
				<EmailLink
					email="bprobst@quae.app"
					subject="Hi! I found your website"
					body=""
				>
					bprobst@quae.app
				</EmailLink>{" "}
				or{" "}
				<EmailLink
					email="bprobst@stevens.edu"
					subject="Hi! I found your website"
					body=""
				>
					bprobst@stevens.edu
				</EmailLink>
			</h5>
		</header>
	);
}
