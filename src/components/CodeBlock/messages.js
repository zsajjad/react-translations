/*
 * CodeBlock Messages
 *
 * This contains all the text for the CodeBlock component.
 */

import { defineMessages } from "react-intl";

export const scope = "app.components.CodeBlock";

export default defineMessages({
	codeHeading: {
		id: `${scope}.codeHeading`,
		defaultMessage: "Code"
	},
	outputHeading: {
		id: `${scope}.outputHeading`,
		defaultMessage: "Output"
	}
});
