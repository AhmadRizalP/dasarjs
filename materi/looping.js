// for
for(let index = 1; index <= 10; index++){
    console.log("perulangan ke-"+index)
}
// for/in 
let siswa = {
    nama: "Kusuma seta",
    gender: "wanita",
    jurusan: "RPL",
    usia:"300",
    alamat : "Ngantru"
}
for (key in siswa){
    console.log(key)
}
// for/of
let presiden = ["Soekarno", "Soeharto", "Habibie", "Gus Dur", "Megawati", "SBY", "Jokowi"]
for (pres of presiden){
    console.log(pres)
}
// while
let laptop = ["Lenovo", "HP", "Acer", "Asus"]
let i = 0
while(laptop[i]){
    console.log(laptop[i])
    i++
}
//do while
let gadget = ["Xiaomi", "Samsung", "Motorola", "Soni Ericson"]
let a = 0
do{
    console.log(gadget[a])
    a++
}while(gadget[a])