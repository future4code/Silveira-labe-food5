import React from 'react';
import Router from './Routes/Router';
import GlobalState from './Context/GlobalState';

export default function App() {
	return (
		<>
			<GlobalState>
				<Router /> 
				
			</GlobalState>
		</>
	);
}


/* 

	Gente acredito que a parte das paginas precisa de reformulacao ,
as paginas de: Pedidos em andamento, Buscar por restaurante, nao prescisao ser paginas, e sim podem ser Components, porque podem ser chamadas por outras paginas 

*/