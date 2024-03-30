let button = document.querySelectorAll(".button");
let opt = document.querySelectorAll(".opt");
let input = document.querySelector("#inputBox");
button.forEach((element) => {
    element.addEventListener("click", (e) => {
        input.value += e.target.innerHTML;
    })
});
opt.forEach((element) => {
    element.addEventListener("click", (e) => {
        let val = e.target.innerHTML;
        if (val == "AC") {
            input.value = ""
        } else if (val == "DEL") {
            input.value = input.value.slice(0, -1);
        }
    }
    )

}
)
let Equal = document.querySelector(".equalBtn");
Equal.addEventListener("click", () => {
    if (input.value === "") {
        input.value = "";
    } else {
        input.value = eval(input.value);
    }
})