function sendToServer(task) {
    fetch("http://127.0.0.1:8888/todolist", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-type": "application/json",
        }
    })
}