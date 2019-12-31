/*
 * Home Messages
 *
 * This contains all the text for the Home page.
 */
import { defineMessages } from "react-intl";

export const scope = "app.pages.Home";

export default defineMessages({
	title: {
		id: `${scope}.title`,
		defaultMessage: "Home"
	},
	header: {
		id: `${scope}.header`,
		defaultMessage: "React Intl Component API"
	}
});
