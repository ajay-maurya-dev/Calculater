let input = document.getElementById("input")
let button = document.querySelectorAll(".btns")

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

