const request = require('request')

const forecastbypin = (pin, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?zip='+ encodeURIComponent(pin)+ ',IN&APPID=12858f2f16b51a7f8beaa04185435b9d&units=metric'

    // http://api.openweathermap.org/data/2.5/weather?zip=342902,IN&APPID=12858f2f16b51a7f8beaa04185435b9d&units=metric


    request({url, json: true}, (error, response) => {
        if (error) {
            callback(error, undefined)
        } 
        else {
            callback(undefined, response.body)
        }
        
})

}

module.exports = forecastbypin