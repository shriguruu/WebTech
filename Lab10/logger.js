// logger.js to log errors

const fs = require('fs');

const logError = (errorMessage) => {
    const logMessage = `${new Date().toISOString()}: ${errorMessage}\n`;
    fs.appendFile('error.log', logMessage, (err) => {
        if (err) {
            console.log('Failed to write to log file:', err);
        }
    });
};

// Export the function to make it available to other files
module.exports = { logError };