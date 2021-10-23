const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("hello from node practice. I am Aal Emraan. This is my second project with node. and i want to become a full stack web developer. hello there!")
});

app.listen(port, () => {
    console.log("listening to port: " , port)
})