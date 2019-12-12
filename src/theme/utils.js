export function elevation(e) {
	return `box-shadow: 0 ${e * 5}px ${e * 10}px -${e * 5}px rgba(0, 0, 0, 0.5)`;
}

export function backgroundImage(e) {
	return `
    background-image: url('${e}');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat
  `;
}

export function backgroundGradient({
	light,
	dark,
	angle = 135,
	lightPosition = 0,
	darkPosition = 100
}) {
	return `
    background-image: linear-gradient(${angle}deg, ${light} ${lightPosition}%, ${dark} ${darkPosition}%);
    background: ${light};
    background: -moz-linear-gradient(${angle}deg, ${light} ${lightPosition}%, ${dark} ${darkPosition}%);
    background: -webkit-linear-gradient(${angle}deg, ${light} ${lightPosition}%, ${dark} ${darkPosition}%);
    background: linear-gradient(${angle}deg, ${light} ${lightPosition}%, ${dark} ${darkPosition}%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${light}', endColorstr='${dark}',GradientType=1 );
  `;
}

export function verticalGradient({ light, dark }) {
	return `
    background-image: linear-gradient(90deg, ${light} 0%, ${dark} 100%);
    background: ${light};
    background: -moz-linear-gradient(90deg, ${light} 0%, ${dark} 100%);
    background: -webkit-linear-gradient(90deg, ${light} 0%, ${dark} 100%);
    background: linear-gradient(90, ${light} 0%, ${dark} 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${light}', endColorstr='${dark}',GradientType=1 );
  `;
}

export function blur(val) {
	return `
  -webkit-filter: blur(${val}px);
  -moz-filter: blur(${val}px);
  -o-filter: blur(${val}px);
  -ms-filter: blur(${val}px);
  filter: blur(${val}px);
  `;
}

export function numberOfLines(lines) {
	return `
    @supports (-webkit-line-clamp: ${lines}) {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: initial;
      display: -webkit-box;
      -webkit-line-clamp: ${lines};
      -webkit-box-orient: vertical;
    }
  `;
}
