import { createGlobalStyle } from 'styled-components';
import { spacingStyles } from './spacing';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 3rem;
    font-family: 'Inter', -apple-system, 'Segoe UI', 'Roboto',
      'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${spacingStyles}
`;
