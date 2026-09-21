new p5(function (p) {
  p.setup = function () {
    p.createCanvas(800, 500).parent("pedang");
  };

  p.draw = function () {
    p.background(235);

    // 1. Bilah Pedang (triangle + rect)
    p.noStroke();
    p.fill(200, 210, 225); // Warna perak/logam
    
    // Ujung bilah yang runcing
    p.triangle(400, 80, 375, 130, 425, 130);
    // Badan bilah
    p.rect(375, 130, 50, 170);

    // Garis tengah bilah
    p.stroke(150, 160, 175);
    p.strokeWeight(3);
    p.line(400, 80, 400, 300);

    // 2. Pelindung Tangan / Guard (rect)
    p.noStroke();
    p.fill(220, 170, 40); // Warna emas/kuning
    p.rect(330, 300, 140, 20);

    // Permata hiasan di tengah guard
    p.fill(220, 40, 40); // Merah
    p.circle(400, 310, 16);

    // 3. Gagang Pedang / Handle (rect)
    p.fill(100, 60, 30); // Cokelat kayu
    p.rect(385, 320, 30, 70);

    // 4. Knop Bawah Gagang / Pommel (circle)
    p.fill(220, 170, 40); // Emas
    p.circle(400, 400, 30);
  };
}, "pedang");