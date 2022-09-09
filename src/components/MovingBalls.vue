<template>

<div class = "Board">
    <canvas id = "canvas" ref = "canvas03" v-bind:width = "canvasWidth" v-bind:height = "canvasHeight">

    </canvas>
</div>

</template>

<script>

import Ball from "../js/Nodes.js"

export default {
    name : "canvas3",
    data() {
        return {
            canvasWidth : 800,
            canvasHeight: 500,
            colorArray:[ '#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#298089',],
            ctx: null,
            circleArray: [],
            maxRadius : 40,
            minRadius : 10, 
            timer : null,
        }
    },    
    mounted() { 
        this.init()
    },

    methods :{
        randomColor(){
            return this.colorArray[Math.floor(Math.random()* this.colorArray.length )]
        },
        randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        init(){
            this.ctx = this.$refs.canvas03.getContext('2d')
            for(let i = 0; i < 200; i ++ ){
                var radius = Math.random() * 10 + 3;
                var x = Math.random() * (innerWidth - radius * 2) + radius;
                var y = Math.random() * (innerHeight - radius * 2) + radius;
                var dx = (Math.random() - 0.5) * 5;
                var dy = (Math.random() - 0.5) * 5;
                var color = this.randomColor();
                while (x + radius + 0.5 > innerWidth || x - radius - 0.5 < 0) {
                    x = Math.random() * innerWidth;
                }
                while (y + radius + 0.5 > innerHeight || y - radius - 0.5 < 0) {
                    y = Math.random() * innerHeight;
                }
                this.circleArray.push(new Ball.Circle(x, y, radius, dx, dy, color ));
            }
            this.draw()
            this.animate()
        },
        draw(){
            this.circleArray.forEach(circle =>{
                this.ctx.beginPath()
                this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2, false)
                this.ctx.strokeStyle = "blue";
                this.ctx.fillStyle = circle.color;
                this.ctx.stroke();
                this.ctx.fill();
            })
        },
        update(){
            this.circleArray.forEach(circle =>{
                if (circle.x + circle.radius + 1 > this.canvasWidth || circle.x - circle.radius - 1 < 0) {
                    circle.dx = -circle.dx;
                    // console.log("SS")
                }
                if (circle.y + circle.radius + 1 > this.canvasHeight || circle.y - circle.radius - 1< 0) {
                    circle.dy = -circle.dy;
                    // console.log("S2S")
                }
                circle.x += circle.dx;
                circle.y += circle.dy;

                //interactivity

                // if ((this.mouse.x - circle.x < 50 && this.mouse.x - circle.x > - 50) && (this.mouse.y - circle.y < 50 && this.mouse.y - circle.y > -50)) {
                //     if (circle.radius < this.maxRadius)
                //         circle.radius += 1;
                // }
                // else if (circle.radius > this.minRadius) {
                //     circle.radius -= 1;
                // }
            })
            this.draw();

        },
        animate(){
            this.timer = requestAnimationFrame(this.animate)
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
            this.update()
            // console.log("AS")
        }
    },
    unmounted(){
        console.log("STOP!!")
        this.circleArray = []
        cancelAnimationFrame(this.timer)

    }
}

</script>
<style>

  canvas {
            border: 1px solid black;
           
        }

       
</style>