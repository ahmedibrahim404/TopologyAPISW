const fs = require('fs');

module.exports = class TopologyReader {

    file = null;

    constructor(srcDest=''){
        this.file = srcDest;
        return fs.readFile('./'+this.file, (err, data) => {
            
            if (err){
                return fs.writeFileSync('./'+this.file, 
                JSON.stringify(
                    {
                        id:"top" + Math.randon(),
                        compontents: [],
                    }
                ));
            }

            return JSON.parse(data);
        });
    }

    readTopology(){
        if(this.file === null) {
            return;
        }
        return JSON.parse(fs.readFileSync('./'+this.file));
    }

    writeTopology(newTopology){         
        let data = JSON.stringify(newTopology);
        fs.writeFileSync('./'+this.file, data);
    }

    queryTopology(topology){

    }

    deleteTopology(){
        fs.unlinkSync('./' + this.file);
    }

    getDevicesInTopology(topology){

    }

    getDevicesInNodeTopology(node, topology){

    }

}