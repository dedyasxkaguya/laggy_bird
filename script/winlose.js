function isColliding(rect1, rect2) {
    return rect1.left < rect2.right && // rect1 di sebelah kiri rect2
    rect1.right > rect2.left && // rect1 di sebelah kanan rect2
           rect1.top < rect2.bottom && // rect1 di atas rect2
           rect1.bottom > rect2.top;   // rect1 di bawah rect2
        }

        
        setInterval(() => {

    const playerRect = player.getBoundingClientRect();
    
    walls.forEach((wall) => {
        const wallRect = wall.getBoundingClientRect();
        
        if (isColliding(playerRect, wallRect)) {
            console.log("KENA! Objek Bertabrakan!");
            lose();
        }
    });

}, 16); 
obstacle.addEventListener("animationend", () => {
    win();
});

let duration = 30;
const animDuration = obstacle.style.animation = `play ${duration}s linear forwards`;
const anim = document.getAnimations("play")
const win = () => {
    
    setTimeout(() => {
        alert("🎉 Menang");
    }, 1000);
}

const lose = () => {
    alert("❌ Kamu Kalah!");
    navigation.reload()
}


console.log(anim)