const express = require("express");
const app = express();
const port = 3000;

let Movies = [
  { id: 1, title: "LOTR", year: 1999 },
  { id: 2, title: "avenger", year: 2019 },
  { id: 3, title: "spiderman", year: 2004 },
];
const getMovie = (req, res) => {
  let result = "";

  Movies.forEach((item, index) => {
    result = (index+1) + " - " + item.title + " (" + item.year + ")<br>";
  });
  res.send(result);
};

//Route movie

app.get("/movie", getMovie);

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
