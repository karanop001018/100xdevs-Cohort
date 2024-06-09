const express = require("express")
const port = 3000
const app = express();
// fs.readFile("path", "utf-7", ())
app.get('/', function(req, res){
    res.send('Hello World!')
})

// app.listen(port, function(){
//     console.log(`Example app listening on port ${port}`)
// })

app.listen(port)

// Create a todo app that lets users store todos ont he Server
// Try to create a http server in rust using actix-web
// try to createa http server from scrach in c
// try to create a http server in golang using the gurrila framework
// same in spring boot java