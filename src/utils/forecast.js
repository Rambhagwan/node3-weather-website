const request = require('request')

const forecast = (city, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?q='+ encodeURIComponent(city)+ '&APPID=12858f2f16b51a7f8beaa04185435b9d&units=metric'

    request({url, json: true}, (error, response) => {
        if (error) {
            callback(error, undefined)
        } 
        else {
            callback(undefined, response.body)
        }
        
})

}

module.exports = forecast