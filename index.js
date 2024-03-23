let school = document.getElementById("school");
let lastname = document.getElementById("last-name");
let job = document.getElementById("job");
let fte = document.getElementById("fte");
let submit = document.getElementById("submit");
let dataDiv = document.getElementById("data");

submit.addEventListener("click", () => {
    console.log(school.value, lastname.value, job.value, fte.value);
    getPay(school, lastname, job, fte).then(data => {
        // format the data into a table
        dataDiv.innerHTML = `
            <table class="data">
                <tr>
                    <th style="padding: 15px">School</th>
                    <th style="padding: 15px">Full/Part-Time</th>
                    <th style="padding: 15px">Annual Salary</th>
                    <th style="padding: 15px">Annual Benefits</th>
                    <th style="padding: 15px">Job Title</th>
                    <th style="padding: 15px">Name</th>
                </tr>
                ${data.map(person => `
                    <tr>
                        <td>${person[0]}</td>
                        <td>${person[1] == 1 ? "Full-Time" : "Part-Time"}</td>
                        <td>${"$" + person[2].toLocaleString("en-US")}</td>
                        <td>${"$" + person[3].toLocaleString("en-US")}</td>
                        <td>${person[4]}</td>
                        <td>${person[5]}</td>
                    </tr>
                `).join("")}
            </table>
        `;
    });
});

async function getPay(school, lastname, job, fte) {
    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        mode: 'cors'
    }

    if (school.value.replace(/\s+/g, '') == "") {
        school.value = "Default";
    }

    if (lastname.value.replace(/\s+/g, '') == "") {
        lastname.value = "Default";
    }

    let url = `https://06062022.xyz/${school.value}/${lastname.value}/${job.value}/${fte.value == "all" ? "all" : (fte.value == "full-time" ? 1 : 0.5)}`;
    let res = await fetch(url, requestOptions);
    let data = await res.json();
    return data;
}
