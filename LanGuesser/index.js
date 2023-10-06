const franc = require('franc');
const langs = require('langs');
const colors = require('colors');
const input = process.argv[2];
const iso = franc(input);
// const iso = ""; 'Alle menneske er fødde til fridom'
try {
    const language = langs.where("3", iso).name;
    console.log("Our best guess that it is :", language.blue);
} catch (e) {
    console.log("Error! Couldn't figure out the language.".red);
}