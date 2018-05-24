var button1 = document.getElementById("button-1");
var button2 = document.getElementById("button-2");
var button3 = document.getElementById("button-3");
var heading = document.getElementById("heading");

changecolor = function (color) {
    return function () {
        heading.style.color = color;
    }
};
button1.onclick = changecolor("red");
button2.onclick = changecolor("green");
button3.onclick = changecolor("blue");

increment = function () {
    i = parseInt(event.target.innerHTML);
    event.target.innerHTML = i + 1;

};
buttons = document.getElementsByClassName("increment-button");
for (var i = 0; i < buttons.length; i++) {
    button = buttons [i];
    button.addEventListener("click", increment);
}
button1.addEventListener("click", changecolor("red"));
button2.addEventListener("click", changecolor("aqua"));
button3.addEventListener("click", changecolor("silver"));
