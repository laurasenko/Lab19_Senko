var puns = require("./puns");

var http = require('http');

http.createServer(function(request, response) {
 response.writeHead(200, { "Content-type": "text/html" });
 response.write(
 	'<h1 style="color:purple";>' + 'Random Pun Generator' + '</h1>' + '<p></p>' + 
 	'<h2 style="color:darkgreen;">' + randomPun() + '</h2>' + '<p></p>'
 	+ '<h3 style="color:blue;">' + 'Update the page for more <em>refreshing</em> puns.');
 response.end();
}).listen(8888);


console.log(puns.puns);

function randomPun() {
	return puns.puns[Math.floor(Math.random() * puns.puns.length)];
}

console.log(randomPun());
