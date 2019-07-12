//build a web server in one file and export and require it in to another file and be able to navigate to that file via the url and have it display.
//parse a query string with your web server


var http = require('http');
var server = http.createServer(function (req, res){;
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end('How ya like me now');
});

server.listen(8080, '127.0.0.1'); 

console.log ('Now listening to port 8080');

//Work in progress -- next step is getting the command line and console to speak to each other
//Working more on end of month group presentation tonight and will tackle this exercise over the weekend 











