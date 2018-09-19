const express = require('express');
const bodyParser = require('body-parser');

const residente = require('./routes/residente.route');
const app = express();

app.use('/residentes',residente)

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
