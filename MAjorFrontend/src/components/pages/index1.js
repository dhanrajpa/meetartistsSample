var express=require('express');
var app =express();

var bodyParser=require('body-parser')
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true }));
app.get('/',function(req,res)
{
res.sendFile(__dirname+'SignUp.js');
});

app.post('/',function(req,res)
{
console.log(req.body);
})
app.listen(3000);