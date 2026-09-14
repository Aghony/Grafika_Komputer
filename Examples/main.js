function tampilkan(nama) {

    // Sembunyi semua class
    document.getElementById("contoh_rumah").style.display = "none";
    document.getElementById("contoh_matahari").style.display = "none";
    document.getElementById("contoh_pohon").style.display = "none";

    // Tampilkan canvas yang di pilih
    document.getElementById(nama).style.display = "block";
}