//soal No.1
console.log("==== Soal No.1 ====");

var angka = 1;
var genap = 0;
while (angka <= 20) {
        angka++;
        if(angka %2 == 0 ){
            angka = genap + angka 
            console.log(angka + " I Love Coding");
    }
} 

console.log("========================");

var angka = 22;
do {
    angka--;
    if(angka %2 == 0 ){
            angka = genap + angka
    console.log(angka + " I will become a MERN Stack developer");
    }
} while (angka > 1)

//soal No.2
console.log("==== Soal No.2 ====");

var angka = 0;
var genap = 0;
var ganjil = 0;
while (angka < 20) {
        angka++;
        if(angka %2 == 0 ){
            angka = genap + angka 
            console.log(angka + " Angka Genap");
        }else {
            angka = ganjil + angka
            console.log(angka + " Angka Ganjil");
        }   
}

//soal No.3
console.log("==== Soal No.3 ====");


for(var angka = 1; angka <= 20; angka++){
        if(angka %2 != 0 && angka %3 != 0){
            console.log(angka + " Santai");
        }else if (angka %2 == 0 && angka %3 != 0) {
            console.log(angka + " Berkualitas");
        }else if ( angka %3 == 0 && angka %2 != 0 ){
            console.log(angka + " I Love Coding");
        }else if ( angka %3 == 0 && angka %2 == 0 ){
            console.log(angka + " ToT");
}}

//soal No.4
console.log("==== Soal No.4 ====");

var segitiga  = "";
var angka  = 1;
while (angka <= 7) {
    segitiga += "#"
    console.log(segitiga);
    angka++;
}

//soal No.5
console.log("==== Soal No.5 ====");

var sentence = "Fullstack Developer"
var indeks = 0;
while(indeks < sentence.length){
    if (indeks != 1 && indeks != 6 && indeks != 11 && indeks != 13 && indeks != 15)
    console.log(sentence[indeks])
    indeks++
}



