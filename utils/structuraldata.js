//import file system to read content from file.
import fs from 'fs'
//import util get method to convert to promise
import util from 'util'
const readFile = util.promisify(fs.readFileSync)



function renderPage(page, options={}) {
    //reads content from the directory - we give a path as param and return string representation.
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
        .replace("$CSS",  options.css)
        .replace("$title", options.title) || "mandatory";

    const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
        .replace("$FOOTER_YEAR", `&COPY ${new Date().getFullYear()}`)
    return navbar + page + footer
}

function readPage(pagePath){
    return fs.readFileSync(pagePath).toString();
}

async function parseJson(){
    try{
        const user = await readFile('user.json');
        const json = JSON.parse(user)
        return json
    }catch(error){
        console.log("Didnt read json correct", error)
    }
}

export default {
    renderPage,
    readPage,
    parseJson
}

