const storage = new Storage()
const weatherLocation = storage.getLocationData()

const weather = new Weather(weatherLocation.city)
const ui = new UI()



document.querySelector('.loc-change').addEventListener('click', openForm)

document.querySelector('.close').addEventListener('click', closeForm)

document.querySelector('.save').addEventListener('click', makeChanges)

function openForm(e) {
  const form = document.getElementById('loc-form')
  const weatherCard = document.querySelector('.weather-card')
  form.style.display = 'block'
  weatherCard.style.opacity = '0.7'

  e.preventDefault()
}


function closeForm(e) {
  const form = document.getElementById('loc-form')
  const weatherCard = document.querySelector('.weather-card')
  form.style.display = 'none'
  weatherCard.style.opacity = '1'


  e.preventDefault()
}

function makeChanges(e) {
  const form = document.getElementById('loc-form')
  const weatherCard = document.querySelector('.weather-card')
  form.style.display = 'none'
  weatherCard.style.opacity = '1'
  const city = document.getElementById('city').value

  weather.changeLocation(city)
  storage.setLocationData(city)
  getWeather()

  e.preventDefault()
}


// const city = document.getElementById('city').value


// document.querySelector('.save').addEventListener('click', getWeather)

document.addEventListener('DOMContentLoaded', getWeather)

function getWeather() {
  weather.getWeather()
    .then(data => {
      console.log(data)
      ui.paint(data)
    })
    .catch(err => console.log(err))

}

