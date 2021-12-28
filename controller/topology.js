const router = require('express').Router();
const TopologyReader = require('../util/topologyReader.util');

router.get('/readtopology', (req, res) => {
    let file = req.query.fileName;
    console.log(file);
    try {
        let topology = new TopologyReader(file);
        res.status(200).json(topology.readTopology());
    } catch(error){
        res.status(404).send({error});
    }
});

router.post('/writetopology', (req, res) => {
    let file = req.body.fileName;
    let newTopology;

    try {
        newTopology = JSON.parse(req.body.newTopology);
    } catch(err){
        newTopology = {};
    }

    try {

        let topology = new TopologyReader(file);
        let currentTopology = topology.readTopology();
        
        currentTopology = newTopology;
        topology.writeTopology(currentTopology);

        return res.status(200).json(topology.readTopology());

    } catch(error){
        return res.status(404).send(error);
    }

});

router.get('/querytopology', (req, res) => {



});

router.delete('/deletetopology', (req, res) => {

    let file = req.body.fileName;

    try {
        let topology = new TopologyReader(file);
        topology.deleteTopology();
        return res.sendStatus(200);
    } catch(error){
        return res.status(404).send(error);
    }

});

router.get('/getdevicesintopology', (req, res) => {

    let file = req.query.fileName;

    try {
        let topology = new TopologyReader(file);
        return res.status(200).json(topology.getDevicesInTopology());
    } catch(error){
        return res.status(404).send(error);
    }
    

});

router.get('/getdevicesinnode', (req, res) => {
    let file = req.query.fileName;
    let netlist = req.query.netList;
    
    if(!netlist) return res.status(404).send('Error 404: Netlist not found');

    try {
        let topology = new TopologyReader(file);
        return res.status(200).json({"devices": topology.getDevicesInNetlist(netlist)});
    } catch(error){
        return res.status(404).send(error);
    }
});

module.exports = router;

