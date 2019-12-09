import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import "react-material-layout/dist/react-material-layout.min.css";

import routes from "router/routes";

import Header from "components/Header";
import Theme from "theme/Provider";

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
