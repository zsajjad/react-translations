import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { UnifiedNumberFormat } from "@formatjs/intl-unified-numberformat";

import "react-material-layout/dist/react-material-layout.min.css";

import routes from "router/routes";

import Header from "components/Header";
import Theme from "theme/Provider";

/**
 * Adding polyfills for older browsers
 */

/** Unit display polyfill
 * https://github.com/formatjs/formatjs/tree/master/packages/intl-unified-numberformat
 */
UnifiedNumberFormat.__addLocaleData(
	require("@formatjs/intl-unified-numberformat/dist/locale-data/en.json") // locale-data for en
);

/**
 * Pluralization Polyfill
 */
if (!Intl.PluralRules) {
	require("@formatjs/intl-pluralrules/polyfill");
	require("@formatjs/intl-pluralrules/dist/locale-data/en"); // Add locale data for en
}

/**
 * Relative time formatting Polyfill
 */
if (!Intl.RelativeTimeFormat) {
	require("@formatjs/intl-relativetimeformat/polyfill");
	require("@formatjs/intl-relativetimeformat/dist/locale-data/en"); // Add locale data for de
}

function App() {
	return (
		<IntlProvider locale="en" textComponent={React.Fragment}>
			<Theme>
				<Router>
					<Header />
					<Switch>
						{routes.map(route => {
							const Component = route.component;
							return (
								<Route exact key={route.id} path={route.path}>
									<Component />
								</Route>
							);
						})}
					</Switch>
				</Router>
			</Theme>
		</IntlProvider>
	);
}

export default App;
