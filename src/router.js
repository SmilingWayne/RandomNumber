import { createRouter ,createWebHistory} from 'vue-router'

const router = createRouter({
    routes:[{
            name:"MainPage",
            path:"/",
            
            'component':()=>import("./components/RandomGenerator.vue")
        },
        {
            name:"keyboard",
            path:"/keyboard",
            
            'component':()=>import("./components/KeyBoard.vue")

        },
        {
            name:"gravity",
            path:"/Gravity",
            
            'component':()=>import("./components/Gravity.vue")

        },
        {
            name:"random",
            path:"/RandomGenerator",
            
            'component':()=>import("./components/RandomGenerator.vue")

        },
        {
            name:"colliParticles",
            path:"/CollisionParticles",
            
            'component':()=>import("./components/CollisionParticles.vue")
        },
        {
            name:"minesweeper",
            path:"/Minesweeper",
            
            'component':()=>import("./components/Minesweeper.vue")
        },
        {
            name:"sinewaves",
            path:"/SineWaves",
            
            'component':()=>import("./components/SineWaves.vue")
        },
        {
            name:"movingballs",
            path:"/MovingBalls",
            
            'component':()=>import("./components/MovingBalls.vue")

        },

    ],
    history:createWebHistory()
})

export default router