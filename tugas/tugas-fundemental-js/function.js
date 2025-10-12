
//soal No.1
console.log("==== Soal No.1 ====");

function introduce (nama, jk, pekerjaan, usia){
    if (jk == "perempuan"){
        return "Bu " + nama + " adalah seorang " + pekerjaan + " yang Berusia " + usia + " tahun"
    }else if (jk == "laki-laki"){
         return "Pak " + nama + " adalah seorang " + pekerjaan + " yang Berusia " + usia + " tahun"
}
    }
   
var john = introduce("John", "laki-laki", "penulis", "30")
console.log(john)
var sarah = introduce("Sarah", "perempuan", "model", "28")
console.log(sarah)


//soal No.2
console.log("==== Soal No.2 ====");

function KarakterUnik(str){
    str = str.toLowerCase();
    var result = ""
    for (i = 0; i < str.length; i++){
        const word = str[i];
        if (str.indexOf(word) === str.lastIndexOf(word)){
            result += word;
        }
    } return result;
}
var text = KarakterUnik("Super Bootcamp Fullstack Dev 2022");
console.log(text)

//soal No.3
console.log("==== Soal No.3 ====");

function besarkecil (array){
    var data = array.sort((a, b) => a - b);
    var angkakecil = data[0];
    var angkabesar = data[data.length - 1];
    var result = "Angka Terbesar Adalah " + angkabesar + " dan Angka Terkecil Adalah " + angkakecil;
    return result
}
var angka = besarkecil([2,3,1,9,12,8,9,7]);
console.log(angka)


//soal No.4
console.log("==== Soal No.4 ====");

function arrangeString (str){
    data = str.split("").sort().join("")
    return data
}
console.log(arrangeString("bahasa")) 
console.log(arrangeString("similikiti")) 
console.log(arrangeString("sanbercode"))
console.log(arrangeString("")) 


//soal No.5
console.log("==== Soal No.5 ====");

function palindrome(kata) {
    var kataDibalik = kata.split("").reverse().join("")
    if (kata == kataDibalik){
        var result = true
    }else{
        var result = false
    }
    return result
}
console.log(palindrome('katak')); 
console.log(palindrome('blanket')); 
console.log(palindrome('nababan')); 
console.log(palindrome('haji ijah')); 
console.log(palindrome('mister')); 

function angkaPalindrome(num) {
    num++

    while (true){
        if (numPalindrom(num)){
        return num;
    }
    num++
}
}
function numPalindrom(n){
    var angka = String(n);
    var angkaDibalik = angka.split('').reverse().join('');
    return angka == angkaDibalik;
}
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001

//soal No.6
console.log("==== Soal No.6 ====");

function cekPermutasi(str1, str2) {
  var kata1 = str1.replace(/\s/g, '').split("").sort().join("");
  var kata2 = str2.replace(/\s/g, '').split("").sort().join("");
        if (kata1 == kata2){
            var result = true
        }else{
            var result = false
        }
    return result
}


// TEST CASES
console.log(cekPermutasi("abah", "baha")) // true
console.log(cekPermutasi("ondel", "delon")) // true
console.log(cekPermutasi("paul sernine", "arsene lupin")) // true
console.log(cekPermutasi("taco", "taca")) // false
