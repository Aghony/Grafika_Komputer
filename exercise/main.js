function tampilkan(nama) {

    // Sembuyi semua class
    document.getElementById("matahari").style.display = "none";
    document.getElementById("pohon").style.display = "none";
    document.getElementById("rumah").style.display = "none";
    document.getElementById("mobil").style.display = "none";
    document.getElementById("robot").style.display = "none";
    document.getElementById("coin").style.display = "none";
    document.getElementById("pedang").style.display = "none";
    document.getElementById("alien").style.display = "none";

    // Tampilkan canvas yang di pilih
    document.getElementById(nama).style.display = "block";
}