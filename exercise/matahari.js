new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("matahari");
  };

  p.draw = function () {
    p.background(235);

    // Variabel Pusat & Ukuran (Koordinat Dipilih Sendiri di Tengah Canvas)
    let cx = 400;
    let cy = 250;
    let radiusLingkaran = 60;
    let panjangSinar = 45;
    let jarakSinar = 20;

    // Sinar Matahari 
    p.stroke(240, 100, 25);
    p.strokeWeight(6);

    let totalSinar = 12;
    for (let i = 0; i < totalSinar; i++) {
      let sudut = (i * p.TWO_PI) / totalSinar;

      // Titik Awal Garis (Di Luar Lingkaran Inti)
      let x1 = cx + p.cos(sudut) * (radiusLingkaran + jarakSinar);
      let y1 = cy + p.sin(sudut) * (radiusLingkaran + jarakSinar);

      // Titik Akhir Garis
      let x2 = cx + p.cos(sudut) * (radiusLingkaran + jarakSinar + panjangSinar);
      let y2 = cy + p.sin(sudut) * (radiusLingkaran + jarakSinar + panjangSinar);

      p.line(x1, y1, x2, y2);
    }

    // Lingkaran Inti Matahari 
    p.noStroke();
    p.fill(255, 220, 0);
    p.circle(cx, cy, radiusLingkaran * 2);
  };
}, "matahari");