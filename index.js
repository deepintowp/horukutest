const express = require('express');
const app = express();
app.get("/", (request, response) => {
    response.send("working...")
})

app.listen(process.env.PORT || 5000)

