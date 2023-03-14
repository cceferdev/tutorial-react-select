import React, {useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import {Suppliers} from './components/Suppliers'
import Characters from './components/Characters';
import getGifs from './components/getGifs';


function App  () {

	const DI_GIFS = ["https://media4.giphy.com/media/TjAcxImn74uoDYVxFl/200w.webp?cid=ecf05e47qsq3csc6o8h98970pzwb7f3ngdx05joeyettmt18&rid=200w.webp&ct=g"]


	const [gifs, setGifs] = useState([])


	useEffect(function(){
	  getGifs().then(gifs=>setGifs(gifs))
	}, [])
  
	/*
	return (
	  <div className="App">
		<section className="App-content">
		  {
			gifs.map(singleGif => <img src={singleGif} />)
		  } 
		</section>
	  </div>
	);
	*/
	  







	const [characters, setCharacters] = useState ([]);


	const fetchCharacters=(url)=>{
	fetch(url)
	.then((Response)=>Response.json())
	.then((data) => setCharacters(data.results))
	.catch((error)=> console.log(error))
	
	};
	useEffect(()=> {
		fetchCharacters();
	}, []);



	return (
		<>

		<div className="App">
     	 <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
        <button onClick={()=> setGifs(DI_GIFS)}>Ver a Messi</button>
        
      </section>
   		 </div>
		 
			<Suppliers />

			<NavBar brand ='Jugador Seleccionado'/ >

			<div className='container'>

			<Characters characters={characters}/>

			</div>
		</>
	
	);

}

export default App;