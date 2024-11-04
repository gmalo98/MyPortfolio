export const fadeIn=(direction,delay)=>{
    return{
        hidden: {
               y : direction ==='up' ? 40 : direction ==="down" ?-40 :0,
               x : direction ==='left' ? 60 : direction ==="right" ?-40 :0,
               opacity:0,
        },
        show:{
               x:0,
               y:0,
               opacity:1,
               transition:{
                type:"tween",
                duration:0.4,
                delay:delay,
                ease:[0.25,0.25,0.25,0.75],
                // ease:[0.25,0.35,0.45,0.75],
               }
        }
    }
    }