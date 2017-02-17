var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=4f8bc418c763cab48d0a253adde9ed0a&units=metric';

module.exports = {
  getTemp: function(location){
    var encondedLocation = encodeURIComponent(location);

    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encondedLocation}`;

    return axios.get(requestUrl).then(function(res){
      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else {
        return res.data.main.temp;
      }
    },function(res){
      throw new Error(res.data.message);
    });
  }
}
