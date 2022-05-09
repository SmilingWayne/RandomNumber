// import * as dat from 'dat.gui'
import { GUI } from 'dat.gui'
const gui = new GUI()
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

const wave = {
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100
}
gui.add(wave, 'y', 0, canvas.height)
gui.add(wave, 'length', -0.01, 0.01)
gui.add(wave, 'amplitude', -300, 300)

canvas.width = innerWidth
canvas.height = innerHeight



function animate() {
    // removeEventListener
    requestAnimationFrame(animate)
    c.beginPath()
    c.moveTo(0, canvas.height / 2);

    for (let i = 0; i < canvas.width; i++) {
        c.lineTo(i, canvas.height / 2 + Math.sin(i * wave.length) * wave.amplitude)
    }
    c.stroke()
}
animate()