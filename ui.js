class UI {
    constructor() {
        this.location = document.getElementById('w-location')
        this.desc = document.getElementById('w-desc')
        this.string = document.getElementById('w-string')
        this.details = document.getElementById('w-details')
        this.icon = document.getElementById('w-icon')
        this.humidity = document.getElementById('w-humidity')
        this.feelsLike = document.getElementById('w-feels-like')
        this.dewpoint = document.getElementById('w-dewpoint')
        this.wind = document.getElementById('w-wind')
    }

    paint(weather) {
        this.location.textContent = weather.address;
        this.desc.textContent = weather.currentConditions.conditions;
        this.string.textContent = weather.currentConditions.temp;
        // this.icon.setAttribute('src', weather.currentConditions.icon);
        this.humidity.textContent = `Relative Humidity: ${weather.currentConditions.humidity}`
        this.feelsLike.textContent = `Feels Like: ${weather.currentConditions.feelslike}`
        this.dewpoint.textContent = `DewPoint: ${weather.currentConditions.dew}`
        this.wind.textContent = `Wind: ${weather.currentConditions.windspeed}`
    }
}