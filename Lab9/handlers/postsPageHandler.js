const posts = require('../data/posts.js');

function postsPageHandler(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    const postsHtml = posts.map((post) => {
        return `
            <div class="post">
                <h2>${post.title}</h2>
                <p class="date">${post.date}</p>
                <p>${post.content}</p>
            </div>
        `;
    }).join('');

    res.end(`
        <!DOCTYPE html>
        <html>
            <head>
                <title>Posts</title>
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

                    .post{
                        border-bottom: 1px solid #eee; 
                        padding-bottom: 20px; 
                        margin-bottom: 20px; 
                    }

                    .post h2{
                        color: #333; 
                        margin-bottom: 5px; 
                    }

                    .post .date{
                        color: #777; 
                        font-style: italic; 
                        font-size: 0.9em; 
                        margin-top: 0; 
                    }
                </style>
            </head>
            <body>
                <nav>
                    <a href="/">Home</a>
                    <a href="/posts">Posts</a>
                </nav>
                <div class="container">
                    ${postsHtml}
                </div>
            </body>
        </html>
    `);
}
module.exports = postsPageHandler;