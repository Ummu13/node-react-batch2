// perulangan dengan For
console.log("============Perulangan dengan For============");
for (var angka = 1; angka < 10; angka++){
    //variabel angka bernilai 1, lalu nilai variable angka kurang dari 10, maka dilakukan perulangan maju dari angka 1 sampai dengan 9
    console.log("iterasi ke-" + angka);
}

console.log("========================");

for (var angka = 5; angka > 0; angka--){
    //variabel angka bernilai 1, lalu nilai variable angka kurang dari 10, maka dilakukan perulangan maju dari angka 1 sampai dengan 9
    console.log("iterasi ke-" + angka);
}

console.log("========================");

var jumlah = 0;
for(var deret = 5; deret >0; deret--){
    //variable deret bernilai 5, lalu nilai variable deret lebih dari 0, maka dilakukan perulangan mundur dari angka 5 sampai dengan 1
    jumlah +=deret;
    //nilai variable jumlah ditambah dengan perulangan deret yang dilakukan diatas 
    console.log("jumlah saat ini: "+ jumlah);
    // maka hasil output adalah nilai variable jumlah ditambah dengan perulangan deret yang dilakukan secara mundur dari angka 5 sampai angka 1
}

console.log("jumlah terakhir: " + jumlah);

// perulangan dengan While
console.log("============Perulangan dengan While============");
var flag = 1;
while (flag < 10) {
    console.log("iterasi ke-" + flag);
    flag++;
}

console.log("========================");

var flag = 9;
do {
    console.log("iterasi ke-" + flag);
    flag--;
} while (flag > 0)