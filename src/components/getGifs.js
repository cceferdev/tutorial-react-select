//para obtener elementos de una array en una api

const api_key = 'GeYKTDJ4wk2MGG04vRTa10BZmBfXihEn'


export default function getGifs ({keyword = 'Cr7'} = {}) {
const apiUrls = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=25&offset=0&rating=pg-13&lang=en`

    return fetch(apiUrls)
    .then(res => res.json())
    .then(response => {
       const {data}  = response

       if(Array.isArray(data)){

       const gifs = data.map(image => image.images.
       downsized_medium.url)
       return gifs
       }
    
       })
    } 
