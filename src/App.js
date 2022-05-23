import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './Routes/Router';
import GlobalState from './Context/GlobalState';
import theme from "./Constants/theme.js"
import { GlobalStyle } from './Styles/Styled';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle/>
			<GlobalState>
				<Router /> 
			</GlobalState>
		</ThemeProvider>
	);
}


/* 

	Gente acredito que a parte das paginas precisa de reformulacao ,
as paginas de: Pedidos em andamento, Buscar por restaurante, nao prescisao ser paginas, e sim podem ser Components, porque podem ser chamadas por outras paginas 

*/