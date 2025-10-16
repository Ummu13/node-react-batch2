// let movies = [
//     {id: 1, title: "Spider-Man", year: 2002},
//     {id: 2, title: "John Wick", year: 2014},
//     {id: 3, title: "The Avengers", year: 2012},
//     {id: 4, title: "Logan", year: 2017},
// ]



// const getMovies = (req, res) => {
//     let {title} = req.query
//     let {id} = req.query
//     let result = ""
//     console.log(title)
//     console.log(id)

//     if(title === undefined){
//       title = ""
//     }
    
//     movies.forEach((item, index) => {
//       if(item.title.toLowerCase().includes(title)){
//         result += `${index+1}. ${item.title} <br>`
//         }
//         // console.log(title)
//     })
    
//     res.send(result)
// }

// const getMoviesByID = (req, res) => {
//     let {id} = req.params

//     let result = movies.find(movies => movies.id === Number(id))
//     res.send (`${result.title}`)
// } 

const { connectionPool } = require('../config/db')
//creat (mengirim atau menginput data ke database)
const createMovie = (req, res) => {
    let {title, year} = req.body

    let queryText = `INSERT INTO movie (title, year, created_at, updated_at) VALUES("${title}", ${year}, now(), now())`

    connectionPool.query(queryText, (err, data) => {
        if(err){
            console.log(err)
            return
        }
    })

    res.json({'message': 'Movie Was Succesfully Created', 'status': 'success'})
}

//read movie (menampilkan semua data)
const readMovie= (req, res) => {
  let queryText = "SELECT * FROM movie"
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
// rows fetch
  //let movies = data.map(el => {
      //let { id, title, year, created_at, updated_at } = el;
      //let movie = {}
      //movie.id = id;
      //movie.title = title;
      //movie.year = year;
      //movie.created_at = created_at;
      //movie.updated_at = updated_at;
  //return movie;
//});
res.json(data);
});
}

//read movie by id (menampilkan data berdasarkan id)
const readMovieById= (req, res) => {
  let {id} = req.params 
  let queryText= `SELECT * FROM movie WHERE id =${id}`
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
// rows fetch
  //let movies = data.map(el => {
      //let { id, title, year, created_at, updated_at } = el;
      //let movie = {}
      //movie.id = id;
      //movie.title = title;
      //movie.year = year;
      //movie.created_at = created_at;
      //movie.updated_at = updated_at;
  //return movie;
//});
res.json(data);
});
}

//Update data (menampilkan data berdasarkan id)
const updateMovie = (req, res) => {
  let {title, year} = req.body
  let {id} = req.params 

  let queryText= `Update movie Set title="${title}", year=${year}, updated_at=now() WHERE id =${id}`
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json({message: 'Succesfully Updated', status: 'success'})
res.json(data);
});
}

//Hapus data (menghapus data didatabase berdasarkan id)
const deleteMovie = (req, res) => {
  let {id} = req.params 
  let queryText= `DELETE FROM movie WHERE id =${id}`
  
  connectionPool.query(queryText, (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.json({message: 'DELETE Succesfully', status: 'success'})
res.json(data);
});
}

module.exports = {createMovie, readMovie, readMovieById, updateMovie, deleteMovie}
//module.exports = {getMoviesByID}