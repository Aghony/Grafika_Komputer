new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("mobil");
  };

  p.draw = function () {
    p.background(235);

    // Jalan raya
    p.noStroke();
    p.fill(100);
    p.rect(0, 360, 800, 140);

    // Marka jalan
    p.stroke(255);
    p.strokeWeight(4);
    p.line(100, 430, 250, 430);
    p.line(350, 430, 500, 430);
    p.line(600, 430, 750, 430);

    // Body mobil (rect)
    p.noStroke();
    p.fill(220, 50, 50); // Merah
    p.rect(200, 270, 400, 90);

    // Kabin / Atap mobil (rect)
    p.fill(180); // Abu-abu
    p.rect(280, 200, 240, 70);

    // Kaca mobil (rect)
    p.fill(150, 210, 240); // Biru muda
    p.rect(300, 210, 90, 50);
    p.rect(410, 210, 90, 50);

    // Lampu depan & belakang
    p.fill(255, 220, 0); // Kuning
    p.ellipse(600, 300, 15, 25);

    p.fill(150, 0, 0); // Merah tua
    p.rect(200, 290, 10, 25);

    // Roda mobil (circle)
    p.fill(30); // Ban hitam
    p.circle(290, 360, 80);
    p.circle(510, 360, 80);

    // Velg roda (circle)
    p.fill(200); // Abu-abu terang
    p.circle(290, 360, 40);
    p.circle(510, 360, 40);
  };
}, "mobil");