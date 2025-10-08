function homePageHandler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Home</title>
                <style>
                    body{ 
                        font-family: Arial, sans-serif; 
                        background-color: #f4f4f4; 
                        margin: 0; 
                        padding: 0; 
                    }

                    .container{ 
                        max-width: 800px; 
                        margin: 20px auto; 
                        padding: 20px; 
                        background-color: #fff; 
                        border-radius: 8px; 
                        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                    }

                    nav{ 
                        background-color: #333; 
                        padding: 10px 0; 
                        text-align: center; 
                    }
                    nav a{ 
                        color: white; 
                        text-decoration: none; 
                        padding: 10px 20px; 
                        font-weight: bold;
                    }
                        
                    nav a:hover{ 
                        background-color: #555; 
                    }
                    h3{ 
                        color: #333; 
                        text-align:center
                    }
                </style>
            </head>
            <body>
                <nav>
                    <a href="/">Home</a>
                    <a href="/posts">Posts</a>
                </nav>
                <div class="container">
                    <h3>Welcome to the blog!</h3>
                </div>
            </body>
        </html>
    `);
}

module.exports = homePageHandler;