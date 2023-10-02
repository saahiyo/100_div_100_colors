    let h1 = document.querySelector("h1");
// JavaScript code to create 100 div elements with random colors
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

for (let i = 0; i < 102; i++) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.style.backgroundColor = getRandomColor(); // Set a random background color
    document.body.appendChild(div);
}
gsap.from(".box",{
 x:80,
 opacity:0,
 stagger:0.5,
 duration:1
})
gsap.from("h1",{
 y:100,
 stagger:0.5,
 duration:1,
 opacity:0
})
