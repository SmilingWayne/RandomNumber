<template>


    <div class = "Board">
        <canvas id = "canvas" ref = "canvas01" v-bind:width = "canvasWidth" v-bind:height = "canvasHeight">

        </canvas>
    </div>
</template>
<script>
import Ball from "../js/Nodes.js"
export default {
    name: 'app',
    data(){
        return {
            canvasWidth:800,
            canvasHeight:500,
            colorArray:[ '#2C3E50', '#E74C3C', '#ECF0F1', '#3498DB', '#298089',],
            ballArray :[],
            ctx : null,
            gravity :1,
            timer : null,
            fraction: 0.8
        };

    },
    provide(){
        return{
            reload:this.reload
        }
    },

    mounted() {
        
        this.init();
    },
    methods: {
        
        init(){
            this.ctx = this.$refs.canvas01.getContext('2d')
            for(var i = 0; i < 10; i ++ ){
                var radius = this.randomIntFromRange(8, 20);
                var x_ = this.randomIntFromRange(radius, this.canvasWidth - radius - 5);
                var y_ = this.randomIntFromRange(radius, this.canvasHeight - radius - 5);
                var dx_ = this.randomIntFromRange(-2, 2);
                this.ballArray.push(new Ball.Ball(x_, y_, dx_, 2, radius, this.randomColor(this.colorArray)))
            }
            this.draw()
            this.animate()    
        },
        randomColor(){
            return this.colorArray[Math.floor(Math.random()* this.colorArray.length )]
        },
        randomIntFromRange(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        draw(){
            this.ballArray.forEach((element)=>{
                this.ctx.beginPath()
                this.ctx.arc(element.x, element.y, element.radius, 0, Math.PI * 2, false)
                this.ctx.strokeStyle = "blue";
                this.ctx.fillStyle = element.color;
                this.ctx.stroke();
                this.ctx.fill();
            })
        },

        update(){
            this.ballArray.forEach((element) =>{
                 if (element.y + element.radius + element.dy > this.canvasHeight) {
                    element.dy = -element.dy * this.fraction;
                }
                else {
                    element.dy += this.gravity;
                }
                if (element.x + element.radius + element.dx >= this.canvasWidth ||
                    element.x - element.radius + element.dx <= 0) {
                    element.dx = -element.dx;
                }
                element.y += element.dy;
                element.x += element.dx;
                this.draw();    
            })
            
        },
        animate(){
            this.timer = requestAnimationFrame(this.animate)
            this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
            this.update()
            console.log("SS")
        }
    },
    // TODO:
    unmounted() {
        console.log("STop")
        this.ballArray = []
        cancelAnimationFrame(this.timer)
    },
    
}
   
</script>

<style>

    canvas {
            border: 1px solid black;
           
        }

       
</style>