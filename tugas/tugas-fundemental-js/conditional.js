//soal No.1
console.log("==== Soal No.1 ====");

var sentence = "Saya Sangat Senang Sekali Belajar Programming dan Saya Juga Senang Belajar Javascript";

var lengthsentence = sentence.length
console.log("Panjang String; " + lengthsentence)

if (lengthsentence < 10 ) {
    console.log("Kategori Pendek")
} else if ( lengthsentence <= 30  ) {
    console.log("Kategori Sedang")
} else if (lengthsentence > 30){
    console.log("Kategori Panjang")
} else {
    console.log("tidak masuk kategori manapun")
}


//soal No.2
console.log("==== Soal No.2 ====");

var Nilai = 43;
console.log("Nilai: " + Nilai)


if (Nilai >= 80 ) {
    console.log("Indeks nilai anda  A")
} else if ( Nilai >= 70 && Nilai < 80  ) {
    console.log("Indeks nilai anda  B")
} else if (Nilai >= 60 && Nilai < 70 ){
    console.log("Indeks nilai anda  C")
} else if (Nilai >= 50 && Nilai < 60 ){
    console.log("Indeks nilai anda  D")   
} else {
    console.log("Indeks nilai anda  E")
}


//soal No.3
console.log("==== Soal No.3 ====");

var tanggal = 13
var bulan = 10
var tahun = 2025

switch (bulan){
    case 1:{console.log(tanggal + " Januari " + tahun); break;}
    case 2:{console.log(tanggal + " Februari " + tahun); break;}
    case 3:{console.log(tanggal + " Maret " + tahun); break;}
    case 4:{console.log(tanggal + " April " + tahun); break;}
    case 5:{console.log(tanggal + " Mei " + tahun); break;}
    case 6:{console.log(tanggal + " Juni " + tahun); break;}
    case 7:{console.log(tanggal + " Juli " + tahun); break;}
    case 8:{console.log(tanggal + " Agustus " + tahun); break;}
    case 9:{console.log(tanggal + " September " + tahun); break;}
    case 10:{console.log(tanggal + " Oktober " + tahun); break;}
    case 11:{console.log(tanggal + " November " + tahun); break;}
    case 12:{console.log(tanggal + " Desember " + tahun); break;}
    default: {console.log("Bulan tidak ada pada case")}
}

