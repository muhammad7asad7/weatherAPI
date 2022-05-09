const city = document.getElementById('city')
const cityTemp = document.getElementById('temp')

const nameOfCity = 'london';

const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${nameOfCity}&appid=d0097b40572987aa800d22357fc702de`


fetch(apiURL)
    .then(res => res.json())
    .then(data => {
        const name = data.name, temp = data.main.temp;

        city.innerHTML = name;
        cityTemp.innerHTML = temp;
    })
    .catch((error) => console.error(error));
