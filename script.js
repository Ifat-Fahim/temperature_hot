const api = {
    key: "47f7cea6d9b22faaf37c62334c85e318",
    baseurl: "https://api.openweathermap.org/data/2.5/",
};

// Selectors
const searchBtn = document.getElementById("search-btn");
const searchBox = document.getElementById("search-box");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const main = document.getElementById("main");
const icon = document.getElementById("icon");

// Event listeners
searchBtn.addEventListener("click", () => {
    getResults(searchBox.value);
});
searchBox.addEventListener("keypress", (e) => {
    if (e.keyCode == 13) {
        e.preventDefault();
        getResults(searchBox.value);
    }
});
// Fetch api
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&&APPID=${api.key}`)
        .then((res) => res.json())
        .then((data) => {
            getData(data);
            console.log(data);
        });
}

//Changing HTML file dynamically
function getData(info) {
    city.innerText = info.name;
    temp.innerText = info.main.temp;
    main.innerText = info.weather[0].main;
    icon.src = `https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`;
}
