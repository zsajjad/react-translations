/* eslint-disable react/style-prop-object */
/*
 *
 * NumberFormattingPage
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
import Helmet from "react-helmet";
import { FormattedMessage, FormattedPlural, FormattedNumber } from "react-intl";

import Page from "components/Page";
import CodeBlock from "components/CodeBlock";
import Note from "components/Note";
import messages from "./messages";
// import * as Styled from "./Styled";

function NumberFormatting(/* pageProps */) {
	const unit = "kilogram";
	return (
		<React.Fragment>
			<Helmet
				title="Number Formatting"
				meta={[
					{
						name: "description",
						content: "Number Formatting"
					}
				]}
			/>
			<Page title={<FormattedMessage {...messages.header} />}>
				<CodeBlock
					title={<FormattedMessage {...messages.pluralTitle} />}
					code={`<FormattedPlural \n value={10} \n one="message" \n other="messages" \n/>`}
					output={
						<>
							<FormattedNumber value={10} />
							<FormattedPlural value={10} one=" message" other=" messages" />
							<br />
							<FormattedNumber value={1} />
							<FormattedPlural value={1} one=" message" other=" messages" />
							<FormattedPlural
								value={10}
								zero="All Caught up"
								one="Just single message"
								two="Two message unseen"
								few="A few message awaiting you"
								many="A lot of things to catch up"
								other="messages"
							/>
						</>
					}
				/>
				<CodeBlock
					title={<FormattedMessage {...messages.unitTitle} />}
					code={`<FormattedNumber \n value={1000} \n style="unit" \n unitDisplay="long|short|narrow" \n unit="kilogram" \n/>`}
					output={
						<>
							<FormattedNumber
								value={1000}
								style="unit"
								unit={unit}
								unitDisplay="long"
							/>
							<br />
							<FormattedNumber
								value={1000}
								unit={unit}
								unitDisplay="short"
								style="unit"
							/>
							<br />
							<FormattedNumber
								value={1000}
								unit={unit}
								unitDisplay="narrow"
								style="unit"
							/>
						</>
					}
				/>
				<Note>
					Available Units
					<br />
					<br />
					<code>
						'acre' | 'bit' | 'byte' | 'celsius' | 'centimeter' | 'day' |
						'degree' | 'fahrenheit' | 'fluid-ounce' | 'foot' | 'gallon' |
						'gigabit' | 'gigabyte' | 'gram' | 'hectare' | 'hour' | 'inch' |
						'kilobit' | 'kilobyte' | 'kilogram' | 'kilometer' | 'liter' |
						'megabit' | 'megabyte' | 'meter' | 'mile' | 'mile-scandinavian' |
						'millimeter' | 'milliliter' | 'millisecond' | 'minute' | 'month' |
						'ounce' | 'percent' | 'petabyte' | 'pound' | 'second' | 'stone' |
						'terabit' | 'terabyte' | 'week' | 'yard' | 'year';
					</code>
				</Note>
			</Page>
		</React.Fragment>
	);
}

// NumberFormatting.propTypes = {
//  location: PropTypes.shape({
//    pathname: PropTypes.string.isRequired,
//  })
//  history: PropTypes.shape({
//    push: PropTypes.func.isRequired,
//    goBack: PropTypes.func.isRequired,
//    replace: PropTypes.func.isRequired,
//  })
// }

export default React.memo(NumberFormatting);
