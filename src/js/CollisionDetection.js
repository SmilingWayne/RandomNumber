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

// window.addEventListener('click', function () {
//     init();
// });


function randomColor(color) {
    return color[Math.floor(Math.random() * color.length)];
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
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


        this.draw();
    }
}


function getDistance(x1, y1, x2, y2) {
    // return
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}


// var circle = new Circle(200, 200, 30, 5, 5);
// circle.draw();


var ball;
var ballArray = []


let circle1
function init() {

    circle1 = new Circle(300, 300, 80, "red")
    circle2 = new Circle(undefined, undefined, 80, "blue")
    // ballArray = []
    // for (var i = 0; i < 300; i++) {

    //     var radius = randomIntFromRange(8, 25);
    //     var x_ = randomIntFromRange(radius, canvas.width - radius - 5);
    //     var y_ = randomIntFromRange(radius, canvas.height - radius - 5);
    //     var dx_ = randomIntFromRange(-2, 2);
    //     ballArray.push(new Ball(x_, y_, dx_, 2, radius, randomColor(colorArray)))
    // }
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    for (var i = 0; i < ballArray.length; i++) {
        ballArray[i].update();
    }
    circle1.update()
    circle2.x = mouse.x
    circle2.y = mouse.y
    circle2.update()

    let cur_dis = getDistance(circle1.x, circle1.y, circle2.x, circle2.y)
    if (cur_dis < circle1.radius + circle2.radius) {
        circle1.color = "pink"
    }
    else {
        circle1.color = "red"
    }
    // console.log(getDistance(circle1.x, circle1.y, circle2.x, circle2.y))
    // circle2.update();
    // ball.update();
}

init();
animate();