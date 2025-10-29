let walls = document.querySelectorAll(".walls")
let arrPosition = []
walls.forEach((wall) => {
    let height = Math.random() * 100 / 2
    arrPosition.push(height)
    if (height > 40) {
        height = 40 - Math.random() * 10
    }
    wall.style.height = `${height}dvh`
})
// console.table(arrPosition)