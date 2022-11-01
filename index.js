const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const users = [
    {id:1,name:'Imran Hossain',email:'imran@gmail.com'},
    {id:2,name:'Abdul Ohab',email:'ohab@gmail.com'},
    {id:3,name:'Raian Rafi',email:'rafi@gmail.com'}
];

app.get('/',(req,res) => {
    res.send('simple node server running..!!');
});

app.get('/users',(req,res) => {
    res.send(users)
});

app.post('/users',(req,res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(req.body)
})

app.listen(port,()=> {
    console.log(`simple node server running port is ${port}`)
}); 	