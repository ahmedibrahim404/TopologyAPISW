# Topology API

API Used to store/manipulate topologies

## Features
      1. Read and write topologies to and from disk.
      2. Stores multiple topologies in memory.
      3. Execute operations on topologies.
      
## Installation
Amusing requires [Node.js](https://nodejs.org/) to run.

Install the dependencies and start the server.

```sh
$ node app.js
```

For testing environments...

```sh
$ mocha topology.test.js --timeout 1000
```


## API Calls
  1 - Create Topology `POST /writetopology/` (setting `fileName` and `newTopology`)
  
  2 - Read Topology  `GET /readtopology/` (setting `fileName`)
  
  3 - Get Devices in Topology  `GET /getdevicesintopology/` (setting `fileName`)
  
  4 - Get Devices given netlist `GET /getdevicesinnode/` (setting `fileName` and `netList`)
  
  5 - Delete Topology `DELETE /deletetopology/` (setting `fileName`)

