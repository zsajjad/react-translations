import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContentContainer = styled.div.attrs({
	"data-layout": "row",
	"data-layout-align": "center center",
	"data-layout-wrap": true
})`
	color: white;
`;

export const Button = styled(Link)`
	padding: 18px;
	background: #012c40;
	font-weight: 500;
	font-size: 15px;
	margin: 12px;
	border-radius: 12px;
	transition: all 0.4s ease;

	&:hover {
		transform: scale(1.05);
	}
`;
