const express = require('express') ;
const app = express() ;
const port = 5000

app.listen(port, ()=> console.log(`Server is running on port ${port}`)) ;

// Middleware request time
var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }
  
  app.use(requestTime)

// home page route
app.get('/' , (req, res)=>{
    res.sendFile(__dirname+'/Public/index.html') ;
    
    console.table({method: req.method , path: req.url})
})
//services page route
app.get('/services' , (req, res)=>{
    res.sendFile(__dirname+'/Public/services.html') ;
})
// contact page route
app.get('/contact' , (req, res)=>{
    res.sendFile(__dirname+'/Public/contact.html') ;
})

// css route
app.get('/Public/style.css' , (req, res) =>{
    res.sendFile(__dirname+'/Public/style.css')
}
)