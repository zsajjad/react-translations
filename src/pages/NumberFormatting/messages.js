/*
 * NumberFormatting Messages
 *
 * This contains all the text for the NumberFormatting page.
 */
import { defineMessages } from "react-intl";

export const scope = "app.pages.NumberFormatting";

export default defineMessages({
	title: {
		id: `${scope}.title`,
		defaultMessage: "Number Formats"
	},
	header: {
		id: `${scope}.header`,
		defaultMessage: "Number Formatting"
	},
	pluralTitle: {
		id: `${scope}.pluralTitle`,
		defaultMessage: "Displaying Counts and Plurals"
	},
	unitTitle: {
		id: `${scope}.unitTitle`,
		defaultMessage: "Displaying Units"
	}
});
