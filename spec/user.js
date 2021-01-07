const { baseUrl } = require('./env');
const fetch = require('node-fetch');

fetch(`${baseUrl}/api/user`)
    .then( res => {
        return res.json()
    })
    .then( data => {
        console.log(data);
    })