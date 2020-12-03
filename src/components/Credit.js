import React from "react";
import styled from "styled-components";
const Credit = () => {
	return (
		<CreditContainer>
			Made by{" "}
			<Link href="https://www.wilsonle.me" target="_blank">
				Wilson
			</Link>
		</CreditContainer>
	);
};

const CreditContainer = styled.div`
	user-select: none;
	position: fixed;
	z-index: 12;
	bottom: 5px;
	right: 5px;
	color: rgb(155, 155, 155);
	font-size: 0.75rem;
`;

const Link = styled.a`
	color: rgb(155, 155, 155);
`;
export default Credit;
