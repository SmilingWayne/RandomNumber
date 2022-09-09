
let grid;


// Unfinished
function setup() {
    createCanvas(400, 400);
    grid = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    addNumber()
    addNumber();


}

function addNumber() {
    let options = [];
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                options.push({
                    x: i,
                    y: j
                });
            }
        }
    }
    if (options.length > 0) {

        let spot = random(options);
        let r = random(1);
        grid[spot.x][spot.y] = r > 0.5 ? 2 : 4;
    }
}

function slide(row) {
    let arr = row.filter(val => val)
    let missing = 4 - arr.length;
    let zeros = Array(missing).fill(0)
    arr.push(zeros)
    return arr;
}

function drawGrid() {

    let w = 100;
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            
            noFill();
            strokeWeight(2);
            stroke(0)
            rect(i * w, j * w, w, w);
            let val = grid[i][j];
            if (grid[i][j] !== 0) {
                textAlign(CENTER, CENTER);
                textSize(64);
                fill(0);
                noStroke();
                text(val, i * w + w / 2, j * w + w / 2);
            }
        }
    }

}

function draw() {
    background(255);
    drawGrid()

}