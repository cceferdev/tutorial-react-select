import React, {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import {Suppliers} from './components/Suppliers'
import Characters from './components/Characters';
import getGifs from './components/getGifs';
const api_key = 'GeYKTDJ4wk2MGG04vRTa10BZmBfXihEn'


function App  () {

	const DI_GIFS = ["https://media4.giphy.com/media/TjAcxImn74uoDYVxFl/200w.webp?cid=ecf05e47qsq3csc6o8h98970pzwb7f3ngdx05joeyettmt18&rid=200w.webp&ct=g"]


	const [gifs, setGifs] = useState([])

	const [characters, setCharacters] = useState ();
	const [value, setValue] = useState();

	function getGifs (keyword) {
		const apiUrls = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=25&offset=0&rating=pg-13&lang=en`
		
			return fetch(apiUrls)
			.then(res => res.json())
			.then(response => {
			   const {data}  = response
		
			   if(Array.isArray(data)){
		
			   const gifs = data.map(image => image.images.
			   downsized_medium.url)
			   setGifs(gifs)
			   }
			
			   })
			} 

	useEffect(()=> {
		getGifs(value);
	//	console.log(value);
	}, [value]);

	

	return (
		<>

		<div className="App">
     	 <section className="App-content">
        
      </section>
   		 </div>
		 
			<NavBar brand ='Jugador Seleccionado'/ >

			<Suppliers setValue={setValue}/>

			<div className='container'>

			<Characters characters={gifs}/>

			</div>
		</>
	
	);

}

export default App;