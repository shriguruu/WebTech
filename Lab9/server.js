const http = require('http');
const router = require('./router.js');

http.createServer(router).listen(3000, () => {
	console.log('server running at http://localhost:3000');
});
