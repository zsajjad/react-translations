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
					title={<FormattedMessage {...messages.combination} />}
					code={`<FormattedMessage \n id="combination" \n defaultMessage="Hello you have {count, number} \n {count, plural, one {Message} other {Messages}}" \n description="Combination for formats" \n values={{ count: 1000 }} \n />`}
					output={
						<FormattedMessage
							id="combination"
							defaultMessage="Hello you have {count, number} {count, plural, one {Message} other {Messages}}"
							description="Combination for formats"
							values={{
								count: 1000
							}}
							tagName="p"
						/>
					}
				/>
				<CodeBlock
					title={<FormattedMessage {...messages.combination} />}
					code={`<FormattedMessage \n id="richFormatting" \n  defaultMessage="To buy a shoe, <a>visit our website</a> and <cta>buy a shoe</cta> {icon}" \n  values={{ \n     a: (...chunks) => ( \n\t<a\n\t class="external_link"\n\t target="_blank"\n\t rel="noopener noreferrer"\n\t href="https://www.shoe.com/"\n\t>{chunks}</a>), \n  	cta: (...chunks) =>\n\t  <strong class="important">{chunks}</strong>,\n\ticon: ( \n\t  <svg viewBox="0 0 24 24"\n\t  width="24"\n\t    height="24"\n\t    stroke="currentColor"\n\t    stroke-width="2"\n\t    fill="none"\n\t    stroke-linecap="round"\n\t    stroke-linejoin="round"\n\t    class="css-i6dzq1">\n\t    <circle cx="9" cy="21" r="1"></circle>\n\t    <circle cx="20" cy="21" r="1"></circle>\n\t    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>\n\t  </svg>) \n    }} \n/>`}
					output={
						<FormattedMessage
							id="richFormatting"
							defaultMessage="To buy a shoe, <a>visit our website</a> and <cta>buy a shoe</cta> {icon}"
							values={{
								a: (...chunks) => (
									<a
										class="external_link"
										target="_blank"
										rel="noopener noreferrer"
										href="https://www.shoe.com/"
									>
										{chunks}
									</a>
								),
								cta: (...chunks) => <strong class="important">{chunks}</strong>,
								icon: (
									<svg
										viewBox="0 0 24 24"
										width="24"
										height="24"
										stroke="currentColor"
										stroke-width="2"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
										class="css-i6dzq1"
									>
										<circle cx="9" cy="21" r="1"></circle>
										<circle cx="20" cy="21" r="1"></circle>
										<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
									</svg>
								)
							}}
						/>
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
