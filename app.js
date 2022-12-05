// Init storage
const storage = new Storage()

// Get stored location data
const weatherLocation = storage.getLocationData()

// Init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.state);
// Init ui
const ui = new UI();

// Get weather on DOM load

// Change location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  const state = document.getElementById('state').value
  
  // Change Location
  weather.changeLocation(city, state)

  // Set Location in LS
  storage.setLocationData(city, state)
  
  // Get and display weather
  getWeather()
  
  //Close modal
  $('#locModal').modal('hide') 
})
document.addEventListener('DOMContentLoaded', getWeather)


function getWeather(){
    weather.getWeather()
    .then(results => {
      ui.paint(results);
      // console.log(results)
    })
.catch(err => {
    console.log(err)
});
}
