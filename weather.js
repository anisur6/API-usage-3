const apiKey = `df0509741ffd2238f2ee6ea4ad10d679`

const searchTemperature = () => {
    const city = document.getElementById('city-name');
    const cityName = city.value;
    city.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric `;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemp(data))
}
//ata buji nai
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemp = temp => {
    //ai line o buji nai
    setInnerText('city', temp.name)

    setInnerText('temperature', temp.main.temp)

    setInnerText('condition', temp.weather[0].main)

    //set weather icon // ato buji nai kecu
    const url = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const weatherIcon = document.getElementById('weather-icon');

    weatherIcon.setAttribute('src', url);

    console.log(temp);
}

