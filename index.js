const  http = require('http');
const port = 3000;

const server = http.createServer((req, res)  => {
    res.end('hello world', () => console.log('hello world'))
})


server.listen(port, (err) => {
    if(err) {
        return console.log('somthing went wrong ');
    }

    console.log('server listening on  port ', port)
})


