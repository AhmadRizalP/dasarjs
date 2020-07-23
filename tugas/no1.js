class Tanah {
    constructor(p,l){
        this.panjang = p
        this.lebar = l
    }
    harga_asli = () =>{
        return this.panjang * this.lebar * 1500000
    }

}
let Luas = new Tanah(20.5,30)
let ppn = 15
let pajak = Luas.harga_asli() * ppn / 100
console.log("Pembelian tanah 20,5m x 30m = "+ Luas.harga_asli());
console.log("Total pembelian tanah + PPN "+ ppn +" % = "+ (Luas.harga_asli() + pajak) );