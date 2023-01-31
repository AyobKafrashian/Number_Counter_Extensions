var display = document.getElementById("display");
var num = 0
let anwser = 0;

document.addEventListener('keydown', (event) => {
    var name = parseInt(event.key);

    if (name == 0 ||
        name == 1 ||
        name == 2 ||
        name == 3 ||
        name == 4 ||
        name == 5 ||
        name == 6 ||
        name == 7 ||
        name == 8 ||
        name == 9) {

        if (num == 0)
            num = name;
        else if (num.toString().length == 1) {
            num = num + name.toString();
            anwser = anwser + parseInt(num);
            display.placeholder = anwser.toString();
            num = 0;
        }
        else {
            // alert(`Error`);
        }
    }

}, false);

document.getElementById("Clear").addEventListener("click", clear_func);

function clear_func() {
    display.placeholder = 0;
    anwser = 0;
}