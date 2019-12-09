/*
 *
 * RelativeFormattingPage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import { FormattedMessage, FormattedRelativeTime } from "react-intl";

import Page from "components/Page";

import messages from "./messages";
import * as Styled from "./Styled";
import CodeBlock from "components/CodeBlock";

function RelativeFormatting(/* pageProps */) {
	return (
		<React.Fragment>
			<Helmet
				title="Relative Formatting"
				meta={[
					{
						name: "description",
						content: "Description of RelativeFormatting"
					}
				]}
			/>
			<Page title={<FormattedMessage {...messages.header} />}>
				<CodeBlock
					title={<FormattedMessage {...messages.numericFormatTitle} />}
					code={`
						<FormattedRelativeTime
								value={0}
								numeric="always"
								updateIntervalInSeconds={10}
							/>
					`}
					output={
						<FormattedRelativeTime
							value={0}
							numeric="always"
							updateIntervalInSeconds={10}
						/>
					}
				/>
				<CodeBlock
					title={<FormattedMessage {...messages.updatingIntervalTitle} />}
					code={`
						<FormattedRelativeTime
								value={0}
								numeric="auto"
								updateIntervalInSeconds={10}
							/>
					`}
					output={
						<FormattedRelativeTime
							value={0}
							numeric="auto"
							updateIntervalInSeconds={10}
						/>
					}
				/>
			</Page>
		</React.Fragment>
	);
}

// RelativeFormatting.propTypes = {
//  location: PropTypes.shape({
//    pathname: PropTypes.string.isRequired,
//  })
//  history: PropTypes.shape({
//    push: PropTypes.func.isRequired,
//    goBack: PropTypes.func.isRequired,
//    replace: PropTypes.func.isRequired,
//  })
// }

export default React.memo(RelativeFormatting);
