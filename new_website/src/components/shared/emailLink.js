import React from "react";

const EmailLink = ({ email, subject, body, children }) => {
	return (
		<a
			href={`mailto:${email}?subject=${
				encodeURIComponent(subject) || ""
			}&body=${encodeURIComponent(body) || ""}`}
			style={{ textDecoration: "none" }}
		>
			{children}
		</a>
	);
};
export default EmailLink;
