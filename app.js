const colors = ["#001f3f", "#0074D9", "#7FDBFF", "#39CCCC", "#3D9970", "#2ECC40", "#01FF70", "#FFDC00", "#FF851B", "#FF4136", "#85144b", "#F012BE", "#B10DC9", "#111111", "#DDDDDD"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length); 
}

btn.addEventListener('click', function(){
    //pegar um número entre 0 - 3 para indicar uma posição na array
    const RandomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[RandomNumber];
    color.textContent = colors[RandomNumber];
});

