import { VFC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { Vehicles } from 'pages';
import { theme } from './theme';
import { GlobalStyles } from './GlobalStyles';
import { store } from 'store';
import './App.css';

const App: VFC = () => {
	return (
		<Provider store={store}>
			<ThemeProvider theme={theme}>
			<GlobalStyles />
				<h4>Select Car type</h4>
				<Vehicles />
			</ThemeProvider>
		</Provider>
	);
}

export default App;
