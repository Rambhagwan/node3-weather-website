const path = require('path')
const express = require('express')
const app = express()  
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const forecastbypin = require('./utils/forecastbypin')



//define paths for express confing
const publicDirectory = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//set up hadlebars engine and view location
app.set('view engine','hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectory))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: "Ram Bhagwan Prajapat"

    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: "Ram Bhagwan Prajapat"

    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        msg: 'weather is clean',
        title: 'Help doc',
        name: "Ram Bhagwan Prajapat"

    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Please provide address"
        })
    }

    

    forecast(req.query.address, (error, data) => {
        if (error) {
            return res.send({
                error
            })
        }

        if (data.cod == 404) {
            return res.send({
                error: data.message
            })
        }
        
        res.send({
            // data,
            temp: data.main.temp,
            weather: data.weather[0].description,
            location: data.name,
            countryCode: data.sys.country
        })
      })
    
    // res.send({
    //     location: req.query.address,
    //     address: req.query.address,
    //     temp: 50,
    //     title: 'About',
    //     name: "Ram Bhagwan Prajapat"
    // })
})

app.get('/weatherbypin', (req, res) => {
    if (!req.query.pin) {
        return res.send({
            error: "Please provide pincode"
        })
    }

    

    forecastbypin(req.query.pin, (error, data) => {
        if (error) {
            return res.send({
                error
            })
        }

        if (data.cod == 404) {
            return res.send({
                error: data.message
            })
        }
        
        res.send({
            // data,
            temp: data.main.temp,
            weather: data.weather[0].description,
            location: data.name,
            countryCode: data.sys.country
        })
      })
    
    // res.send({
    //     location: req.query.address,
    //     address: req.query.address,
    //     temp: 50,
    //     title: 'About',
    //     name: "Ram Bhagwan Prajapat"
    // })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return  res.send({
            error: 'you must provide search term'
        })
    }
    console.log(req.query)
    res.send({
        products: []
    })

})

app.get('/help/*', (req, res) => {
    res.render('error', {
        msg : "no help for this",
        name: "Ram Bhagwan Prajapat"})
})

app.get('*', (req, res) => {
    res.render('error', {
        msg : "my 404 page"})
})


app.listen(3000, () => {
    console.log("server is up on 3000")
})
