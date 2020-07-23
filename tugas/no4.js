let a = 4, r = 3
let deret = []
for (i=0;i<=10;i++){
    deret[i] = a*(r**(i-1))
}
console.log("Deret Geometri")
for (l=1;l<=10;l++){
    console.table(deret[l]);
}

let sum=0
for(x=1;x<=10;x++){
    sum += deret[i];
}
console.log("Jumlah Total 10 Suku pertama = "+ sum);