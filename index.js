const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8888;
app.use(cors());
app.use(express.json());

let tasks = [{ id: 1, description: 'Your First Task :)', isDone: false }];

function refreshId() {
    newId = 1;
    tasks.forEach(element => {
        element.id = newId;
        newId++;
    });
}

app.get('/', (req, res) => {
    res.send('Server is working!');
});

app.post('/todolist', (req, res) => {
    tasks = req.body;
    tasks.forEach((element, index) => {
        if (element.isDone) {
            tasks.splice(index, 1);
        }
    })
    refreshId();
    console.log(tasks);
    res.status(200).end();
})

app.get('/todolist', (req, res) => {
    tasks.forEach((element, index) => {
        if (element.isDone) {
            tasks.splice(index, 1);
        }
    })
    refreshId();
    res.json({ tasks });
    console.log(tasks);
})

app.listen(port, () => {
    console.log("Server started at port 8888");
});