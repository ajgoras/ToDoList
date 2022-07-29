const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/', (req, res) => {
    res.send('Server is working!');
});

app.post('/todolist', (req, res) => {
    tasks = req.body;
    console.log(tasks);
    res.status(200).end();
})

app.get('/todolist', (req, res) => {
    res.json({ tasks });
})

app.listen(8888, () => {
    console.log("Server started at port 8888");
});