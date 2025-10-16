const express = require("express");
const app = express();
const port = 3000;



//Soal 1

//Soal 2

let dataOrang =[
{id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L"},
{id: 4, name: "Benzema", umur: 34, pekerjaan: "Pemain Bola", jenisKelamin: "L"},
{id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P"},
{id: 9, name: "Shohei Ohtani", umur: 28, pekerjaan: "Pemain Baseball", jenisKelamin: "L"},
{id: 11, name: "Maria Sharapova", umur: 35, pekerjaan: "Petenis", jenisKelamin: "P"}
]

const getDataOrang = (req, res) => {
  let {umur} = req.query;
  let {jeniskelamin} = req.query;
  console.log(gender);
  
  let result = dataOrang.find((item) => item.umur == umur && item.jenisKelamin == jeniskelamin);
  res.send(result);
};


app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.get("/data", getDataOrang);


app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
