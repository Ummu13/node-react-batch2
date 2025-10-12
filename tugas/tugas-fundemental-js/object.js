//soal No.1
console.log("==== Soal No.1 ====");
var buah = [
            {nama: "Nanas", warna: "Kuning", ada_bijinya: "tidak", harga: 9000}, 
            {nama: "Jeruk", warna: "Oranye", ada_bijinya: "ada", harga: 8000}, 
            {nama: "Semangka", warna: "Hijau & Merah", ada_bijinya: "ada", harga: 10000}, 
            {nama: "Pisang", warna: "Kuning", ada_bijinya: "tidak", harga: 5000}
        ]
var arraybuah = buah.filter(function(item){
    return item.ada_bijinya == "tidak";  
})
console.log(arraybuah)

//soal No.2
console.log("==== Soal No.2 ====");
var dataFilm = []

function tambahDataFilm(nama, durasi, genre, tahun) {
    dataFilm.push({
        nama: nama,
        durasi: durasi,
        genre: genre,
        tahun: tahun
    });
}

tambahDataFilm("LOTR", "2 jam", "action", "1999")
tambahDataFilm("avenger", "2 jam", "action", "2019")
tambahDataFilm("spiderman", "2 jam", "action", "2004")
tambahDataFilm("juon", "2 jam", "horror", "2004")
console.log(dataFilm)

//soal No.3
console.log("==== Soal No.3 ====");
var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]

var arraypeople = people.filter(function(item){
    return item.age > 29;  
})
console.log(arraypeople)

//soal No.4
console.log("==== Soal No.4 ====");

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]
var jumlah = 0
people.forEach(function(item){
    jumlah += item.age
})

var average = jumlah / people.length;
console.log("rata-rata Umur; " + average)

//soal No.5
console.log("==== Soal No.5 ====");

var people =[
  {name: "John", job: "Programmer", gender: "male", age: 30},
  {name: "Sarah", job: "Model", gender: "female", age: 27},
  {name: "Jack", job: "Engineer", gender: "male", age: 25},
  {name: "Ellie", job: "Designer", gender: "female", age: 35},
  {name: "Danny", job: "Footballer", gender: "male", age: 30},
]
people.sort(function(a, b){
  return a.age - b.age;
});

people.forEach(function(item, index){
  console.log((index + 1) + ". " + item.name );
});

//soal No.6
console.log("==== Soal No.6 ====");

var phone = {
  name: "Samsung Galaxy Note 20",
  brand: "Samsung",
  colors: ["Black"],
  release: 2020
}

 function addColors(color) {
        phone.colors.push(color);
}

addColors("Gold")
addColors("Silver")
addColors("Brown")
console.log(phone)

