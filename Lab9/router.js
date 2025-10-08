const homePageHandler = require('./handlers/homePageHandler.js');
const postsPageHandler = require('./handlers/postsPageHandler.js');
const notFoundPageHandler = require('./handlers/errorPageHandler.js');

function router(req, res) {
	const { url, method } = req;
	if ((method === 'GET') & (url === '/')) {
		homePageHandler(req, res);
	} else if ((method === 'GET') & (url === '/posts')) {
		postsPageHandler(req, res);
	} else {
		notFoundPageHandler(req, res);
	}
}

module.exports = router;