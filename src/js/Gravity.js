var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
var c = canvas.getContext('2d')
var mouse = {
    x: undefined,
    y: undefined

}

var colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#298089',
];

var gravity = 1
var fraction = 0.80;

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    init();
})

window.addEventListener('click', function () {
    init();
});


function randomColor(color) {
    return color[Math.floor(Math.random() * color.length)];
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function Ball(x, y, dx, dy, radius, color) {
    this.x = x;
    this.y = y;


    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.g = 2;

    this.color = color;


    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = "blue";
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }

    this.update = function () {

        if (this.y + this.radius + this.dy > canvas.height) {
            this.dy = -this.dy * fraction;
        }
        else {
            this.dy += gravity;
        }
        if (this.x + this.radius + this.dx >= canvas.width ||
            this.x - this.radius + this.dx <= 0) {
            this.dx = -this.dx;
        }
        this.y += this.dy;
        this.x += this.dx;
        this.draw();
    }
}


// var circle = new Circle(200, 200, 30, 5, 5);
// circle.draw();


var ball;
var ballArray = []
function init() {
    ballArray = []
    for (var i = 0; i < 300; i++) {

        var radius = randomIntFromRange(8, 25);
        var x_ = randomIntFromRange(radius, canvas.width - radius - 5);
        var y_ = randomIntFromRange(radius, canvas.height - radius - 5);
        var dx_ = randomIntFromRange(-2, 2);
        ballArray.push(new Ball(x_, y_, dx_, 2, radius, randomColor(colorArray)))
    }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    for (var i = 0; i < ballArray.length; i++) {
        ballArray[i].update();
    }
    // ball.update();
}

init();
animate();
// animate();