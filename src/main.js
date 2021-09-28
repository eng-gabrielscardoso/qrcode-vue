require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, 'src/public')));

app.get('/', (req, res, next) => {
    res.sendFile('/public/index.html');
})

app.listen(port, () => {
    try{
        console.log(`Server running: http://127.0.0.1:${port}/`);
    } catch(e) {
        console.log(`An error has occurred.`);
        console.log(e);
    }
})