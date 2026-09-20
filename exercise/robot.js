new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("robot");
  };

  p.draw = function () {
    // Canvas & Background Wajib
    p.background(235);

    // Titik Pusat Robot (X = 400, Y = 250)
    let cx = 400;
    let cy = 250;

    // --- 1. ANTENA (line & circle) ---
    p.stroke(80);
    p.strokeWeight(5);
    p.line(cx, cy - 140, cx, cy - 110); // Tiang antena

    p.noStroke();
    p.fill(230, 50, 50); // Bola antena merah
    p.circle(cx, cy - 140, 18);

    // --- 2. KAKI (rect) ---
    p.fill(100, 110, 125); // Abu-abu gelap
    p.rect(cx - 55, cy + 100, 35, 80); // Kaki kiri
    p.rect(cx + 20, cy + 100, 35, 80); // Kaki kanan

    // Telapak Kaki (rect)
    p.fill(50, 60, 75);
    p.rect(cx - 65, cy + 165, 50, 20); // Sepatu kiri
    p.rect(cx + 15, cy + 165, 50, 20); // Sepatu kanan

    // --- 3. TANGAN (rect & circle) ---
    p.fill(100, 110, 125);
    p.rect(cx - 120, cy - 10, 30, 90); // Tangan kiri
    p.rect(cx + 90, cy - 10, 30, 90);  // Tangan kanan

    // Sendi Bahu (circle)
    p.fill(160, 175, 190);
    p.circle(cx - 105, cy - 10, 30);
    p.circle(cx + 105, cy - 10, 30);

    // Sarung Tangan / Capit (circle)
    p.fill(50, 60, 75);
    p.circle(cx - 105, cy + 85, 30);
    p.circle(cx + 105, cy + 85, 30);

    // --- 4. BADAN (rect) ---
    p.fill(160, 175, 190); // Logam abu-abu terang
    p.rect(cx - 80, cy - 20, 160, 130);

    // Layar/Dada Robot (rect)
    p.fill(40, 50, 65);
    p.rect(cx - 60, cy, 120, 90);

    // Indicator Light / Tombol Dada (circle & point)
    p.fill(50, 200, 100); // Lampu hijau
    p.circle(cx - 30, cy + 25, 20);
    p.fill(240, 180, 40); // Lampu kuning
    p.circle(cx, cy + 25, 20);
    p.fill(230, 50, 50);  // Lampu merah
    p.circle(cx + 30, cy + 25, 20);

    // Detail Garis Energi Dada (line)
    p.stroke(0, 220, 255);
    p.strokeWeight(4);
    p.line(cx - 40, cy + 65, cx + 40, cy + 65);
    p.noStroke();

    // --- 5. LEHER (rect) ---
    p.fill(90, 100, 115);
    p.rect(cx - 25, cy - 40, 50, 25);

    // --- 6. KEPALA (rect) ---
    p.fill(180, 195, 210);
    p.rect(cx - 65, cy - 110, 130, 75);

    // --- 7. MATA (ellipse & circle) ---
    // Frame Mata / Kacamata (rect)
    p.fill(30, 35, 45);
    p.rect(cx - 50, cy - 98, 100, 35);

    // Mata Kiri & Kanan (circle)
    p.fill(0, 220, 255); // Cyan menyala
    p.circle(cx - 25, cy - 80, 24);
    p.circle(cx + 25, cy - 80, 24);

    // Pupil / Kilau Mata (circle)
    p.fill(255);
    p.circle(cx - 28, cy - 83, 8);
    p.circle(cx + 22, cy - 83, 8);

    // --- 8. MULUT (line & point) ---
    p.stroke(80);
    p.strokeWeight(3);
    p.line(cx - 25, cy - 50, cx + 25, cy - 50); // Garis mulut

    // Gigi/Sela Robot (line)
    p.line(cx - 12, cy - 54, cx - 12, cy - 46);
    p.line(cx, cy - 54, cx, cy - 46);
    p.line(cx + 12, cy - 54, cx + 12, cy - 46);
  };
}, "robot");