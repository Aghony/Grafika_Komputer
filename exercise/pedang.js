new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("pedang");
  };

  p.draw = function () {
    // Canvas & Background Wajib
    p.background(235);

    // Sumbu Tengah Canvas (X = 400)
    let cx = 400;

    // --- 1. BAYANGAN PEDANG (ellipse) ---
    p.noStroke();
    p.fill(190, 190, 190);
    p.ellipse(cx, 440, 160, 20);

    // --- 2. BILAH PEDANG / BLADE (triangle & rect) ---
    // Ujung Runcing Bilah (triangle)
    p.fill(220, 230, 245); // Logam perak terang
    p.triangle(cx, 50, cx - 30, 100, cx + 30, 100);

    // Badan Utama Bilah (rect)
    p.rect(cx - 30, 100, 60, 200);

    // Sisi Gelap Bilah untuk Efek 3D / Sisi Kiri (rect & triangle)
    p.fill(180, 195, 215); // Warna perak sedikit lebih gelap
    p.triangle(cx, 50, cx - 30, 100, cx, 100);
    p.rect(cx - 30, 100, 30, 200);

    // Garis Tengah / Siku Bilah (line)
    p.stroke(140, 155, 175);
    p.strokeWeight(3);
    p.line(cx, 50, cx, 300);

    // --- 3. GUARD / PELINDUNG TANGAN (rect, triangle, circle) ---
    p.noStroke();
    // Pelindung Utama (rect)
    p.fill(210, 160, 30); // Emas
    p.rect(cx - 90, 300, 180, 20);

    // Sayap Pelindung Kiri & Kanan yang Runcing Ke Atas (triangle)
    p.triangle(cx - 90, 300, cx - 90, 320, cx - 110, 280);
    p.triangle(cx + 90, 300, cx + 90, 320, cx + 110, 280);

    // Permata / Detail Tengah Guard (circle & point)
    p.fill(220, 30, 30); // Merah Delima
    p.circle(cx, 310, 22);

    p.stroke(255);
    p.strokeWeight(4);
    p.point(cx - 3, 307); // Kilauan permata
    p.noStroke();

    // --- 4. GAGANG / HANDLE (rect & line) ---
    // Pegangan Utama (rect)
    p.fill(80, 45, 20); // Kayu / Kulit Cokelat Tua
    p.rect(cx - 15, 320, 30, 80);

    // Lilitan Tali / Grip pada Gagang (line)
    p.stroke(200, 170, 120); // Tali Cokelat Terang
    p.strokeWeight(4);
    p.line(cx - 15, 335, cx + 15, 345);
    p.line(cx - 15, 355, cx + 15, 365);
    p.line(cx - 15, 375, cx + 15, 385);
    p.noStroke();

    // --- 5. POMMEL / KNOP PENYEIMBANG (circle & rect) ---
    p.fill(210, 160, 30); // Emas (Serasi dengan Guard)
    p.circle(cx, 405, 34);

    // Inti Knop Bawah (circle)
    p.fill(150, 100, 10);
    p.circle(cx, 405, 18);

    // --- 6. EFEK KILAUAN BILAH / SPARKLE (triangle) ---
    // Kilau Cahaya di Ujung Bilah Kanan
    p.fill(255, 255, 255, 220); // Putih semi-transparan
    p.triangle(cx + 10, 80, cx + 18, 90, cx + 10, 100);
    p.triangle(cx + 10, 80, cx + 2, 90, cx + 10, 100);
  };
}, "pedang");