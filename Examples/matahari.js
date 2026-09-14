new p5(function(p) {

    p.setup = function() {
        p.createCanvas(800, 500).parent("contoh_matahari");
    };

    p.draw = function () {
        p.background(235);

        p.fill(255, 200, 0);
        p.noStroke();
        p.circle(400, 255, 120);

        p.stroke(255, 180, 0);
        p.strokeWeight(5);

        p.line(400, 160, 400, 100);
        p.line(400, 340, 400, 400);
        p.line(310, 250, 250, 250);
        p.line(490, 250, 550, 250);

        p.line(336, 186, 294, 144);
        p.line(464, 186, 506, 144);
        p.line(336, 314, 294, 356);
        p.line(464, 314, 506, 356);
    };
}, 'contoh_matahari')