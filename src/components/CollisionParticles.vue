<template>


<div class = "Board">
<canvas id = "canVas" 
    ref = "canvas02" 
    v-bind:width = "canvasWidth" 
    v-bind:height = "canvasHeight">

</canvas>

</div>
</template>

<script>

import Ball from "../js/Nodes.js"

export default {

    name : "canvas2",
    data() {
        return {
            canvasWidth : 800,
            canvasHeight: 500,
            colorArray:[ '#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#298089',],
            ctx: null,
            particles: [],
            timer : null,
        };
    },
    mounted(){
        this.init()
    },

    methods: {
        getDistance(x1, y1, x2, y2) {
            let xDistance = x2 - x1;
            let yDistance = y2 - y1;
            return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2))
        },
        rotate(velocity, angle) {
            return {
                x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
                y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
            }
        }  ,
        randomColor(){
            return this.colorArray[Math.floor(Math.random()* this.colorArray.length )]
        },
        randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        init(){
            this.ctx = this.$refs.canvas02.getContext('2d')
            for (let i = 0; i < 50; i++) {
                let radius = 15;
                let color = this.randomColor(this.colorArray)
                let x = this.randomIntFromRange(radius, this.canvasWidth - radius);
                let y = this.randomIntFromRange(radius, this.canvasHeight - radius);
                if (i != 0) {
                    for (let j = 0; j < this.particles.length; j++) {
                        if (this.getDistance(x, y, this.particles[j].x, this.particles[j].y) - radius * 2 < 0) {
                            x = this.randomIntFromRange(radius, this.canvasWidth - radius);
                            y = this.randomIntFromRange(radius, this.canvasHeight - radius);
                            j = -1;
                        }
                    }         
                }
                this.particles.push(new Ball.Particle(x, y, radius, color));
            }
            // console.log(this.particles)
            this.draw()
            this.animate()
        },

        draw(){
            this.particles.forEach(particle =>{
                this.ctx.beginPath()
                this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2, false)
                this.ctx.save();
                this.ctx.globalAlpha = particle.opacity;
                this.ctx.fillStyle = particle.color;
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.strokeStyle = particle.color;
                this.ctx.stroke();
                this.ctx.closePath();
            })

        },

        resolveCollision(particle, otherParticle) {
            const xVelosityDiff = particle.velocity.x - otherParticle.velocity.x;

            const yVelosityDiff = particle.velocity.y - otherParticle.velocity.y;
            const xDist = otherParticle.x - particle.x;
            const yDist = otherParticle.y - particle.y;
            if (xVelosityDiff * xDist + yVelosityDiff * yDist >= 0) {
                const angle = - Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);
                const m1 = particle.mass;
                const m2 = otherParticle.mass;
                const u1 = this.rotate(particle.velocity, angle);
                const u2 = this.rotate(otherParticle.velocity, angle);
                const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
                const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
                const vFinal1 = this.rotate(v1, -angle);
                const vFinal2 = this.rotate(v2, -angle);
                particle.velocity.x = vFinal1.x;
                particle.velocity.y = vFinal1.y;
                otherParticle.velocity.x = vFinal2.x;
                otherParticle.velocity.y = vFinal2.y;
                console.log("Collide")
            }
        },

        update(){
            this.draw();
            this.particles.forEach(particle =>{
                for(let i = 0; i < this.particles.length; i ++ ){
                    if (particle === this.particles[i]){
                        continue;
                    }
                    if (this.getDistance(particle.x, particle.y, this.particles[i].x, this.particles[i].y) - particle.radius * 2 < 0){
                        this.resolveCollision(particle, this.particles[i])

                    }
                }
                if (particle.x - particle.radius <= 0 || particle.x + particle.radius >= this.canvasWidth) {
                    particle.velocity.x = -particle.velocity.x;
                }
                if (particle.y - particle.radius <= 0 || particle.y + particle.radius >= this.canvasHeight) {
                    particle.velocity.y = -particle.velocity.y;
                }
                
                particle.x += particle.velocity.x;
                particle.y += particle.velocity.y;
            })

            
        },
        animate(){
            this.timer = requestAnimationFrame(this.animate);
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
            this.update()
            // console.log("Test")
        }
    },
    unmounted(){
        console.log("STOP!")
        this.particles = []
        cancelAnimationFrame(this.timer)
    }
}
</script>

<style>

</style>