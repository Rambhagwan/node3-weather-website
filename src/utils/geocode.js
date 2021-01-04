const request = require('request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWJjZDEyMzQ1aHloaWRrIiwiYSI6ImNramE0NnhnNzFjdnEyeHJ1dHlzbXp3ZHkifQ.4kFYpUD7IBxIQQel6fD6jw&limit=1'

    request({url, json: true}, (error, response) => {
        if (error) {
            callback("unable to connect to server", undefined)
        } else if (response.body.features.length === 0) {
            callback("Location not identified", undefined)
        } else {
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location: response.body.features[0].place_name

            })
        }
        
})}

module.exports = geocode;