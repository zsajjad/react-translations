import React from "react";
import { GoogleFont } from "react-typography";
import { ThemeProvider } from "styled-components";
import Helmet from "react-helmet";

// import palette from 'theme/Colors';
// import dimensions from 'theme/Dimensions';
import typography from "theme/Typography";
import GlobalStyle from "theme/GlobalStyle";

function Theme(props) {
	return (
		<>
			<Helmet>
				<style data-typography>{typography.toString()}</style>
			</Helmet>
			<GoogleFont typography={typography} />
			<GlobalStyle />
			<ThemeProvider theme={{}} {...props} key="tp" />
		</>
	);
}

export default Theme;
