/*
 *
 * RelativeFormattingPage Title
 *
 */

import React from "react";
import { FormattedMessage } from "react-intl";
import messages from "./messages";

function RelativeFormattingTitle(/* pageProps */) {
	return <FormattedMessage {...messages.title} />;
}

export default React.memo(RelativeFormattingTitle, () => false);
