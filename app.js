//we import package express by ECMA SCRIPT
import express from "express"
//Instantiate so we can use express package.
const app = express();

//Make sure the client has access to all static files in public folder
app.use(express.static('public'))
//Sets up a middleware function ; parse from x-www-form-urlencoded the incoming HTTP request body to javascript object.
//When you submit a form on a webpage using the HTTP POST method, the data you entered in the form fields is sent to the server in the form of key-value pairs. This data is encoded in a specific format called x-www-form-urlencoded.
app.use(express.urlencoded({extended: true}));

import structuraldata from "./utils/structuraldata.js";
import { correctUser } from "./public/pages/login/login.js";

/*constructed pages*/

//nodejs

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
    title: "Npm Tutorial",
    css: `<link rel="stylesheet" type="text/css" href="/pages/nodejs/npm/npm.css">`
})

const expressImportPath = structuraldata.readPage("./public/pages/nodejs/npm/expressImport.html")
const expressImportPage = structuraldata.renderPage(expressImportPath, {
    title: "Express Modules", 
    css: `<link rel="stylesheet" type="text/css" href="/pages/nodejs/npm/expressImport.css">`
})

const ecmaJSpath = structuraldata.readPage("./public/pages/nodejs/ecmajs/ecmaJS.html")
const ecmaJSpage = structuraldata.renderPage(ecmaJSpath, {
    title: "Ecma script versus JS common",
    css: `<link rel="stylesheet" type="text/css" href="/pages/nodejs/ecmajs/ecmaJS.css">`
}) 

const crudPath = structuraldata.readPage("./public/pages/nodejs/crud/crud.html")
const crudPage = structuraldata.renderPage(crudPath, {
    title: "Create Read Update Cancel (CRUD)",
    css: `<link rel="stylesheet" type="text/css" href="/pages/nodejs/crud/crud.css">`
})

//javascript

const basicJSPath = structuraldata.readPage("./public/pages/javascript/basicJS/basicJS.html")
const basicJSPage = structuraldata.renderPage(basicJSPath, {
    title: "Basic Javascript",
    css: `<link rel="stylesheet" type="text/css" href="/pages/javascript/basicJS/basicJS.css">`
})

const loginPage = structuraldata.readPage("./public/pages/login/login.html")


app.get("/", (req,res) => {
    res.send(frontpagePage)
})

app.get("/intro-nodejs", (req, res) => {
    res.send(introductionNodejsPage)
})

app.get("/github", (req,res) =>{
    res.send(githubPage)
})

app.get("/npm", (req,res) => {
    res.send(npmPage)
})

app.get("/express-modules", (req, res) => {
    res.send(expressImportPage)
})

app.get("/ecma-versus-js", (req,res) => {
    res.send(ecmaJSpage)
})

app.get("/basic-js", (req,res) => {
    res.send(basicJSPage)
})

app.get("/crud", (req,res) => {
    res.send(crudPage)
})


app.get("/login", (req,res) => {
    res.send(loginPage)
})

app.post('/login', (req,res) => {
    const { user, password } = req.body;
    if(correctUser.user === user && correctUser.password === password){
        res.redirect("/");
    }else{
        res.send("invalid user or password");
    }

})


const PORT = 8080

app.listen(PORT, (error) => {
    if(error){
        console.log(error)
    }
    console.log("Server works on PORT: ", PORT)
})

