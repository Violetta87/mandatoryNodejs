//vi importere package express via ECMA SCRIPT
import express from "express"
//vi Instantiere så vi kan bruge express package.
const app = express();

import path from "path"

//Vi sørger for at klienten har adgang til alle static files i public folder
app.use(express.static('public'))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "public/frontpage/frontpage.html")
})


const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }
    console.log("Server works on PORT: ", PORT)
})

