const express=require('express')
const app=express()
const request =require('request')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    res.render('search')
})
app.get('/results',(req,res)=>{
   const query= req.query.search
   const url="https://www.omdbapi.com/?s=" +query+ "&apikey=fb98962f";
    request(url,(error,response,body)=>{
    if(!error&&response.statusCode==200) {  
    var data=JSON.parse(body);
    
        res.render('results',{data:data})}
    
    })
    
})
const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`runnning at port ${port}`);
})