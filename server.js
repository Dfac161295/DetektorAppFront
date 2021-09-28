const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/detektor-app'));
app.get('/', function(req, res) {
    res.sendFile(path.join('dist/detektor-app/'));
});

app.listen(process.env.PORT || 8080);