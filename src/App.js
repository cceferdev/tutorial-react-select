import React, {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import { Suppliers } from './components/Suppliers'


function App  () {

	const [state, setstate] = useState (initialState)

	const initialUrl = "https://api.giphy.com/v1/gifs/search?api_key=GeYKTDJ4wk2MGG04vRTa10BZmBfXihEn&q=Ronaldo&limit=25&offset=0&rating=g&lang=en"

	const fetchCharacters=(initialUrl)=>{
	fetch(initialUrl)
	.then(Response=>Response.json())
	.then(data => console.log(data.results))
	.catch(error=> console.log(error))
	}
	useEffect(()=> {
		fetchCharacters(initialUrl);
	}, [])



	return (
		<>
			<Suppliers />
			
			<NavBar brand ='Jugador Seleccionado'/>
		</>
	
	)

}

export default App;