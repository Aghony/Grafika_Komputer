new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("matahari");
  };

  p.draw = function () {
    p.background(235);

    // Matahari
    p.fill(255, 190, 40);
    p.noStroke();
    p.circle(300, 200, 100);

    // Sinar Matahari
    p.stroke(255, 140, 20);
    p.strokeWeight(5);

    for (let i = 0; i < 8; i++) {
      let angle = (i * p.TWO_PI) / 8;

      let x1 = 300 + p.cos(angle) * 65;
      let y1 = 200 + p.sin(angle) * 65;

      let x2 = 300 + p.cos(angle) * 100;
      let y2 = 200 + p.sin(angle) * 100;

      p.line(x1, y1, x2, y2);
    }

  };
}, "matahari");
