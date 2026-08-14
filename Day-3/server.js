const app = require("./scr/app")
const connectToDB= require("./scr/config/database")




connectToDB()
app.listen(3000, ()=>{
    console.log("server start successfully on port 3000");
    
})