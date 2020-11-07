const axios = require('axios');

const express = require('express');
const router = express.Router();

router.route('/getCharities').get((request, response) => {
    const params = {
        key: 'AIzaSyDOH-pA2icLq8Lcwmqr0gqtUDCvRkc3LVw',
        location: '29.6345,-82.3371',
        radius: '5000',
        keyword: 'charities'
    }
    console.log('TTTTEEEEESSSSTTTTT')
    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json', { params: params })
            .then((res) => {
                console.log('Test')
                response.send(res.data.results)
            }).catch((error) => {
                console.log(error)
            });
})

module.exports = router;