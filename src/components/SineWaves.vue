<template>
    <div class = "Board">
        <canvas id = "canvas" ref = "canvas04" v-bind:width = "canvasWidth" v-bind:height = "canvasHeight">
        </canvas>
    </div>
</template>
<script>
import * as Dat from 'dat.gui'
export default {
    name: 'app',
    data(){
        return {
            canvasWidth:800,
            canvasHeight:500,
            ctx :null,
            dat : null,
            Dat_ : null,
            wave : null,
            strokeColor : null,
            strokeFolder : null,
            backgroundColor : null,
            bgColorFolder: null,
            increment :0.01,   
            timer: null,     
            
        };
    },
    // provide(){
    //     return{
    //         reload:this.reload
    //     }
    // },
    mounted() {
        
        this.init()
        // this.animate()
    },
    methods: {
        init() {
            this.ctx = this.$refs.canvas04.getContext('2d')
            this.Dat_ = new Dat.GUI()
            
            this.dat = this.Dat_.addFolder('wave')
            this.strokeFolder = this.Dat_.addFolder('strokeColor')
            this.bgColorFolder = this.Dat_.addFolder('backGroundColor')

            this.wave = {
                y:this.canvasHeight / 2,
                length: 0.01,
                amplitude :100,
                frequency : 0.01,
            }
            this.strokeColor = {
                h: 200,
                s:30,
                l:50
            }
            this.backgroundColor = {
                r:0,
                g:0,
                b:0,
                a:0.01
            }
            this.dat.add(this.wave, 'y', 0, this.canvasHeight)
            this.dat.add(this.wave, 'length', -0.01, 0.01)
            this.dat.add(this.wave, 'amplitude', -300, 300)
            this.dat.add(this.wave, 'frequency', -0.01, 1)
            this.dat.open()
            this.strokeFolder.add(this.strokeColor, 'h', 0, 255)
            this.strokeFolder.add(this.strokeColor, 's', 0, 100)
            this.strokeFolder.add(this.strokeColor, 'l', 0, 100)
            this.strokeFolder.open()


            this.bgColorFolder.add(this.backgroundColor, 'r', 0, 255)
            this.bgColorFolder.add(this.backgroundColor, 'g', 0, 255)
            this.bgColorFolder.add(this.backgroundColor, 'b', 0, 255)
            this.bgColorFolder.add(this.backgroundColor, 'a', 0, 1)
            this.bgColorFolder.open()
            this.animate()
           

        },


        animate(){
            // this.increment = this.wave.frequency
            this.timer = requestAnimationFrame(this.animate)
            this.ctx.fillStyle = `rgba(${this.backgroundColor.r},${this.backgroundColor.g},${this.backgroundColor.b},${this.backgroundColor.a})`
            this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
            this.ctx.beginPath()
            this.ctx.moveTo(0, this.canvasHeight / 2)
            for(let i = 0; i < this.canvasWidth; i ++ ){
                this.ctx.lineTo(i,
                this.wave.y + 1.4 * Math.sin(i * this.wave.length + this.increment) * this.wave.amplitude * Math.sin(this.increment))
            }
            this.ctx.strokeStyle = `hsl(${Math.abs(this.strokeColor.h * Math.sin(this.increment) )}, ${this.strokeColor.s}%, ${this.strokeColor.l}%)`
            this.ctx.stroke()
            this.increment = this.wave.frequency + this.increment
            
            console.log(this.increment)
        }
        
        
    },
    // TODO:
    unmounted() {
       
        // this.Dat_.domElement.style.display === '' ? this.hidden() : this.show(),
        // clearTimeout(this.animate)
        // this.animate.destroy()
        this.Dat_.destroy();
        this.dat = null;
        this.wave = null;
        this.strokeColor = null;
        this.strokeFolder = null;
        this.backgroundColor = null;
        this.bgColorFolder = null;
        this.ctx = null;
        
        this.Dat_ = null;
        cancelAnimationFrame(this.timer);
        console.log("YUUUUUUU");
        // console.log(this.ctx);
        // console.log(this.Dat_);
        

    },
    
}
   
</script>

<style>

    canvas {
            border: 1px solid black;
           
        }

       
</style>