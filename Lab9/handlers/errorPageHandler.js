function errorPageHandler(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Error :(</title>
                <style>
                    body{ 
                        font-family: Arial, sans-serif; 
                        background-color: #f4f4f4; 
                        margin: 0; 
                        padding: 0; 
                        text-align: center; 
                    }

                    .container{ 
                        max-width: 800px; 
                        margin: 50px auto; 
                        padding: 20px; 
                        background-color: #fff; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
                    }
                    h3{ 
                        color: #d9534f; 
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h3>ERROR: 404</h3>
                    <p>Page not found :(</p>
                    <p> <a href="/">Click here</a> to go to the home page!</p>
                </div>
            </body>
        </html>
    `);
}
module.exports = errorPageHandler;