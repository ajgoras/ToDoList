function sendToServer(task) {
    fetch("https://todolistbackend-78we.onrender.com/todolist", {
        method: "POST",
        body: JSON.stringify(task),
        headers: {
            "Content-type": "application/json",
        }
    })
}