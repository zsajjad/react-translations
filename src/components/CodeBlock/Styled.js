import styled from "styled-components";
import { Link } from "react-router-dom";
import { elevation } from "theme/utils";

export const Container = styled.header.attrs({
	"data-layout": "column",
	"data-layout-align": "start center",
	"data-flex": 100
})`
	background: #daebf2;
	${elevation(2)};
	border-radius: 12px;
	margin: 12px;
	overflow: hidden;
`;

export const Title = styled.h2.attrs({})`
	text-align: center;
	margin-bottom: 8px;
	font-weight: 500;
	background: #1ca5b8;
	color: white;
	width: 100%;
	padding: 12px;
`;

export const Heading = styled.p.attrs({})`
	color: white;
	font-weight: 500;
	margin: 0;
	margin-top: 8px;
	display: none;
`;

export const CodeCnotainer = styled.div.attrs({})`
	width: calc(100% - 24px);
	margin: 0 12px;
	white-space: pre-wrap;
	text-align: left;
`;

export const OutputContainer = styled.div.attrs({})`
	color: white;
	font-weight: 500;
	padding: 12px;
	width: calc(100% - 24px);
	background: #1c1f21;
`;
export const ContentContainer = styled.div.attrs({
	"data-layout": "row",
	"data-layout-align": "center start"
})`
	width: 100%;
`;

export const ContentBlock = styled.div.attrs({
	"data-layout": "column",
	"data-layout-align": "start center",
	"data-flex": 50
})``;
