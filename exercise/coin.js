new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("coin");
  };

  p.draw = function () {
    p.background(235);

    // Bayangan bawah
    p.noStroke();
    p.fill(190);
    p.ellipse(400, 380, 180, 30);

    // Lingkaran luar koin (pinggiran emas gelap)
    p.fill(210, 150, 0);
    p.circle(400, 240, 200);

    // Lingkaran tengah koin (emas terang)
    p.fill(255, 200, 0);
    p.circle(400, 240, 180);

    // Lingkaran dalam / inset koin
    p.fill(255, 220, 50);
    p.circle(400, 240, 130);

    // Simbol Bintang di Tengah Koin
    p.fill(210, 150, 0);
    
    // Segitiga bintang atas & bawah
    p.triangle(400, 195, 380, 255, 420, 255);
    p.triangle(400, 285, 380, 225, 420, 225);

    // Kilauan cahaya koin (potongan ellipse transparan di pojok)
    p.fill(255, 255, 255, 150);
    p.ellipse(350, 190, 40, 20);
  };
}, "coin");