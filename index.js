// fetch from https://cps-pay.l0stidi0t.repl.co/{school}/{lastname}/{job}/{fte}
// example: https://cps-pay.l0stidi0t.repl.co/lincoln/Smith/teacher/1

let school = document.getElementById("school");
let lastname = document.getElementById("last-name");
let job = document.getElementById("job");
let fte = document.getElementById("fte");
let submit = document.getElementById("submit");
let dataDiv = document.getElementById("data");

submit.addEventListener("click", () => {
    console.log(school.value, lastname.value, job.value, fte.value);
    getPay(school, lastname, job, fte).then(data => {
        console.log(data);
        dataDiv.innerHTML = data;
    });
});

async function getPay(school, lastname, job, fte) {
    let url = `https://cps-pay.l0stidi0t.repl.co/${school.value}/${lastname.value}/${job.value}/${fte.value == "all" ? "all" : (fte.value == "full-time" ? 1 : 0.5)}`;
    let res = await fetch(url);
    let data = await res.json();
    return data;
}