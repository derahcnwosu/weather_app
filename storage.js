class Storage {
  constructor() {
    this.city;
    this.DefaultCity = 'Miami'
  }


  getLocationData() {
    if(localStorage.getItem('city') === null) {
      this.city = this.DefaultCity
    } else {
      this.city = localStorage.getItem('city')
    }

    return{
      city: this.city
    }
  }

  setLocationData(city){
    localStorage.setItem('city', city)
  }
}