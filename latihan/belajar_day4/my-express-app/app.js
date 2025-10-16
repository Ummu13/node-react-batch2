const express = require("express");
const app = express();
const port = 3000;


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

//=====================
let dataOrang =[
{id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
{id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
{id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
{id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
{id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
]


const getDataOrang = (req, res) => {
  let { age, gender } = req.query;
  let hasil = [];

  // ubah age ke number agar bisa dibandingkan
  age = Number(age);

  dataOrang.forEach((item, index) => {
    if (item.jenisKelamin === gender && item.umur >= age) {
      hasil.push(`${index + 1}. ${item.name} - Pekerjaan: ${item.pekerjaan} - Umur: ${item.umur} Tahun`);
    }
  });

  res.json(hasil);
};

  //let result = dataOrang.find((item) => item.jenisKelamin == gender) || dataOrang.find((item) => item.umur == age);
  //const result = filtered((item, index) => {
        //return `${index + 1}. ${item.nama} - Pekerjaan: ${item.pekerjaan} - Umur: ${item.umur} Tahun`;
  //res.send(result);



 
app.get("/data", getDataOrang);

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.get("/movie", getMoviesByID);

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
