new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("robot");
  };

  p.draw = function () {
    p.background(235);

    // Antena
    p.stroke(100);
    p.strokeWeight(4);
    p.line(400, 110, 400, 140);
    p.noStroke();
    p.fill(220, 50, 50); // Bola merah
    p.circle(400, 100, 20);

    // Kaki
    p.fill(100, 110, 120);
    p.rect(345, 340, 30, 70); // Kaki kiri
    p.rect(425, 340, 30, 70); // Kaki kanan

    // Tangan
    p.rect(290, 230, 30, 80); // Tangan kiri
    p.rect(480, 230, 30, 80); // Tangan kanan

    // Badan
    p.fill(160, 175, 190);
    p.rect(330, 220, 140, 120);

    // Layar di dada
    p.fill(40, 50, 60);
    p.rect(350, 240, 100, 70);

    // Tombol lampu di dada
    p.fill(50, 200, 80);  // Hijau
    p.circle(375, 275, 18);
    p.fill(230, 50, 50);  // Merah
    p.circle(425, 275, 18);

    // Leher
    p.fill(100, 110, 120);
    p.rect(380, 195, 40, 25);

    // Kepala
    p.fill(180, 195, 210);
    p.rect(340, 140, 120, 60);

    // Mata Kiri & Kanan (Mata cyan khas robot)
    p.fill(0, 200, 255);
    p.circle(375, 170, 22);
    p.circle(425, 170, 22);

    // Pupil hitam kecil
    p.fill(0);
    p.circle(375, 170, 8);
    p.circle(425, 170, 8);

    // Mulut
    p.stroke(80);
    p.strokeWeight(3);
    p.line(380, 190, 420, 190);
  };
}, "robot");