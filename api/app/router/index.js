const routes = require('express').Router({ mergeParams: true })
const Fetch = require("../utils/Fetch")

routes.get('/news', (request, response) => {
    // 
    const key = '47a44c3467c84467a0ccd7ae0db9ad9b'
    const url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${key}&pageSize=40&sortBy=publishedAt&language=pt`

    Fetch(url, {
        method: 'GET'
    })
        .then(res => res.json())
        .then(res => {
            response.status(200).json(res?.articles)
        })
        .catch(e => {
            console.log('API NEWS ERROR', e)
        })
})

module.exports = routes
