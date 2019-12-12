/*
 *
 * StringFormattingPage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import { FormattedMessage } from "react-intl";

import Page from "components/Page";
import CodeBlock from "components/CodeBlock";

import messages from "./messages";
// import * as Styled from "./Styled";

function StringFormatting(/* pageProps */) {
	return (
		<React.Fragment>
			<Helmet
				title="StringFormatting"
				meta={[
					{
						name: "description",
						content: "Description of StringFormatting"
					}
				]}
			/>
			<Page title={<FormattedMessage {...messages.header} />}>
				<CodeBlock
					title={<FormattedMessage {...messages.timeFormats} />}
					code={`<FormattedTime \n value={new Date()} \n hour="numeric|2-digit" \n minute="numeric|2-digit" \n era="short" \n timeZoneName="short" \n/>`}
					output={
						<>
							{/* <FormattedTime
								value={new Date()}
								hour="numeric"
								minute="numeric"
								second="numeric"
								era="short"
								timeZoneName="short"
							/>
							<br />
							<FormattedTime
								value={new Date()}
								hour="2-digit"
								minute="2-digit"
							/> */}
						</>
					}
				/>
			</Page>
		</React.Fragment>
	);
}

// StringFormatting.propTypes = {
//  location: PropTypes.shape({
//    pathname: PropTypes.string.isRequired,
//  })
//  history: PropTypes.shape({
//    push: PropTypes.func.isRequired,
//    goBack: PropTypes.func.isRequired,
//    replace: PropTypes.func.isRequired,
//  })
// }

export default React.memo(StringFormatting);
