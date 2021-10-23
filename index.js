const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send("hello from node practice. I am Aal Emraan. This is my second project with node. and i want to become a full stack web developer. hello there!")
});

const users = [
    {id: 1 , name: "1aal emraan", age:23, study: "Physics"},
    {id: 2 , name: "2aal emraan", age:23, study: "Physics"},
    {id: 3 , name: "3aal emraan", age:23, study: "Physics"},
    {id: 4 , name: "4aal emraan", age:23, study: "Physics"},
    {id: 5 , name: "5aal emraan", age:23, study: "Physics"},
    {id: 6 , name: "6aal emraan", age:23, study: "Physics"}
]

// use query

app.get('/users', (req, res) => {
    console.log(req.query.search);
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        if(searchResult.length != 0){
            res.send(searchResult);
        }else{
            res.send("no result found :(")
        }
        
    }else{
        res.send(users);
    }
    
})

// dynamic api

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/name/person', (req, res) => {
    res.send("this is aal emraan.")
})

app.listen(port, () => {
    console.log("listening to port: " , port)
})