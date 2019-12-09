/*
 * RelativeFormatting Messages
 *
 * This contains all the text for the RelativeFormatting page.
 */
import { defineMessages } from "react-intl";

export const scope = "app.pages.RelativeFormatting";

export default defineMessages({
	title: {
		id: `${scope}.title`,
		defaultMessage: "Relative Formats"
	},
	header: {
		id: `${scope}.header`,
		defaultMessage: "Relative Formats"
	},
	updatingIntervalTitle: {
		id: `${scope}.updatingIntervalTitle`,
		defaultMessage: "Impact of Update Interval In Seconds props"
	},
	numericFormatTitle: {
		id: `${scope}.numericFormatTitle`,
		defaultMessage: "Impact of numeric style"
	}
});
