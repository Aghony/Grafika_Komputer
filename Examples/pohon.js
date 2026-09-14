new p5(function(p) {

    p.setup = function() {
        p.createCanvas(800, 500).parent("contoh_pohon");
    };

    p.draw = function() {
        p.background(235);

        p.noStroke();
        p.fill(90, 170, 90);
        p.rect(0, 390, 800, 110);

        p.fill(120, 75, 40);
        p.rect(370, 250, 60, 140);

        p.fill(50, 160, 70);
        p.circle(350, 220, 110);
        p.circle(420, 210, 130);
        p.circle(480, 235, 105);
        p.circle(395, 160, 120);
    };
}, 'contoh_pohon');
