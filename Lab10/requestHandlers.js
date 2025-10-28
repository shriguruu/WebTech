// requestHandlers.js file for handling the requests

const fs = require('fs');
const { logError } = require('./logger'); // Import the logger

// Function to serve a file or a fallback message
const serveFile = (res, filePath, fallbackMessage, contentType) => {
    fs.readFile(filePath, (err, data) => {
        if (err) {
            logError(`Error reading ${filePath}: ${err.message}`);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(`<h1>${fallbackMessage}</h1>`);
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
};

// Handler for the home page
const serveHomePage = (res) => {
    serveFile(res, 'pages/index.html', 'Home Page', 'text/html');
};

// Handler for the about page
const serveAboutPage = (res) => {
    serveFile(res, 'pages/about.html', 'About Page', 'text/html');
};

// Handler for the CSS
const serveCss = (res) => {
    serveFile(res, 'style.css', 'CSS', 'text/css');
};

// Handler for 404 Not Found
const serveNotFoundPage = (res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 - Page Not Found</h1>');
};


module.exports = {
    serveHomePage,
    serveAboutPage,
    serveCss,
    serveNotFoundPage,
};