const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello from node practice. I am Aal Emraan. This is my second project with node. and i want to become a full stack web developer. hello there!")
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

const users = [
    {id: 0 , name: "1aal emraan", age:23, study: "Physics"},
    {id: 1 , name: "2aal emraan", age:23, study: "Physics"},
    {id: 2 , name: "3aal emraan", age:23, study: "Physics"},
    {id: 3 , name: "4aal emraan", age:23, study: "Physics"},
    {id: 4 , name: "5aal emraan", age:23, study: "Physics"},
    {id: 5 , name: "6aal emraan", age:23, study: "Physics"}
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