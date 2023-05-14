const express = require('express')
const app = express()


//routes
app.get('/',(req, res) =>{
    res.send('hello node i am an api')
})

//app.listen on port 3k
app.listen(3000, ()=> {
    console.log('node api is running on port 3000')
})

