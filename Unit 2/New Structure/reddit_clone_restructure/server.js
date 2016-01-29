var http = require('http');
var fs   = require('fs');

var port = process.PORT

function handleRequest(req, res) {

  if(req.url === '/'){
      fs.readFile('./index.html', function(err, data){
        if(err) throw err; 

        res.setHeader("Content-Type", "text/html");
        res.statusCode = 200;
        res.write(data);
        res.end();
      });  
  }else if(req.url === '/style.css'){
     fs.readFile('./style.css', function(err, data){
      if(err) throw err; 

      res.setHeader("Content-Type", "text/css");
      res.statusCode = 200;
      res.write(data);
      res.end();
     });
  }else if(req.url === '/app.js'){
     fs.readFile('./app.js', function(err, data){
      if(err) throw err; 

      res.setHeader("Content-Type", "text/css");
      res.statusCode = 200;
      res.write(data);
      res.end(); 
     });
  }else{

      fs.readFile('./404.jpg', function(err, data){
        if(err) throw err; 

        // res.setHeader("Content-Type", "text/html");
        res.statusCode = 404;
        res.write(data);
        res.end();
      });
  } 
};

var server = http.createServer(handleRequest);

server.listen(port, function() {
  console.log("I'm listening on" + port + "...");
});