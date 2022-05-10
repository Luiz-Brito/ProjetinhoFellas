const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.arguments(express.static(__dirname + '/dist/frontEnd'));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/frontEnd/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta ' + PORT);
});