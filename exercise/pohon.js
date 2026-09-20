new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("pohon");
  };

  p.draw = function () {
    p.background(235);

    // Tanah
    p.noStroke();
    p.fill(120, 180, 90);
    p.rect(0, 380, 800, 120);

    // Batang
    p.fill(120, 70, 35);
    p.rect(360, 200, 80, 190);

    p.stroke(90, 50, 25);
    for (let i = 0; i < 3; i++) {
      let x = 380 + i * 20;
      p.line(x, 240, x, 100);
    }

    p.noStroke();

    p.fill(40, 140, 60);
    for (let i = 0; i < 5; i++) {
      let x = 320 + i * 40;
      let y = 180;
      p.circle(x, y, 100);
    }

    p.fill(60, 180, 80);
    for (let i = 0; i < 3; i++) {
      let x = 360 + i * 40;
      let y = 125;
      p.circle(x, y, 90);
    }

    p.fill(80, 200, 90);
    p.circle(400, 85, 80);
  };
}, "pohon");
