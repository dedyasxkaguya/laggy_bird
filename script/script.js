const player = document.getElementById("player")
const computedStyle = window.getComputedStyle(player)
let windowHeight = window.innerHeight
let player_x = computedStyle.right
let player_y = computedStyle.bottom
player_y = parseFloat((player_y).split(".")[0])

setInterval(() => {
    if(player_y>0){
        player_y-=12
        player.style.bottom=`${player_y}px`
        // console.log(player_y)
    }
}, 100);
document.addEventListener('keyup',(k)=>{
    // console.log(k.key)
    if(k.key.toLowerCase()=='enter' || k.key.toLowerCase()=='arrowup'){
        if(player_y<(windowHeight - 100)){
            console.log(player_y)
            player_y+=60
            player.style.bottom=`${player_y}px`
        }
    }
})
