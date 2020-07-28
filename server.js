let express = require('express')
			
let app = express()

let accounts = [
    {id:1,name:'alex',deposite:5},
    {id:2,name:'sarah',deposite:5},
    {id:3,name:'jim',deposite:15}
]

app.get('/accounts/alex',function(req,res){
    res.json(accounts[0])
})

app.get('/accounts/sarah',function(req,res){
    res.json(accounts[1])
})

app.get('/accounts/jim',function(req,res){
    res.json(accounts[2])
})

app.listen(3000)