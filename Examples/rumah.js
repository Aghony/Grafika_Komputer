    new p5(function(p) {
        p.setup = function() {
            p.createCanvas(800, 500).parent("contoh_rumah");
        };

        p.draw = function() {
            p.background(235)
            p.noStroke();

            // Tanah
            p.fill(90, 170, 90);
            p.rect(0, 390, 800, 110);

            // Badan Rumah
            p.fill(230, 180, 120);
            p.rect(280, 220, 240, 170);

            // Atap
            p.fill(160, 70, 60);
            p.triangle (250, 220, 400, 100, 550, 220);

            // Pintu
            p.fill(100, 60, 40);
            p.rect(370, 300, 60, 90);

            // Jendela
            p.fill(120, 200, 230);
            p.rect(305, 260, 45, 45);
            p.rect(450, 260, 45, 45);
        };

    }, 'Contoh_rumah');