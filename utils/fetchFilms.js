// Leer fichero .env
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

/************** Fetch by title ************/
async function fetchFilm (title="") { // añadir try catch
    try {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`); //{} o [{},{},{},{}]
        let film = await response.json(); //{} o [{},{},{},{}]
        if (film.Response === 'False') {
            return null;
    }
        return film 
    } catch (error) {
        console.log('Error fetching film:', error.message);
        return null;
    }
};

/************* Fetch by id *************/
// const getFilmsById = async (id="") => {
//     let response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`); //{} o [{},{},{},{}]
//     let film = await response.json(); //{} o [{},{},{},{}]
    
//     return film
// };

// fetchFilm('it')
// .then(film=>console.log(film));

module.exports = fetchFilm;
    //getFilmsById,
    //postFilm,
    //putProduct,
    //deleteProduct
