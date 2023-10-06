const fs = require('fs');
// console.log(fs);
const dirName = process.argv[2] || 'newProject';
try {
    fs.mkdirSync(dirName);
    fs.writeFileSync(`${dirName}/index.html`, "");
    fs.writeFileSync(`${dirName}/app.css`, "");
    fs.writeFileSync(`${dirName}/app.js`, "");
    console.log('Directory and files created successfully.')
} catch(e){
    console.log("Error while creating directory/files!", e)
}