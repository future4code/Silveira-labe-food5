import React from 'react';
import Router from './Routes/Router';
import GlobalState from './Context/GlobalState';


function App() {
	return (
		<>
			<GlobalState>
				<Router /> 
			</GlobalState>
		</>
	);
}

export default App;
