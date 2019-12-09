import styled from "styled-components";
import { Link } from "react-router-dom";
import { elevation } from "theme/utils";

export const Header = styled.header`
	background: rgba(0, 0, 0, 0.2);
	${elevation(2)};
	margin-bottom: 12px;
`;

export const HeaderContent = styled.div.attrs({
	"data-layout": "row",
	"data-layout-align": "center center"
})`
	max-width: 1120px;
`;

export const HeaderLink = styled(Link).attrs({})`
	padding: 12px;
	color: white;
	cursor: pointer;
	transition: all 0.3s ease;
	text-decoration: none;

	&:hover {
		background-color: rgba(0, 0, 0, 0.3);
	}
`;
