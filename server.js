
const dotenv = require('dotenv');
var http = require("http");
dotenv.config();
http.createServer((request, response) => {
    response.writeHead(200, { "content-type": "text/plain" });
    response.write("Server is running on this port");
    response.end();

}).listen(process.env.PORT);
console.log("server running on port: ", process.env.PORT)