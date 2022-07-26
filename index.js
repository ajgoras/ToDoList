const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server is working!');
});

app.listen(8888, () => {
    console.log("Server started at port 8888");
});