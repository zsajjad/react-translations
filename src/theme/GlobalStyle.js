import { createGlobalStyle } from "styled-components";
// import Colors from "theme/Colors";

// function getFontFace() {
//   const str = [];
//   if (configs.typography && configs.typography.customFonts) {
//     configs.typography.customFonts.map((font) =>
//       font.variants.map((variant) =>
//         str.push(`
//       @font-face {
//       font-family: ${font.name};
//       font-style: ${variant.style || 'normal'} ;
//       font-weight: ${variant.weight};
//       src: local(${font.name}), url(${variant.url}) format('${variant.format ||
//           'woff2'}');
//       }
//     `),
//       ),
//     );
//   }
//   return str.join('');
// }

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
    scroll-behavior: smooth;
    background: #003143;
    color: white;
  }
  
  #root {
    color: white;
  }

  a {
    text-decoration: none;
    color: inherit !important;
    cursor: pointer;
    text-decoration: none !important;
  }

  img {
    margin-bottom: 0 !important;
  }

  [type=reset], [type=submit], button, html [type=button] {
    -webkit-appearance: none;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
`;

export default GlobalStyle;
