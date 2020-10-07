// console.log("Hello World"); 
// simple Web Server

// Constant variable are used to store unchanging data 
// that we get from the modules that will be included

// A constant variable is used to store and use the http module
const http = require('http'); 

// Constant variables are used to store the hostname and port info
const hostname = '127.0.0.1'; 
const port = 1337; 

//Here the createServer() method of the http module that was created. The
//createServer() method will take in a request 'req' and a 'res' as
//parameters

http.createServer((req, res) => {
    // The writeHead() method of the response parameter is called to
    // set the status to 200 and the Context-Type to text/plain 
res.writeHead(200, {'Content-Type' : 'text/plain'});
// End the response and echo out Hello World
res.end('Hello World');
// add a listener passing the port and hostname
//then logs to the console that server is running
}).listen(port, hostname, () => {
    // once the server is created log to the console that server is running
    console.log('Server running at http://${hostname}:${port}/')
});


