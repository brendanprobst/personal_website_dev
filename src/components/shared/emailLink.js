import React from "react";
export default function EmailLink({ email, subject, body, children }) {
	return (
		<a
			href={`mailto:${email}?subject=${
				encodeURIComponent(subject) || ""
			}&body=${encodeURIComponent(body) || ""}`}
		>
			{children}
		</a>
	);
}
