/**
 *
 * CodeBlock
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import * as Styled from "./Styled";

function CodeBlock({ title, code, output }) {
	return (
		<Styled.Container>
			<Styled.Title>{title}</Styled.Title>
			<Styled.Heading>
				<FormattedMessage {...messages.codeHeading} />
			</Styled.Heading>
			<Styled.CodeCnotainer>{code}</Styled.CodeCnotainer>
			<Styled.Heading>
				<FormattedMessage {...messages.outputHeading} />
			</Styled.Heading>
			<Styled.OutputContainer>{output}</Styled.OutputContainer>
		</Styled.Container>
	);
}

CodeBlock.propTypes = {};

export default CodeBlock;
