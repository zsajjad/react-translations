/*
 *
 * HomePage Title
 *
 */

import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

function HomeTitle(/* pageProps */) {
	return <FormattedMessage {...messages.title} />;
}

export default React.memo(HomeTitle, () => false);
