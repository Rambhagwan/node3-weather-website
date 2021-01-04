
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data)
//     })
// })



const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const pinForm = document.querySelector('#form2')
const pincodeInput = document.querySelector("#input2") 

const messageOne = document.querySelector("#message-1")
const message2 = document.querySelector("#message-2")
const message3 = document.querySelector("#message-3")
const message4 = document.querySelector("#message-4")
const message5 = document.querySelector("#message-5")
const message6 = document.querySelector("#message-6")
const message7 = document.querySelector("#message-7")

pinForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const pincode = pincodeInput.value
    console.log(pincode)
    fetch('/weatherbypin?pin=' + pincode).then((response) => {
    response.json().then((data) => {
        console.log(data)
        if (data.error) {
            message4.textContent = "Enter valid india location pincode"
            message5.textContent = ""
            message6.textContent = ""
            message7.textContent = ""
            
        } else {

            message4.textContent = "weather : " + data.weather; message5.textContent = "temperature : " + data.temp;
            message6.textContent = "Nearby location : " + data.location + " (" + data.countryCode + ")"
        }
    })
})
})


// messageOne.textContent = "From javascript"

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value
    console.log(location)
    fetch('/weather?address=' + location).then((response) => {
    response.json().then((data) => {
        console.log(data)
        if (data.error) {
            messageOne.textContent = "Either city is not valid or city is not identified, "
            message2.textContent = "If you know pincode, try with pincode"
            message3.textContent = ""
        } else {

            messageOne.textContent = "weather : " + data.weather; message2.textContent = "temperature : " + data.temp;
            message3.textContent = "location : " + data.location + "(" + data.countryCode + ")"
        }
    })
})
})