// server.js to run the server

const http = require('http');
const handleRequest  = require('./router'); 

const server = http.createServer(handleRequest);

server.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
});