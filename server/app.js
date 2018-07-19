const express = require('express')
const app = express()
const bbi = require('../BrotmanBaty-followers.json');
app.get('/', (req, res) => res.send('Hello World!'))
app.get('/bbi', (req, res) => res.send(JSON.stringify(bbi)));
app.listen(3000, () => console.log('Example app listening on port 3000!'))
