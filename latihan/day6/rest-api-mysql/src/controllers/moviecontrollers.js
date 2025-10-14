

let Movies = [
  { id: 1, title: "LOTR", year: 1999 },
  { id: 2, title: "avenger", year: 2019 },
  { id: 3, title: "spiderman", year: 2004 },
];
const getMoviesByID = (req, res) => {
  let {id} = req.query;
  console.log(id);

  let result = Movies.find((item) => item.id == id);
  res.send(result);
};

const creatMovie = (req, res) => {
  let {title, year} = req.body
  let quaryText ="INSERT INTO movies (title, year, created_at, update_at VALUES (${title}, (${year}, now(), ) "
}
















module.exports = {getMoviesByID}