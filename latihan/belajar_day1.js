var nama = "ummu Radiah";
var usia = 23;

console.log(nama);

var angka1 = 10;
var angka2 = 20;

console.log(angka1 + angka2);
console.log(angka1 != angka2);

//Javascript String Method
console.log("==== Javascript String Method ====");
console.log(nama.length); //fungsi length mengihitung jumlah karakter pada suatu string
console.log(nama.charAt(2)); // fungsi chartAt untuk mengambil karakter pada posisi tertentu
console.log(nama.concat(usia)); //fungsi concat untuk menggabungkan dua string atau lebih
console.log(nama.indexOf("m")); //fungsi indexOF untuk mencari posisi karakter pada string, pada yang pertamakali ditemukan, apabila tidak ditemukan maka akan mengembalikan nilai 1
console.log(nama.substring(5, 10)); //fungsi substring untuk mengambil karakter pada posisi tertentu, dimulai dari posisi pertama sampai akhir
console.log(nama.toUpperCase(nama)); //fungsi toUpppercase untuk mengubah karakter string menjadi huruf kapital semua
console.log(nama.toLowerCase(nama)); //fungsi toLowerCase untuk mengubah karakter string menjadi huruf kecil semua
console.log(nama.replace("ummu", "Ummu")); //fungsi replace untuk mengganti karakter pada string dengan karakter lain
console.log(nama.replaceAll("a", "o")); //fungsi replaceAll untuk mengganti semua karakter pada string dengan karakter lain
console.log(nama.trim()); //fungsi trim untuk menghapus spasi pada awal dan akhir karakter string

//mengubah tipe data lain menjadi string
console.log("==== mengubah tipe data lain menjadi string ====");

var int = 20;
var pecahan = 2.5;
var arr = [1, 2, 3, 4, 5];
console.log(int, pecahan, arr);

var str1 = String(int);
var str2 = String(pecahan);
var str3 = String(arr);
console.log(str1, str2, str3);

// Mengubah tipe data lain menjadi string menggunakan toString
console.log(
  "==== Mengubah tipe data lain menjadi string menggunakan toString ===="
);

var int = 20;
var pecahan = 2.5;
var arr = [1, 2, 3, 4, 5];

var tostr = toString(int, pecahan, arr);
console.log(tostr);

//mengubah string menjadi bilangan pecahan atau bulat
console.log("==== mengubah string menjadi bilangan pecahan atau bulat ====");

var int = "20";
var pecahan = "2.5";

var toint1 = parseInt(int);
var toint2 = parseInt(pecahan);
var topecahan1 = parseFloat(int);
var topecahan2 = parseFloat(pecahan);

console.log(toint1, toint2, topecahan1, topecahan2);
