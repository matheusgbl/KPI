import { createGlobalStyle } from 'styled-components';

export const responsive = {
  laptop: '1024px',
  tablet: '768px',
  mobileLarge: '425px',
  mobileMedium: '375px',
  mobileSmall: '320px',
};

export default createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  background-color: var(--bgColor);
  color: var(--text);
  border: var(--border);
  background-color: #eee;
}
a {
  color: inherit;
  text-decoration: none;
}
* {
  box-sizing: border-box;
}
`;
