const express = require('express')
const app = express();
const path = require('path')
const http = require('http')
const PORT = process.env.PORT || 5000

var server = http.createServer(app);
    server.listen(PORT, process.env.IP || "0.0.0.0",
    	(addr = server.address()) => console.info("Сервер запущен", addr.address + ":" + addr.port)
    );
	
app.use(express.static(path.resolve(__dirname, 'public')));
app.get('/', function(req, res, next) {
	res.sendFile('index.html', { root: 'public' })
});
app.get('/2', function(req, res, next) {
	res.sendFile('index2.html', { root: 'public' })
});