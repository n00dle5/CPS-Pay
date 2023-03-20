// fetch from https://cps-pay.l0stidi0t.repl.co/{school}/{lastname}/{job}/{fte}
// example: https://cps-pay.l0stidi0t.repl.co/lincoln/Smith/teacher/1

let school = document.getElementById("school");
let lastname = document.getElementById("last-name");
let job = document.getElementById("job");
let fte = document.getElementById("fte");
let submit = document.getElementById("submit");

submit.addEventListener("click", () => {
    console.log(school.value, lastname.value, job.value, fte.value);

    let url = `https://cps-pay.l0stidi0t.repl.co/${school.value}/${lastname.value}/${job.value}/${fte.value == "all" ? "all" : (fte.value == "Full-Time" ? 1 : 0.5)}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            document.getElementById("pay").innerHTML = data.pay;
        });
    }
);
