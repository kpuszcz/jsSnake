const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public/'));

app.get("/", (request, response) => {
    response.sendFile(__dirname + 'public/index.html');
});

app.listen(3000, () => {
    console.log(`Server running at http://127.0.0.1:${port}/`);
});
