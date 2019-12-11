/**
 *
 * CodeBlock
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { FormattedMessage } from "react-intl";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";

import messages from "./messages";
import * as Styled from "./Styled";

function CodeBlock({ title, code, output }) {
	return (
		<Styled.Container>
			<Styled.Title>{title}</Styled.Title>
			<Styled.ContentContainer>
				<Styled.ContentBlock>
					<Styled.Heading>
						<FormattedMessage {...messages.codeHeading} />
					</Styled.Heading>
					<Styled.CodeCnotainer>
						<SyntaxHighlighter language="javascript" style={tomorrowNight}>
							{code}
						</SyntaxHighlighter>
					</Styled.CodeCnotainer>
				</Styled.ContentBlock>
				<Styled.ContentBlock>
					<Styled.Heading>
						<FormattedMessage {...messages.outputHeading} />
					</Styled.Heading>
					<Styled.OutputContainer>{output}</Styled.OutputContainer>
				</Styled.ContentBlock>
			</Styled.ContentContainer>
		</Styled.Container>
	);
}

CodeBlock.propTypes = {};

export default CodeBlock;
