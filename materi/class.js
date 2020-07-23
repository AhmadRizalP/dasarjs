class persegipanjang {
    constructor(p, l) {
        this.panjang = p
        this.lebar = l
    }
    luas = () => {
        return this.panjang * this.lebar
    }
    keliling = () => {
        return 2 * (this.panjang + this.lebar)
    }
}
let tanah = new persegipanjang(10,50)
console.log("Luas Tanah = "+tanah.luas())
console.log("Keliling Tanah = "+tanah.keliling())

class balok extends persegipanjang{
    constructor(p,l,t){
        super(p,l)
        this.tinggi = t
    }
    luas = () => {
        return (2*this.panjang*this.lebar) + (2*this.panjang*this.tinggi) + (2* this.tinggi*this.lebar)
    }
    volume = () => {
        return this.panjang * this.lebar * this.tinggi
    }
}