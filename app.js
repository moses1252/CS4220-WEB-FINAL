const inquirer = require('inquirer');
//const { choices } = require('yargs');
const npm = require('npm-api');

const searchCharacter = async (keyword) => {
    //getAll gets all character data from API
    let shortList = await npm.getAll(keyword);

    return inquirer.prompt([
        {
            type: 'list',
            name: 'document',
            message: 'select which item you want to search',
            choices: shortList
        }
    ]);
};

async function search(keyword) {
    let data = await searchCharacter(keyword);
    console.log(data);
    let swap = []; 

    for (const key in data) {
        swap.push(data[key]); //value set as key
    }

    let readableCode = swap[0];
    console.log("-----------------------------------");
    let results = await npm.findAll(readableCode, keyword);
    console.log("-----------------------------------\n");
}
module.exports = {
    search
};