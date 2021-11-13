class Weather {
  constructor(city) {
    this.api_Key = 'dbcd6240cb1b40ffa6d101406211311';
    this.city = city;
  }

  async getWeather() {
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?q=${this.city}&key=${this.api_Key}`)
    const result = await response.json()
    return result

  }

  changeLocation(city) {
    this.city = city
  }
}


