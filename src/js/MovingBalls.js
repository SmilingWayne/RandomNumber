var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight

var c = canvas.getContext('2d')


var maxRadius = 40
var minRadius = 10;
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
// c.fillRect(100, 100, 100, 100)
window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // console.log("HD");
    // console.log(event)

})

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    init();
})
//Line
// c.beginPath()
// c.moveTo(50, 300) 
// c.lineTo(300, 100)
// c.strokeStyle = "#fa34a3"
// c.stroke();


// Circles
// for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = "blue";
//     c.stroke();
// }

var circleArray = []
function init() {
    circleArray = []
    for (var i = 0; i < 400; i++) {
        var radius = Math.random() * 10 + 3;
        var x = Math.random() * (innerWidth - radius * 2) + radius;
        var y = Math.random() * (innerHeight - radius * 2) + radius;
        var dx = (Math.random() - 0.5) * 5;
        var dy = (Math.random() - 0.5) * 5

        while (x + radius > innerWidth || x - radius < 0) {
            x = Math.random() * innerWidth;
        }
        while (y + radius > innerHeight || y - radius < 0) {
            y = Math.random() * innerHeight;
        }
        circleArray.push(new Circle(x, y, radius, dx, dy));
    }

}


function Circle(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)]


    this.draw = function () {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = "blue";
        c.fillStyle = this.color;
        c.stroke();
        c.fill();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        //interactivity

        if ((mouse.x - this.x < 50 && mouse.x - this.x > - 50) && (mouse.y - this.y < 50 && mouse.y - this.y > -50)) {
            if (this.radius < maxRadius)
                this.radius += 1;
        }
        else if (this.radius > minRadius) {
            this.radius -= 1;
        }
        this.draw();
    }
}


// var circle = new Circle(200, 200, 30, 5, 5);
// circle.draw();



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight)
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();
animate();