/*
 *
 * HomePage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import Helmet from "react-helmet";

import { FormattedMessage } from "react-intl";

import Page from "components/Page";

import StringTitle from "pages/StringFormatting/Title";
import NumberTitle from "pages/NumberFormatting/Title";
import DateTitle from "pages/DateFormatting/Title";
import TimeTitle from "pages/RelativeFormatting/Title";

import * as Styled from "./Styled";
import messages from "./messages";

function Home(/* pageProps */) {
	return (
		<React.Fragment>
			<Helmet
				title="Home"
				meta={[
					{
						name: "description",
						content: "Description of Home"
					}
				]}
			/>
			<Page title={<FormattedMessage {...messages.header} />}>
				<Styled.ContentContainer>
					<Styled.Button to="/string">
						<StringTitle />
					</Styled.Button>
					<Styled.Button to="/numbers">
						<NumberTitle />
					</Styled.Button>
					<Styled.Button to="/time">
						<TimeTitle />
					</Styled.Button>
					<Styled.Button to="/date">
						<DateTitle />
					</Styled.Button>
				</Styled.ContentContainer>
			</Page>
		</React.Fragment>
	);
}

// Home.propTypes = {
//  location: PropTypes.shape({
//    pathname: PropTypes.string.isRequired,
//  })
//  history: PropTypes.shape({
//    push: PropTypes.func.isRequired,
//    goBack: PropTypes.func.isRequired,
//    replace: PropTypes.func.isRequired,
//  })
// }

export default React.memo(Home);
