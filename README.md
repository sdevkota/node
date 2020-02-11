# Topics
- Create a basic node server
- Add dotenv to your node server
- Learn how to use Environment variables in node server
### Prerequisites
- You must have node installed on your machine
#### To install dotenv module
###### open up a command line and type the following command: 
`npm i dotenv --save`

This will add a node modules folder on your project root folder. 
##### - - save will save this module as a dev dependency

Add a `.env` file to your project and add the variable name and value as following: 
`PORT=8000`

Create a server.js file and add the following: 

```javascript
   const dotenv = require('dotenv');
    var http = require("http");
    dotenv.config();
    http.createServer((request, response) => {
        response.writeHead(200, { "content-type": "text/plain" });
        response.write("Server is running on this port");
        response.end();
    }).listen(process.env.PORT);
    console.log("server running on port: ", process.env.PORT)
```
### to run simply type the following command:

`node server.js`

open your browser and go to localhost:<port>

Explanation: 
- require(module) will bring the appropriate modules to your code so that you can use them. 
- to create a server, you will need a http modules. 
-createServer method takes a callback with request, response params that returns a object that has listen method and takes a port param. 

Thank you for learning with me!


