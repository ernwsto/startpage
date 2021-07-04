// Change this to your username
var username = "master";

if (localStorage.getItem('data') == null) var mode = "dark";
else mode = localStorage.getItem('data');

const determineGreet = hours => document.getElementById("greeting").innerText = `[ good ${hours < 12 ? "morning," : hours < 18 ? "afternoon," : "evening,"} ${username} ]`;

// ❯
// The same as "onload"
window.addEventListener('load', (event) => {
    let today = new Date();
    let time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    change_colors(mode);
    determineGreet(new Date().getHours());
    displayTime(time);
});

setInterval(function () {
    var today = new Date();
    var time = today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById("time").innerHTML = time;
}, 1000);

document.getElementById("mode").addEventListener("click", function () {
    if (mode == "dark") {
        change_colors("light");
        localStorage.setItem('data', 'light');
        data = localStorage.getItem('data');
        mode = data;
    }
    else {
        change_colors("dark");
        localStorage.setItem('data', 'dark');
        data = localStorage.getItem('data');
        mode = data;
    }
});

function displayTime(time) {
    document.getElementById("time").innerHTML = time;
}

function dark_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#1d2021";
    document.getElementById("greeting").style.color = "#ebdbb2";
    mode_id.src = "icons/light.png";
    mode_id.style.filter = "invert(100%) sepia(0%) saturate(1620%) hue-rotate(8deg) brightness(94%) contrast(88%)";
    for (i = 0; i < link.length; i++)
        link[i].style.color = "#ebdbb2";

}

function light_colors() {
    let link = document.getElementsByTagName('a');
    let mode_id = document.getElementById("mode");
    document.body.style.background = "#ebdbb2";
    document.getElementById("greeting").style.color = "#767283";
    mode_id.src = "icons/dark.png";
    mode_id.style.filter = "invert(58%) sepia(12%) saturate(482%) hue-rotate(148deg) brightness(94%) contrast(86%)";
    for (i = 0; i < link.length; i++)
        link[i].style.color = "#767283";
}

function change_colors(mode) {
    if (mode == "dark") light_colors();
    else dark_colors();
}

// duckduck go
//function duckSearch() {
//    var searchField = document.getElementById("searchField");
//    if (searchField && searchField.value) {
//        var query = escape (searchField.value);
//        window.location.href = "https://duckduckgo.com/?q=" + query;
//    }
//}
