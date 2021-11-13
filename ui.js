class UI{
  constructor() {
    this.location = document.querySelector('.w-location')
    this.degree = document.querySelector('.w-degree')
    this.description = document.querySelector('.w-desc')
    this.humidity = document.querySelector('.humidity')
    this.feelslike = document.querySelector('.feels-like')
    this.wind = document.querySelector('.wind')
    this.image = document.getElementById('cloud-img')
  }

  paint(cloud) {
    this.location.textContent = `${cloud.location.name}`
    this.degree.textContent = `${cloud.current.feelslike_c}C(${cloud.current.feelslike_f}F)`
    this.image.setAttribute('src', `${cloud.current.condition.icon}`)
    this.description.textContent = `${cloud.current.condition.text}`
    this.humidity.textContent = `Relative Humidity: ${cloud.current.humidity}`
    this.wind.textContent = `Wind: From the ${cloud.current.wind_dir} at ${cloud.current.wind_mph}MPH Gusting at ${cloud.current.gust_mph}MPH`
    this.feelslike.textContent = `Feels Like: ${cloud.current.feelslike_c}C(${cloud.current.feelslike_f}F)`
  }
}


