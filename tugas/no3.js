let data ={
    nama:"Rhodey",
    tinggi: 1.7,
    berat:90
}

rumus_bmi = (t,b) =>{
    return b / (t**2)
}

if (rumus_bmi(data.tinggi,data.berat) >= 30.0) {
    console.log("Status Berat Badan "+ data.nama +" = Kegemukan (Obesitas)");
} else if (rumus_bmi(data.tinggi,data.berat) >= 25.0) {
    console.log("Status Berat Badan "+ data.nama +" = Kelebihan Berat Badan");
}else if (rumus_bmi(data.tinggi,data.berat) >= 18.5) {
    console.log("Status Berat Badan "+ data.nama +" = Normal (Ideal)");
}else if (rumus_bmi(data.tinggi,data.berat) < 18.5) {
    console.log("Status Berat Badan "+ data.nama +" = Kekurangan Berat Badan");
}