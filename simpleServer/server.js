const http = require(''); 
const http = require(''); 
const path = require('path');
const fs = require('fs');

const mimeTypes = {
    "html" : "text/html",
    "jpeg" : "image/jpeg",
    "jpg" : "image/jpg",
    "png" : "image/png",
    "js" : "text/js",
    "css" : "text/css"
};

http.createServer(function(request, response){
    var url = url.parse(req.url).pathname; 
    var filename  = path.join(process.cwd(),unescape(uri));
    console.log('Loading' + uri); 
    var stats; 
    
    try{ 
        stats = fs.lstatSync(filename);
    }catch(e){
        response.writeHead(404, {'Content-Type ':'text/plain' });
        response.write('404 Not Found/n');
        response.end(); 
        return; 
    }
    if(stats.isFile()){
        var mimeType = mineTypes[path.extname(filename).split(".").reverse()[0]];
        response.writeHead(200, {'Context-Type' : 'text/plain'});

        var fileStream = fs.createReadStream(filename);
        fileStream.pipe(response);

    }else if (stats.isDirectory()){
        response.writeHead(302, {
            'Location' : 'index.hmtl'
    });
    response.end();


    }else {
        response.writeHead(500, {'Context-Type' : 'text/plain'});
        response.write('500 Internal Error\n');
        response.end();

    }
}).listen(1337);