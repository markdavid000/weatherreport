class Weather {
    constructor(city, state) {
        this.apiKey = '3VZMSSXT74G573U2N6UXNVCW7';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.city}%2C%20${this.state}?unitGroup=metric&include=current&key=${this.apiKey}&contentType=json`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weather location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}