/*
 * DateFormatting Messages
 *
 * This contains all the text for the DateFormatting page.
 */
import { defineMessages } from "react-intl";

export const scope = "app.pages.DateFormatting";

export default defineMessages({
	title: {
		id: `${scope}.title`,
		defaultMessage: "Date Formatting"
	},
	header: {
		id: `${scope}.header`,
		defaultMessage: "Date Formatting"
	},
	monthFormats: {
		id: `${scope}.monthFormats`,
		defaultMessage: "Month Formats"
	},
	yearFormats: {
		id: `${scope}.yearFormats`,
		defaultMessage: "Year Formats"
	},
	dateFormats: {
		id: `${scope}.dateFormats`,
		defaultMessage: "Day Formats"
	}
});
