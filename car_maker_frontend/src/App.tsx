import { VFC } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';

const App: VFC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>Front End app</div>
    </ThemeProvider>
  );
}

export default App;
