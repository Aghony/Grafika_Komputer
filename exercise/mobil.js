new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("mobil");
  };

  p.draw = function () {
    // Canvas & Background Wajib
    p.background(235);

    // 1. Jalan Raya (Menggunakan rect dan line)
    p.noStroke();
    p.fill(80); // Warna aspal abu-abu gelap
    p.rect(0, 340, 800, 160);

    // Marka Jalan (Garis Putus-Putus)
    p.stroke(255);
    p.strokeWeight(6);
    for (let i = 0; i < 8; i++) {
      let x = i * 110 + 20;
      p.line(x, 420, x + 60, 420);
    }

    // --- BADAN MOBIL ---

    // 2. Kabin Atas / Atap (Menggunakan rect)
    p.noStroke();
    p.fill(40, 120, 200); // Warna biru tua
    p.rect(260, 190, 280, 80);

    // Kaca Depan & Belakang (Kaca Kiri & Kanan menggunakan rect)
    p.fill(180, 230, 255); // Warna kaca biru muda
    p.rect(280, 205, 110, 55); // Kaca belakang
    p.rect(410, 205, 110, 55); // Kaca depan

    // 3. Body Utama Mobil (Menggunakan rect)
    p.fill(220, 50, 50); // Warna merah cerah
    p.rect(180, 260, 440, 90);

    // Lampu Depan & Belakang (Menggunakan ellipse & rect)
    p.fill(255, 220, 50); // Lampu depan kuning
    p.ellipse(620, 290, 15, 30);

    p.fill(180, 0, 0); // Lampu belakang merah tua
    p.rect(180, 280, 10, 30);

    // Gagang Pintu (Menggunakan line)
    p.stroke(50);
    p.strokeWeight(4);
    p.line(380, 280, 405, 280);
    p.line(500, 280, 525, 280);

    // 4. Roda Mobil (Menggunakan minimal 2 circle + detail Velg)
    p.noStroke();

    // Loop untuk menggambar 2 Roda (Kiri: x=280, Kanan: x=520)
    for (let i = 0; i < 2; i++) {
      let posX = 280 + i * 240;
      let posY = 350;

      // Ban Luar (Hitam)
      p.fill(30);
      p.circle(posX, posY, 90);

      // Velg Luar (Abu-abu terang)
      p.fill(200);
      p.circle(posX, posY, 50);

      // Baut / Inti Velg (Abu-abu gelap)
      p.fill(80);
      p.circle(posX, posY, 20);

      // Detail Titik Baut (Menggunakan point)
      p.stroke(255);
      p.strokeWeight(4);
      p.point(posX - 10, posY);
      p.point(posX + 10, posY);
      p.point(posX, posY - 10);
      p.point(posX, posY + 10);
      p.noStroke();
    }
  };
}, "mobil");
