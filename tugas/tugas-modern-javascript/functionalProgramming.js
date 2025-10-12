//soal No.1
console.log("==== Soal No.1 ====");

function hitungPersegi (sisi){
    function luas (s){return s*s}
    function keliling (s){return 4*s}
    console.log("luas Persegi: ", luas(sisi))
    console.log("Keliling Persegi: ", keliling(sisi))
}

function hitungPersegiPanjang (panjang, lebar){
    function luas (p, l){return p*l}
    function keliling (p, l){return 2*(p+l)}
    console.log("luas Persegi: ", luas(panjang, lebar))
    console.log("Keliling Persegi: ", keliling(panjang, lebar))
}

hitungPersegi(8)
hitungPersegiPanjang(12,7)

//soal No.2
console.log("==== Soal No.2 ====");

function hitungKubus (sisi){
    function volume (s){return s*s*s}
    function LuasPermukaan (s){return 6*s*s}
    console.log("volume kubus: ", volume(sisi))
    console.log("luas permukaan kubus: ", LuasPermukaan(sisi))
}

function HitungBalok (panjang, lebar, tinggi){
    function volume (p, l, t){return p*l*t}
    function LuasPermukaan (p, l, t){return 2*((p*l)+(p*t)+(l*t))}
    console.log("Volume balok: ", volume(panjang, lebar, tinggi))
    console.log("luas permukaan balok: ", LuasPermukaan(panjang, lebar, tinggi))
}

hitungKubus(8)
HitungBalok(12,7, 5)

//soal No.2
console.log("==== Soal No.2 ====");
var people = [
  { name: "John", job: "Programmer", gender: "male", age: 30 },
  { name: "Sarah", job: "Model", gender: "female", age: 27 },
  { name: "Jack", job: "Engineer", gender: "male", age: 25 },
  { name: "Ellie", job: "Designer", gender: "female", age: 35 },
  { name: "Danny", job: "Footballer", gender: "male", age: 30 },
];

function recursiveSort(arr, n) {
  if (n === 1) return;

  for (var i = 0; i < n - 1; i++) {
    if (arr[i].age > arr[i + 1].age) {
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }

  recursiveSort(arr, n - 1);
}

recursiveSort(people, people.length);

for (var i = 0; i < people.length; i++) {
  console.log((i + 1) + ". " + people[i].name);
}










