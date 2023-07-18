// Create web server
// 1. Create http server
// 2. Listen to port 3000
// 3. Create route for /comments
// 4. Send content of comments.json
// 5. Send error if any

// 1. Create http server
const http = require('http');
const server = http.createServer();

// 2. Listen to port 3000
server.listen(3000, () => {
  console.log('Listening on port 3000');
});

// 3. Create route for /comments
server.on('request', (req, res) => {
  const url = req.url;
  if (url === '/comments') {
    // 4. Send content of comments.json
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(comments));
    res.end();
  } else {
    // 5. Send error if any
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.write('404 Not Found');
    res.end();
  }
});