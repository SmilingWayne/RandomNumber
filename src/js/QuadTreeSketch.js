

function setup() {
    createCanvas(1200, 1200);
    let boundary = new Rectangle(600, 600, 1200, 1200)
    qt = new QuadTree(boundary, 5);

}

function draw() {
    if (mouseIsPressed) {
        for (let i = 0; i < 5; i++) {
            let m = new Point(mouseX + random(-20, 20), mouseY + random(-20, 20))
            qt.insert(m);
        }
    }
    background(0);
    qt.show();
}