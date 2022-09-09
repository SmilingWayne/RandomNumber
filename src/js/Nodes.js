class Ball {
    constructor(x, y, dx, dy, radius, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.g = 2;
        this.color = color;
    }
}


class Particle{
    constructor(x, y, radius, color) {
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
    }
}


class Circle {
    constructor(x, y, radius, dx, dy, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = color;
    }

}



export default { Ball, Particle , Circle}
