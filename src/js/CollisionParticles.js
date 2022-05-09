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


function getDistance(x1, y1, x2, y2) {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
}

function rotate(velocity, angle) {
    const rotatedVelocity = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    }
    return rotatedVelocity;
}


function resolveCollision(particle, otherParticle) {
    const xVelosityDiff = particle.velocity.x - otherParticle.velocity.x;

    const yVelosityDiff = particle.velocity.y - otherParticle.velocity.y;
    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;
    if (xVelosityDiff * xDist + yVelosityDiff * yDist >= 0) {
        const angle = - Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        const m1 = particle.mass;
        const m2 = otherParticle.mass;
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;
        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;

    }

}


function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
        x: (Math.random() - 0.5) * 5,
        y: (Math.random() - 0.5) * 5,
    }
    this.radius = radius;
    this.color = color;
    this.mass = 1;
    this.opacity = 0.2;

    this.draw = () => {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.save();
        c.globalAlpha = this.opacity;

        c.fillStyle = this.color;
        c.fill();
        c.restore();
        c.strokeStyle = this.color;
        c.stroke();
        c.closePath();

    }

    this.update = particles => {
        this.draw();
        for (let i = 0; i < particles.length; i++) {
            if (this === particles[i]) {
                continue;
            }
            if (getDistance(this.x, this.y, particles[i].x, particles[i].y) - this.radius * 2 < 0) {
                resolveCollision(this, particles[i])
                console.log("Colide")
            }
        }

        if (this.x - this.radius <= 0 || this.x + this.radius >= innerWidth) {
            this.velocity.x = -this.velocity.x;
        }
        if (this.y - this.radius <= 0 || this.y + this.radius >= innerHeight) {
            this.velocity.y = -this.velocity.y;
        }
        if (getDistance(mouse.x, mouse.y, this.x, this.y) < 120 && this.opacity <= 0.75) {
            this.opacity += 0.02
        }
        else if (this.opacity > 0.2) {
            this.opacity -= 0.02;
            this.opacity = Math.max(0.2, this.opacity);
        }
        // mouse TODO:
        this.x += this.velocity.x;
        this.y += this.velocity.y;

    }
}

let particles;
function init() {
    particles = []
    for (let i = 0; i < 200; i++) {
        let radius = 15;

        let color = randomColor(colorArray)
        let x = randomIntFromRange(radius, canvas.width - radius);
        let y = randomIntFromRange(radius, canvas.height - radius);
        if (i != 0) {
            for (let j = 0; j < particles.length; j++) {
                if (getDistance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
                    x = randomIntFromRange(radius, canvas.width - radius);
                    y = randomIntFromRange(radius, canvas.height - radius);
                    j = -1;
                }
            }
            // particles.push(new Particle(x, y, radius, color));
        }

        particles.push(new Particle(x, y, radius, color));

    }


}

function animate() {
    requestAnimationFrame(animate);


    // console.log(getDistance(circle1.x, circle1.y, circle2.x, circle2.y))
    // circle2.update();
    // ball.update();
    c.clearRect(0, 0, innerWidth, innerHeight)
    particles.forEach(particle => {

        particle.update(particles);
    });
}

init();
animate();