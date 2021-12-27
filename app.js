const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true})); 




var topologyRoutes = require('./controller/topology');
const TopologyReader = require('./util/topologyReader.util');
app.use('/', topologyRoutes);


app.listen(8080, () => console.log('Run on 8080'));

