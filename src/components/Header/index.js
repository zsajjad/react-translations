/**
 *
 * Header
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Link } from "react-router-dom";
import routes from "router/routes";

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import * as Styled from "./Styled";

function Header() {
	return (
		<Styled.Header>
			<Styled.HeaderContent>
				{routes.map(route => {
					const Title = route.title;
					return (
						<Styled.HeaderLink key={route.id} to={route.path}>
							<Title />
						</Styled.HeaderLink>
					);
				})}
			</Styled.HeaderContent>
		</Styled.Header>
	);
}

Header.propTypes = {};

export default Header;
