class Lingkaran{
    constructor(r){
        this.jarijari = r / 2
    }

    Luas = ()=> {
        return 3.14 * (this.jarijari**2)
    }
    Keliling = () => {
        return 3.14 * 2 * this.jarijari
    }
}
class Tabung extends Lingkaran {
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volumeTabung = () => {
        return 3.14 * (this.jarijari**2) * this.tinggi
    }
    LuasPermukaanTabung = () => {
        return 2 * 3.14 * this.jarijari * (this.jarijari+this.tinggi)
    }
    LuasSelimutTabung = () => {
        return 3.14 * 2 * this.jarijari * this.tinggi
    }
}
class Kerucut extends Lingkaran {
    constructor(r,t){
        super(r)
        this.tinggi = t
    }
    volumeKerucut = () => {
        return 1/3 * 3.14 * (this.jarijari**2) * this.tinggi
    }
    LuasPermukaanKerucut = () => {
        return 3.14 * (this.jarijari**2) + 3.14 * this.jarijari * (Math.sqrt((this.tinggi**2) + (this.jarijari**2)))
    }
    LuasSelimutKerucut = () => {
        return 3.14 * 2 * this.jarijari * this.tinggi
    }
}
class Bola extends Lingkaran {
    constructor(r){
        super(r)
    }
    volumeBola = () => {
        return 4/3 * 3.14 * (this.jarijari**3)
    }
    LuasPermukaanBola = () => {
        return 4 * 3.14 * (this.jarijari**2)
    }
}
let tabung = new Tabung (15,50)
console.log("--> Tabung")
console.log("Volume : "+tabung.volumeTabung());
console.log("Luas Permukaan : "+tabung.LuasPermukaanTabung());
console.log("Luas Selimut : "+tabung.LuasSelimutTabung());
let kerucut = new Kerucut (20,40)
console.log("--> Kerucut")
console.log("Volume : "+kerucut.volumeKerucut());
console.log("Luas Permukaan : "+kerucut.LuasPermukaanKerucut());
console.log("Luas Selimut : "+kerucut.LuasPermukaanKerucut());
let bola = new Bola (15,50)
console.log("--> Bola")
console.log("Volume : "+bola.volumeBola());
console.log("Luas Permukaan : "+bola.LuasPermukaanBola());
