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

const introductionPath = structuraldata.readPage("./public/pages/nodejs/intro/introNodejs.html")
const introductionNodejsPage = structuraldata.renderPage(introductionPath, {
    title: "Introduction to NodeJS",
    css: `<link rel="stylesheet" type="text/css" href="/pages/nodejs/intro/introNodejs.css">`
});

const githubpath = structuraldata.readPage("./public/pages/nodejs/github/github.html")
const githubPage = structuraldata.renderPage(githubpath, {
    title: "Github tutorial",
    css: `<link rel="stylesheet" type="text/css" href="/pages/nodejs/github/github.css">`
});

const npmPath = structuraldata.readPage("./public/pages/nodejs/npm/npm.html")
const npmPage = structuraldata.renderPage(npmPath, {
    title: "npm tutorial",
    css: `<link rel="stylesheet" type="text/css" href="/pages/nodejs/npm/npm.css">`
})

const expressImportPath = structuraldata.readPage("./public/pages/nodejs/npm/expressImport.html")
const expressImportPage = structuraldata.renderPage(expressImportPath, {
    title: "express Import", 
    css: `<link rel="stylesheet" type="text/css" href="/pages/nodejs/npm/expressImport.css">`
})


app.get("/", (req,res) => {
    res.send(frontpagePage)
})

app.get("/introNodejs", (req, res) => {
    res.send(introductionNodejsPage)
})

app.get("/github", (req,res) =>{
    res.send(githubPage)
})

app.get("/npm", (req,res) => {
    res.send(npmPage)
})

app.get("/expressImport", (req, res) => {
    res.send(expressImportPage)
})



const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }
    console.log("Server works on PORT: ", PORT)
})

