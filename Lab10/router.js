// router.js file for routing to the different web pages

const url = require('url');
const handlers = require('./requestHandlers'); // Import the handlers

function handleRequest (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    console.log(`Request received for: ${pathname}`);

    switch (pathname) {
        case '/':
            handlers.serveHomePage(res);
            break;
        case '/about':
            handlers.serveAboutPage(res);
            break;
        case '/style.css': 
            handlers.serveCss(res);
            break;
        default:
            handlers.serveNotFoundPage(res);
            break;
    }
};

module.exports = handleRequest ;