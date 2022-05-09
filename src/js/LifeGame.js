
var mouse = {
    x: undefined,
    y: undefined

}
let grid;
let rows;
let cols;
let resolution = 10;
let size_X = 400;
let size_Y = 400;


document.addEventListener('keydown', function (e) {
    if (e.keyCode == 187) {
        // setup()
        size_X += 10 * resolution;
        size_Y += 10 * resolution;
        setup()
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 189) {
        // setup()
        size_X -= 10 * resolution;
        size_Y -= 10 * resolution;
        setup()
    }
})

document.addEventListener('keydown', function (e) {
    if (e.keyCode == 65) {
        // setup()
        const cur_times = size_X / resolution;
        if (resolution < 16) {
            resolution += 2;
            size_X = resolution * cur_times;
            size_Y = resolution * cur_times;
        }
        // resolution *= 2;
        setup()
    }
})
document.addEventListener('keydown', function (e) {
    if (e.keyCode == 68) {
        // setup()
        const cur_times = size_X / resolution;
        if (resolution > 4) {
            resolution -= 2;
            size_X = resolution * cur_times;
            size_Y = resolution * cur_times;
        }

    }
    setup()

})


window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})



function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < rows; i++) {
        arr[i] = new Array(rows);
    }
    return arr;

}



function setup() {
    // createCanvas(400, 400)

    var myCanvas = createCanvas(size_X, size_Y);
    myCanvas.parent("container");
    cols = width / resolution;
    rows = width / resolution;
    grid = make2DArray(cols, rows);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = floor(random(2))
        }
    }
}

function draw() {
    background(0)
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            let x = i * resolution;
            let y = j * resolution;
            if (grid[i][j] == 1) {
                fill(255)
                stroke(0)
                rect(x, y, resolution - 1, resolution - 1);
            }
        }
    }
    let next = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {

            let sum = 0;
            let neighbors = count(grid, i, j);

            let state = grid[i][j];

            if (state == 0 && neighbors == 3) {
                next[i][j] = 1;
            }
            else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
                next[i][j] = 0;
            }
            else {
                next[i][j] = state;
            }
        }

    }
    grid = next;
}

function count(grid, x, y) {
    let sum = 0;
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            let col = (x + i + cols) % cols;
            let row = (y + j + rows) % rows;
            sum += grid[col][row];
        }
    }
    sum -= grid[x][y];
    return sum;

}