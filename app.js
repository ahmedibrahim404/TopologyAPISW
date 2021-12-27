const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.urlencoded({extended: true})); 
app.use(express.json());


app.listen(8080, () => console.log('Run on 8080'));
