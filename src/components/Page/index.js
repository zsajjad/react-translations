/**
 *
 * Page
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import styled from "styled-components";

const Container = styled.div.attrs({
	"data-layout": "column",
	"data-layout-align": "center center"
})`
	width: 100%;
	text-align: center;
`;

const ContentContainer = styled.div`
	max-width: 1120px;
	width: 100%;
`;

const Title = styled.h1`
	margin: 18px 0;
	color: white;
`;

function Page({ children, title }) {
	return (
		<Container>
			<ContentContainer>
				<Title>{title}</Title>
				{children}
			</ContentContainer>
		</Container>
	);
}

Page.propTypes = {};

export default Page;
