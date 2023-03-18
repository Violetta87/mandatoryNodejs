//vi importerer package express via ECMA SCRIPT
import express from "express"
//vi Instantiere så vi kan bruge express package.
const app = express();

//import path so we can use that instead of dirname which doesnt work in ECMA Script
import path from "path"

//Make sure the client has access to all static files in public folder
app.use(express.static('public'))

import structuraldata from "./utils/structuraldata.js";

//constructed pages

const frontpagePath = structuraldata.readPage("./public/pages/frontpage/frontpage.html")
const frontpagePage = structuraldata.renderPage(frontpagePath, {
    title: "Welcome",
    css: `<link rel="stylesheet" type="text/css" href="/pages/frontpage/frontpage.css">`
});


app.get("/", (req,res) => {
    res.send(frontpagePage)
} )



const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }
    console.log("Server works on PORT: ", PORT)
})

