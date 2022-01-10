import React from "react";
import Card from "../shared/card";
import headShot from "../../assets/picture.jpg";
import EmailLink from "../shared/emailLink.js";

const Hello = ({}) => {
	return (
		<div id="hello-card centered">
			<Card>
				<img src={headShot} className="picture" />
				<div style={{ textAlign: "left" }}>
					<h4>Hi, I'm Brendan</h4>
					<h6 className="tight-text">
						I'm procrastinating making this website
					</h6>
					<h6 className="tight-text">Please check back in a few weeks</h6>

					<p>
						Please check out my current project:{" "}
						<a
							href="https://quae.app"
							target="_blank"
							aria-label="link to quae landing page"
							style={{ textDecoration: "none" }}
						>
							Quae
						</a>
					</p>
					<p>
						Get In touch with me{" "}
						<EmailLink
							email="bprobst1029@gmail.com"
							subject="Hi! I found your website, I want to talk"
							body=""
						>
							here{" "}
						</EmailLink>
					</p>
				</div>
			</Card>
		</div>
	);
};

export default Hello;
