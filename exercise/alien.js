new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("alien");
  };

  p.draw = function () {
    p.background(235);

    // Kaki
    p.fill(100, 200, 100);
    p.rect(360, 310, 20, 60);
    p.rect(420, 310, 20, 60);

    // Badan
    p.rect(350, 240, 100, 80);

    // Tangan
    p.stroke(100, 200, 100);
    p.strokeWeight(8);
    p.line(350, 260, 300, 230);
    p.line(450, 260, 500, 230);

    // Antena
    p.line(400, 150, 400, 100);
    p.noStroke();
    p.fill(255, 0, 0);
    p.circle(400, 100, 20);

    // Kepala (ellipse)
    p.fill(120, 220, 120);
    p.ellipse(400, 180, 160, 120);

    // Mata Besar (ellipse & circle)
    p.fill(0);
    p.ellipse(400, 170, 50, 60);

    p.fill(255);
    p.circle(390, 160, 15);

    // Mulut
    p.stroke(0);
    p.strokeWeight(3);
    p.line(385, 210, 415, 210);
  };
}, "alien");