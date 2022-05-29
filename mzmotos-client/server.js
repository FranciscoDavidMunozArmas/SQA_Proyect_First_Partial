const express = require('express');
const path = require('path');

const app = express();
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.resolve('./dist/mzmotos')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve('./dist/mzmotos/index.html'));
});

app.listen(app.get('port'));