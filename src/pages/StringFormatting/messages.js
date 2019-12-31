/*
 * StringFormatting Messages
 *
 * This contains all the text for the StringFormatting page.
 */
import { defineMessages } from "react-intl";

export const scope = "app.pages.StringFormatting";

export default defineMessages({
	title: {
		id: `${scope}.title`,
		defaultMessage: "String Formats"
	},
	header: {
		id: `${scope}.header`,
		defaultMessage: "String Formatting"
	},
	combination: {
		id: `${scope}.combination`,
		defaultMessage: "Combining Formats"
	},
	richText: {
		id: `${scope}.richText`,
		defaultMessage: "Rich Text Formattig"
	}
});
