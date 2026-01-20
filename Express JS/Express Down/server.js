const express=  require('express')
const server = express();
const port=8000;
server.set('view engine','ejs');

server.get("/",(req,res)=>{
    // res.render('vjfvj')
    res.end('Hdeddellp')
})
server.get("/about",(req,res)=>{
    // res.render('vjfvj')
    res.end('Hellcccddcp')
})
server.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`)
})