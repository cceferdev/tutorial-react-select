import React from 'react'
import { Suppliers } from './components/Suppliers';

const App = () => {

	return (
		<>
			<Suppliers/>

			<nav className="navbar navbar-dark bg-dark">
				<div>
				<a className='navbar-brand text-uppercase' href='/'>Jugador Seleccionado {Suppliers.event} </a>	
				</div>
			</nav>

			
		</>
	)

}

export default App;