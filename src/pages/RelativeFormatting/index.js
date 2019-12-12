/*
 *
 * RelativeFormattingPage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import {
	FormattedMessage,
	FormattedRelativeTime,
	FormattedTime
} from "react-intl";

import Page from "components/Page";
import CodeBlock from "components/CodeBlock";

import messages from "./messages";
// import * as Styled from "./Styled";

function RelativeFormatting(/* pageProps */) {
	return (
		<React.Fragment>
			<Helmet
				title="Time Formatting"
				meta={[
					{
						name: "description",
						content: "Description of Time Formatting"
					}
				]}
			/>
			<Page title={<FormattedMessage {...messages.header} />}>
				<CodeBlock
					title={<FormattedMessage {...messages.timeFormats} />}
					code={`<FormattedTime \n value={new Date()} \n hour="numeric|2-digit" \n minute="numeric|2-digit" \n era="short" \n timeZoneName="short" \n/>`}
					output={
						<>
							<FormattedTime
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
							/>
						</>
					}
				/>
				<CodeBlock
					title={<FormattedMessage {...messages.numericFormatTitle} />}
					code={`<FormattedRelativeTime \n value={0} \n numeric="always" \n updateIntervalInSeconds={10} \n/>`}
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
					code={`<FormattedRelativeTime \n value={0} \n numeric="auto" \n updateIntervalInSeconds={10} \n />`}
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
