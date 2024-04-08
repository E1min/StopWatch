let startbtn = document.querySelector("button:nth-child(1)");
let stoptbtn = document.querySelector("button:nth-child(2)");
let resetbtn = document.querySelector("button:nth-child(3)");
let display = document.querySelector(".display-time");

let seconds = 0;
let minute = 0;



startbtn.addEventListener("click", () => {
    let time = setInterval(() => {
        seconds += 1
        if (seconds < 10) {
            display.textContent = `0${minute}:0${seconds}`
        }
        else if (seconds >= 10 && seconds < 60) {
            display.textContent = `0${minute}:${seconds}`
        } else if (seconds > 59) {
            seconds = 0;
            minute += 1;
            display.textContent = `0${minute}:0${seconds}`
        }
    }, 1000)

    stoptbtn.addEventListener("click", () => {
        clearInterval(time);
        if (seconds < 10) {
            display.textContent = `0${minute}:0${seconds}`
        }
        else {
            display.textContent = `0${minute}:${seconds}`
        }

    });
    resetbtn.addEventListener("click", () => {
        clearInterval(time)
        seconds = 0;
        minute = 0;
        display.textContent = `00:00`
    });
});


