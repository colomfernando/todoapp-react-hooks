import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
html {
  line-height: 1;
	-webkit-text-size-adjust: 100%;
	box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
ol,
li,
p,
pre,
blockquote,
figure,
hr {
  margin: 0;
  padding: 0;
}

body {
	background-color: #f5f5f5;
	font-family: 'Roboto', sans-serif;
}

#root {
	display: flex;
	justify-content: center;
	align-items: center;
}

main {
  display: block;
}

a {
	background-color: transparent;
	text-decoration: none;
}

ul {
  list-style: none;
}

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

b,
strong {
  font-weight: bolder;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%; 
  line-height: 1.15;
  margin: 0; 
}

input,
textarea,
select,
button {
  color: inherit; 
  font: inherit; 
	letter-spacing: inherit; 
	overflow: visible;
}

button,
select {
  text-transform: none;
}

button * {
  pointer-events: none;
}

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

textarea {
  overflow: auto;
}

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

noscript {
  display: block;
  margin-bottom: 1em;
  margin-top: 1em;
}
`;

export default GlobalStyles;
