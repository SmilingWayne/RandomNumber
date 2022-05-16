var canvas = document.querySelector("canvas")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight
var c = canvas.getContext('2d')
var mouse = {
    x: window.innerWidth,
    y: window.innerHeight
}

window.addEventListener("mousemove", event => {
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;

})

var colorArray = [
    '#2C3E50',
    '#E74C3C',
    '#ECF0F1',
    '#3498DB',
    '#298089',
];
window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight
    init();
})
function randomColor(color) {
    return color[Math.floor(Math.random() * color.length)];
}

function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let particles;

function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = 0.05;
    this.distanceFromCenter = randomIntFromRange(60, 180);
    this.lastMouse = { x: x, y: y };

    this.update = () => {
        const lastPoint = {
            x: this.x,
            y: this.y
        }
        this.lastMouse.x += (mouse.x - this.lastMouse.x) * 0.08
        this.lastMouse.y += (mouse.y - this.lastMouse.y) * 0.08
        this.radians += this.velocity;
        this.x = this.lastMouse.x + Math.cos(this.radians) * this.distanceFromCenter;
        this.y = this.lastMouse.y + Math.sin(this.radians) * this.distanceFromCenter;
        this.draw(lastPoint);
    }
    this.draw = lastPoint => {
        c.beginPath();
        c.strokeStyle = this.color;
        c.lineWidth = this.radius;
        c.moveTo(lastPoint.x, lastPoint.y)
        c.lineTo(this.x, this.y)
        c.stroke()
        c.closePath();
    }
}
function init() {

    particles = []
    for (var i = 0; i < 70; i++) {
        const radius = (Math.random() * 2) + 2;
        particles.push(new Particle(canvas.width / 2, canvas.height / 2, radius, randomColor(colorArray)));
    }
    // console.log(particles)
}


function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'rgba(255,255,255,0.05)'

    c.fillRect(0, 0, innerWidth, innerHeight)
    particles.forEach(particle => {
        // makeConsoleLogger.
        // console.log("A")
        particle.update();
    })
}

init()
animate()


