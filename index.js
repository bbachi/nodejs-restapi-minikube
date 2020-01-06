const http = require('http');
const qs = require("querystring");
const url = require('url');

const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {

    if (req.method !== 'GET') handleError(405, res);

    const {pathname, query} = url.parse(req.url);

    if (pathname === '/name') {
        const {name} = qs.parse(query);
        if (name) {
            res.end(`<h1>You Entered: ${name.toUpperCase()}</h1>`)
        } else {
            res.end("Bad Request");
        }
        
    }

    if (pathname === '/') {
        res.end(`<h1>Hello World</h1>`)
    }
});

function handleError(code, res) {
    res.statusCode = code;
    res.end(`{"error": "${http.STATUS_CODES[code]}"}`);
}

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

