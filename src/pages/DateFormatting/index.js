/*
 *
 * DateFormattingPage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import { FormattedMessage, FormattedDate } from "react-intl";

import Page from "components/Page";
import CodeBlock from "components/CodeBlock";

import messages from "./messages";
import * as Styled from "./Styled";

function DateFormatting(/* pageProps */) {
	return (
		<React.Fragment>
			<Helmet
				title="Date Formatting"
				meta={[
					{
						name: "description",
						content: "Description of DateFormatting"
					}
				]}
			/>
			<Page title={<FormattedMessage {...messages.header} />}>
				<Styled.Row>
					<CodeBlock
						title={<FormattedMessage {...messages.yearFormats} />}
						code={`<FormattedDate \n value={new Date()} \n year="numeric|2-digit" \n month="long" \n day="2-digit" \n/>`}
						output={
							<>
								<FormattedDate
									value={new Date()}
									month="numeric"
									year="numeric"
									day="2-digit"
								/>
								<br />
								<FormattedDate
									value={new Date()}
									month="numeric"
									year="2-digit"
									day="2-digit"
								/>
							</>
						}
					/>
					<CodeBlock
						title={<FormattedMessage {...messages.monthFormats} />}
						code={`<FormattedDate \n value={new Date(1459832991883)} \n year="numeric" \n month="long|short|narrow|numeric|2-digit" \n day="2-digit" \n/>`}
						output={
							<>
								<FormattedDate
									value={new Date()}
									year="numeric"
									month="long"
									day="2-digit"
									era="short"
									dateStyle="short"
								/>
								<br />
								<FormattedDate
									value={new Date()}
									year="numeric"
									month="short"
									day="2-digit"
								/>
								<br />
								<FormattedDate
									value={new Date()}
									year="numeric"
									month="narrow"
									day="2-digit"
								/>
								<br />
								<FormattedDate
									value={new Date()}
									year="numeric"
									month="numeric"
									day="2-digit"
								/>
								<br />
								<FormattedDate
									value={new Date(1459832991883)}
									year="numeric"
									month="2-digit"
									day="2-digit"
								/>
							</>
						}
					/>
					<CodeBlock
						title={<FormattedMessage {...messages.dateFormats} />}
						code={`<FormattedDate \n value={new Date()} \n year="numeric" \n month="long" \n day="numeric|2-digit" \n/>`}
						output={
							<>
								<FormattedDate
									value={new Date()}
									year="numeric"
									day="numeric"
									month="long"
								/>
								<br />
								<FormattedDate
									value={new Date(1459832991883)}
									year="numeric"
									day="2-digit"
									month="long"
								/>
							</>
						}
					/>
				</Styled.Row>
			</Page>
		</React.Fragment>
	);
}

// DateFormatting.propTypes = {
//  location: PropTypes.shape({
//    pathname: PropTypes.string.isRequired,
//  })
//  history: PropTypes.shape({
//    push: PropTypes.func.isRequired,
//    goBack: PropTypes.func.isRequired,
//    replace: PropTypes.func.isRequired,
//  })
// }

export default React.memo(DateFormatting);
