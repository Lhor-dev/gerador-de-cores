const btn = document.getElementById('btn');
const color = document.querySelector(".color");
const dir = ["top", "bottom", "to left",  "to right", "to top right", "to top left", "to bottom left", "to bottom right"];

btn.addEventListener('click', function(){
    var randomColourOne = "#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);});
    var randomColourTwo = "#000000".replace(/0/g,function(){return (Math.floor(Math.random()*16)).toString(16);});
    var direction = dir[Math.floor(Math.random() * dir.length)];

    console.log(randomColourOne);
    console.log(randomColourTwo);

    var background = document.getElementById("background");
    background.style.backgroundImage = "linear-gradient("+ direction +" , "+ randomColourOne +" , "+ randomColourTwo +")";

    color.textContent = background.style.backgroundImage;
});