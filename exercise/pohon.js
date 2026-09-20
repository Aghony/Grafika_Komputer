new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("pohon");
  };

  p.draw = function () {
    p.background(235);

    p.noStroke();
    p.fill(255, 200, 0);
    p.rect(0, 330, 600, 70);

    p.fill(120, 70, 35);
    p.rect(270, 190, 60, 140);

    p.fill(50, 160, 70);

    for (let i = 0; i < 5; i++) {
      let x = 220 + i * 40;
      let y = 190;

      p.circle(x, y, 100);
    }

    for (let i = 0; i < 3; i++) {
      let x = 260 + i * 40;
      let y = 135;

      p.circle(x, y, 100);
    }

    p.stroke(80, 45, 25);
    p.strokeWeight(4);

    for (let i = 0; i < 3; i++) {
      let x = 285 + i * 15;

      p.line(x, 220, x, 310);
    }
  };
}, 'pohon');
