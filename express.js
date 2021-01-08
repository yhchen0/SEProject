const { readFileSync } = require('fs');
const express = require('express');

const app = express();

app.get('*', (req,res) => {
    res.end( readFileSync('./30C4AC995CB535A7EFE5DBE294026FA6.txt') );
})

app.listen(80,'0.0.0.0');