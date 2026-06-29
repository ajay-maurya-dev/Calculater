let input = document.getElementById("input")
let button = document.querySelectorAll(".btns")
let mode = document.getElementById("mode")

mode.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        mode.innerText = "Light";
    } else {
        mode.innerText = "Dark";
    }
});

button.forEach((btn) => {
    btn.addEventListener("click", () => {

        if (btn.innerText === "=") {
            input.value = eval(input.value); // total
        } 
        else if (btn.innerText === "C") {
            input.value = ""; // clear
        } 
        else {
            input.value += btn.innerText; // add value
        }

    });
});

