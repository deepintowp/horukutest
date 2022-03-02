const express = require('express');
const app = express();
app.get("/", (response, request) => {
    response.send("working...")
})

app.listen(process.env.PORT || 5000)

