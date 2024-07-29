const express=require("express");
const  cors=require("cors");
const connectDB=require("./config/db_Connect");
const app = express();
require('dotenv').config();


// connect to DB
connectDB();



// routes
app.use(express.json());
app.use(cors());
app.use("/user",require("./routes/user"));
app.use("/product", require("./routes/product"));
app.use("/commande", require("./routes/commande"));
app.get("/",(req,res)=>res.send("Express on Vercel"));

//server
const PORT=process.env.PORT || 5000 ;
app.listen(PORT,(err)=> {err ?
console.log(err) : console.log("server is running")
});