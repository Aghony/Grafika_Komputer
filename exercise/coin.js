new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("coin");
  };

  p.draw = function () {
    // Canvas & Background Wajib
    p.background(235);

    // Titik Pusat Koin (Tengah Canvas)
    let cx = 400;
    let cy = 250;

    p.noStroke();

    // 1. Bayangan Koin / Shadow (ellipse)
    p.fill(180, 180, 180);
    p.ellipse(cx, cy + 140, 220, 35);

    // 2. Lingkaran Luar / Lis Koin Gelap (circle)
    p.fill(210, 140, 10); // Kuning-Oranye tua untuk efek tebal/dimensi
    p.circle(cx, cy, 220);

    // 3. Badan Utama Koin (circle)
    p.fill(255, 200, 0); // Emas terang
    p.circle(cx, cy, 200);

    // 4. Lis Bagian Dalam / Inset Ring (circle)
    p.fill(230, 175, 0); // Emas sedang
    p.circle(cx, cy, 160);

    // 5. Cekungan Inti Koin (circle)
    p.fill(255, 215, 20); // Kuning cerah
    p.circle(cx, cy, 140);

    // 6. Simbol Emas / Emboss Dolar di Tengah (rect & line)
    p.stroke(200, 130, 0);
    p.strokeWeight(12);

    // Batang Vertikal Garis Dolar ($)
    p.line(cx, cy - 45, cx, cy + 45);

    // Lengkungan Huruf 'S' (Menggunakan rect tanpa fill)
    p.noFill();
    p.strokeWeight(10);
    p.rect(cx - 20, cy - 35, 40, 35); // Lengkungan atas
    p.rect(cx - 20, cy, 40, 35);      // Lengkungan bawah

    // Cover Tambahan untuk Membentuk Huruf S sempurna (rect)
    p.noStroke();
    p.fill(255, 215, 20); // Samakan dengan warna latar inti
    p.rect(cx, cy - 30, 25, 25);
    p.rect(cx - 25, cy + 5, 25, 25);

    // 7. Kilauan Cahaya / Highlight (ellipse & triangle)
    // Pantulan Cahaya Melengkung di Koin (ellipse)
    p.fill(255, 255, 255, 180); // Transparan putih
    p.ellipse(cx - 45, cy - 45, 50, 25);

    // Bintang Kilau / Sparkle Atas Kanan (triangle & circle)
    let sx = cx + 85;
    let sy = cy - 85;

    p.fill(255);
    // Bintang 4-Sudut dibuat dari 2 Triangle
    p.triangle(sx, sy - 25, sx - 8, sy, sx + 8, sy);
    p.triangle(sx, sy + 25, sx - 8, sy, sx + 8, sy);
    p.triangle(sx - 25, sy, sx, sy - 8, sx, sy + 8);
    p.triangle(sx + 25, sy, sx, sy - 8, sx, sy + 8);

    // Inti Bintang Kilau (circle)
    p.circle(sx, sy, 8);
  };
}, "coin");