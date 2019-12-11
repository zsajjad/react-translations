import styled from "styled-components";
import { Link } from "react-router-dom";
import { elevation } from "theme/utils";

export const Container = styled.header.attrs({
	"data-layout": "column",
	"data-layout-align": "start center"
})`
	background: rgba(0, 0, 0, 0.75);
	border: 1px solid black;
	${elevation(1)};
	margin: 12px;
	padding: 12px;
	border-radius: 12px;
`;

export const Title = styled.h2.attrs({})`
	text-align: center;
	margin-bottom: 8px;
	font-weight: 500;
`;

export const Heading = styled.p.attrs({})`
	color: white;
	font-weight: 500;
	margin: 0;
	margin-top: 8px;
`;

export const CodeCnotainer = styled.code.attrs({})`
	color: white;
	background: rgba(0, 0, 0, 0.85);
	border: 1px solid black;
	padding: 12px;
	width: calc(100% - 16px);
	margin: 0 8px;
	white-space: pre-wrap;
	text-align: left;
`;

export const OutputContainer = styled.div.attrs({})`
	color: white;
	font-weight: 500;
	padding: 12px;
	width: calc(100% - 16px);
	background: rgba(0, 0, 0, 0.85);
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
