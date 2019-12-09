/*
 *
 * HomePage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import * as Styled from "./Styled";

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
			<FormattedMessage {...messages.header} />
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
