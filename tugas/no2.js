let barang = [
    { nama: "Beras",harga: 10000, jumlah:5},
    { nama: "Gula",harga: 14000, jumlah:5},
    { nama: "Telur",harga: 20000, jumlah:2},
    { nama: "Minyak Goreng",harga: 9000, jumlah:10},
]
let total = []
for (i=0;i<barang.length;i++){
    total[i] = barang[i].harga * barang[i].jumlah
}

console.log("Daftar Belanja Bu Astuti")
for (i=0;i<barang.length;i++){
    console.log(barang[i]);
}
console.log("-------------------------------")
for (i=0;i<barang.length;i++){
    console.log("Total Harga "+barang[i].nama+" = "+ total[i]);
}
var akhir = 0
for(i=0;i<total.length;i++){
    akhir += total[i];
}
console.log("Total Bayar Keseluruhan = "+ akhir);
