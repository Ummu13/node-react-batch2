const express = require("express");
const app = express();
const port = 3000;

//soal No.1
console.log("==== Soal No.1 ====");
app.get("/lingkaran-tabung/", (req, res) => {
  let { r, t } = req.query;
  r = Number(r);
  t = Number(t);
  let phi = 3.14;
  let volumetabung = phi * r * r * t;
  let luasPermukaanTabung = 2 * phi * r * r + 2 * phi * r * t;
  res.send(
    `Jari-Jari : ${r}, Tinggi : ${t}, Volume Tabung : ${volumetabung}, Luas Permukaan Tabung : ${luasPermukaanTabung}`
  );
});

//soal No.2
console.log("==== Soal No.2 ====");

let dataOrang = [
  { id: 1, name: "John", umur: 30, pekerjaan: "Penulis", jenisKelamin: "L" },
  {
    id: 4,
    name: "Benzema",
    umur: 34,
    pekerjaan: "Pemain Bola",
    jenisKelamin: "L",
  },
  { id: 5, name: "Sarah", umur: 27, pekerjaan: "Model", jenisKelamin: "P" },
  {
    id: 9,
    name: "Shohei Ohtani",
    umur: 28,
    pekerjaan: "Pemain Baseball",
    jenisKelamin: "L",
  },
  {
    id: 11,
    name: "Maria Sharapova",
    umur: 35,
    pekerjaan: "Petenis",
    jenisKelamin: "P",
  },
];

app.get("/Data-Orang/", (req, res) => {
  let { age, gender } = req.query;
  let hasil = [];

  age = Number(age);

  dataOrang.forEach((item, index) => {
    if (item.jenisKelamin === gender && item.umur >= age) {
      hasil.push(
        `${index + 1}. ${item.name} - Pekerjaan: ${item.pekerjaan} - Umur: ${
          item.umur
        } Tahun <br>`
      );
    }
  });
  res.send(hasil.join("\n"));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Soal Nomor 3

app.get("/data-orang/:id", (req, res) => {
  let { id } = req.params;
  let result = [];

  let DataOrang = dataOrang.find((item) => item.id == id);
  if (!DataOrang) {
    result.push("Maaf data tidak ditemukan");
  } else if (DataOrang.jenisKelamin == "L") {
    result.push(
      `Pak  ${DataOrang.name} adalah seorang ${DataOrang.pekerjaan} yang berusia ${DataOrang.umur} Tahun`
    );
  } else if (DataOrang.jenisKelamin == "P") {
    result.push(
      `Bu  ${DataOrang.name} adalah seorang ${DataOrang.pekerjaan} yang berusia ${DataOrang.umur} Tahun`
    );
  }
  res.send(result.join("/n"));
});

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
