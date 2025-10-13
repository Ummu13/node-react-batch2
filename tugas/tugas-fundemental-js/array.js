//soal No.1
console.log("==== Soal No.1 ====");

var dataPeserta = ["john", "laki-laki", "programmer", "30"];
var output =
  "Halo, nama saya " +
  dataPeserta[0] +
  " saya " +
  dataPeserta[1] +
  " berumur " +
  dataPeserta[3] +
  " bekrja sebagai seorang " +
  dataPeserta[2];
console.log(output);
//"Halo, nama saya john. saya laki-laki berumur 30 bekerja sebagai seorang programmer"

//soal No.2
console.log("==== Soal No.2 ====");
var sayuran = [];
sayuran.push(
  "Kangkung",
  "Bayam",
  "Buncis",
  "Kubis",
  "Timun",
  "Seledri",
  "Tauge"
);
console.log(sayuran);

//soal No.3
console.log("==== Soal No.3 ====");
var SortSayuran = sayuran.sort();

for (var i = 0; i < SortSayuran.length; i++) {
  console.log(i + 1 + ". " + SortSayuran[i]);
}

//soal No.4
console.log("==== Soal No.4 ====");

var word = "car";
var myArray = [];
var i = 0;
while (i < word.length) {
  var a = i + 1;
  while (a <= word.length) {
    myArray.push(word.slice(i, a));
    a++;
  }
  i++;
}
console.log(myArray);

//soal No.5
console.log("==== Soal No.5 ====");

var numbers = [4, 5, 1, 4, 6, 8, 9, 21];
jumlah = 0;
for (i = 0; i < numbers.length; i++) {
  jumlah += numbers[i];
}
console.log("Jumlah; " + jumlah);

//soal No.6
console.log("==== Soal No.6 ====");

var kumpulanAngka = [
  [1, 3, 5, 7, 8, 9],
  [4, 5, 6, 2, 3, 1],
  [6, 7, 8, 1, 3, 5],
];

var result = "";
for (var i = 0; i < kumpulanAngka.length; i++) {
  var jumlah = 0;
  for (var j = 0; j < kumpulanAngka[i].length; j++) {
    jumlah += kumpulanAngka[i][j];
  }
  result += jumlah + " ";
}
console.log("Jumlah; " + result);
