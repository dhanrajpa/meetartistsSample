// import the required dependencies, i.e. express and axios. In the axios import, we use the create method to specify the
// base URL, this is the URL that our axios object will prepend to all our requests.

// Run the server --node server.js

const express=require("express");
const cors=require("cors")
const app=express()
var corOptions={
    origin : "https://localhost:8081"

}


//middlewares
app.use(cors(corOptions))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routers
const router=require("./routes/UserRegisterRoute");
app.use("/api/users",router)
app.get("/hello",(request,response)=>{ 
    response.json({message:"hello project"})
})



app.get("/", (req, res) => {
res.send("Hello World!");
});

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.redirect("/");
  });


//port
const PORT=process.env.PORT||8080


//
app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON ${PORT}`);
})