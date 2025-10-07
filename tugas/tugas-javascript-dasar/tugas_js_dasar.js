//soal No.1
console.log("==== Soal No.1 ====");
var perkenalan = "Nama Saya Adalah";
var nama = "ummu Radiah.";
var kata1 = "Saya";
var kata2 = "berharap";
var kata3 = "untuk";
var kata4 = "menjadi";
var kata5 = "seorang";
var kata6 = "software";
var kata7 = "developer.";

console.log(perkenalan, nama, kata1, kata2, kata3, kata4, kata5, kata6, kata7);

// soal No.2
console.log("==== Soal No.2 ====");
var abjad = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var angka = "0123456789";

// 1. password1 = "TES123"
var password1 =
  abjad[19] + abjad[4] + abjad[18] + abjad[19] + angka[1] + angka[2] + angka[3];
console.log("password ke satu: " + password1);
// 2. password2 = "B3B3K"
var password2 = abjad[1] + angka[3] + abjad[1] + angka[3] + abjad[10];
console.log("password ke dua: " + password2);

// 3. password3 = "R4H4514"
var password3 =
  abjad[17] + angka[4] + abjad[7] + angka[4] + angka[5] + abjad[8] + angka[4];
console.log("password ke tiga: " + password3);

// Soal No.3
console.log("==== Soal No.3 ====");
var setencence = "Wow JavaScript is so cool";

var FirstWord = setencence.substring(0, 3);
console.log("First Word: " + FirstWord);
var Second_Word = setencence.substring(4, 14);
console.log("Second Word: " + Second_Word);
var Third_Word = setencence.substring(15, 17);
console.log("Third Word: " + Third_Word);
var Fourth_Word = setencence.substring(18, 20);
console.log("Fourth Word: " + Fourth_Word);
var Fifth_Word = setencence.substring(21, 25);
console.log("Fifth Word: " + Fifth_Word);

// Soal No.4
console.log("==== Soal No.4 ====");
var setencence = "Wow JavaScript is so cool";

var FirstWord = setencence.substring(0, 3);
console.log("First Word: " + FirstWord + ", With length: " + FirstWord.length);
var Second_Word = setencence.substring(4, 14);
console.log(
  "Second Word: " + Second_Word + ", With length: " + Second_Word.length
);
var Third_Word = setencence.substring(15, 17);
console.log(
  "Third Word: " + Third_Word + ", With length: " + Third_Word.length
);
var Fourth_Word = setencence.substring(18, 20);
console.log(
  "Fourth Word: " + Fourth_Word + ", With length: " + Fourth_Word.length
);
var Fifth_Word = setencence.substring(21, 25);
console.log(
  "Fifth Word: " + Fifth_Word + ", With length: " + Fifth_Word.length
);

// soal No.5
console.log("==== Soal No.5 ====");
// 1. password pertama : HELLO
var kode1 =
  abjad.indexOf("H") +
  "-" +
  abjad.indexOf("E") +
  "-" +
  abjad.indexOf("L") +
  "-" +
  abjad.indexOf("L") +
  "-" +
  abjad.indexOf("O");
console.log("kode 1: " + kode1);

// 2. password kedua : WORLD
var kode2 =
  abjad.indexOf("W") +
  "-" +
  abjad.indexOf("O") +
  "-" +
  abjad.indexOf("R") +
  "-" +
  abjad.indexOf("L") +
  "-" +
  abjad.indexOf("D");
console.log("kode 2: " + kode2);

// 3. password ketiga : IMREADY
var kode3 =
  abjad.indexOf("I") +
  "-" +
  abjad.indexOf("M") +
  "-" +
  abjad.indexOf("R") +
  "-" +
  abjad.indexOf("E") +
  "-" +
  abjad.indexOf("A") +
  "-" +
  abjad.indexOf("D") +
  "-" +
  abjad.indexOf("Y");
console.log("kode 1: " + kode3);

// soal No.6
console.log("==== Soal No.6 ====");

var pertama = "saya";
var kedua = "senang";
var ketiga = "belajar";
var keempat = "javascript";

var pertama1 = pertama.replaceAll("s", "S");
var kedua2 = kedua.replace("senang","SenanG");
var ketiga3 = ketiga.replace("belajar", "BelajaR");
var keempat4 = keempat.toUpperCase(keempat);
console.log(pertama1 + " " + kedua2 + " " + ketiga3 + " " + keempat4);

// soal No.7
console.log("==== Soal No.7 ====");

var panjang = "12";
var lebar = "7";
var alas = "6";
var tinggi = "13";

var panjangInt = parseInt(panjang);
var lebarInt = parseInt(lebar);
var alasInt = parseInt(alas);
var tinggiInt = parseInt(tinggi);

var luasPersegiPanjang = panjangInt * lebarInt;
console.log("Luas Persegi Panjang: " + luasPersegiPanjang);

var luasSegitiga = 0.5 * alasInt * tinggiInt;
console.log("Luas Segitiga: " + luasSegitiga);

// soal No.8
console.log("==== Soal No.8 ====");

var sisi = " 1 2 ";
var jarijari = "7.5";

var sisiconcat = sisi.replace(/\s+/g, '');
var sisitrim = sisiconcat.trim();

var sisiNumber = Number(sisitrim);
var jarijarifloat = parseFloat(jarijari);

var luasPersegi = sisiNumber * sisiNumber ;
console.log("Luas Persegi : " + luasPersegi);

var luaslingkaran = 3.14 * jarijarifloat * jarijarifloat;
console.log("LuasLingkaran : " + luaslingkaran);

