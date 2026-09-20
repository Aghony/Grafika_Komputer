new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("rumah");
  };

  p.draw = function () {
    // Background wajib asli (235)
    p.background(235);

    // Tanah
    p.noStroke();
    p.fill(120, 180, 90);
    p.rect(0, 420, 800, 80);

    // Badan rumah
    p.fill(220, 170, 100);
    p.rect(250, 230, 300, 190);

    // Atap
    p.fill(150, 70, 50);
    p.triangle(210, 230, 400, 100, 590, 230);

    // Pintu
    p.fill(100, 60, 40);
    p.rect(370, 310, 60, 110);

    // Gagang pintu (Dibuat sebelum stroke aktif agar tidak terkena garis hitam)
    p.fill(240, 190, 50);
    p.circle(415, 365, 10);

    // Jendela (Loop digabung dalam 1 tempat agar posisi garis tidak geser)
    for (let i = 0; i < 2; i++) {
      let x = 285 + i * 160;
      // Kaca jendela
      p.noStroke();
      p.fill(120, 200, 230);
      p.rect(x, 285, 70, 60);

      // Detail garis jendela
      p.stroke(80);
      p.strokeWeight(3);
      p.line(x + 35, 285, x + 35, 345); 
      p.line(x, 315, x + 70, 315); 
    }
  };
}, "rumah");
