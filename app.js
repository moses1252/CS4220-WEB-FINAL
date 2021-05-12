const inquirer = require('inquirer');
//const { choices } = require('yargs');
const npm = require('npm-api');

//const character = require('../npm-api/index.js');

// const searchCharacter = async () => {
//     //getAll gets all character data from API
//     let shortList = await character.getAll('chara');

//     return inquirer.prompt([
//         {
//             type: 'checkbox',
//             name: 'characters',
//             message: 'select which character you want to search',

//             // display the cards to the user for them to select
//             choices: shortList,

//             // validate that the user picks less than 4 cards
//             validate: (characters) => {
//                     return true;
//             }
//         }
//     ]);
// }
// const searchCharacter = async (results) => {
//     console.log(`${results}`);
//     // let shortList = await character.getAll('chara'); 
//     // return inquirer.prompt([
//     //     {
//     //         type: 'list',
//     //         name: 'package',
//     //         message: 'please select a character',
//     //         choices: shortList
//     //     }
//     // ])
// };

// const searchLocation = async () => {
//     let shortList = await character.getAll('loca');
 
//     return inquirer.prompt([
//         {
//              type: 'checkbox',
//             name: 'locations',
//             message: 'select which location you want to search',

//             // display the cards to the user for them to select
//             choices: shortList,

//             // validate that the user picks less than 4 cards
//             validate: (locations) => {
//                     return true;
//             }
//         }
//     ]);
// }

// const searchEpisode = async () => {
//     let shortList = await character.getAll('epi');
 
//     return inquirer.prompt([
//         {
//              type: 'checkbox',
//             name: 'episodes',
//             message: 'select which episode you want to search',

//             // display the cards to the user for them to select
//             choices: shortList,

//             // validate that the user picks less than 4 cards
//             validate: (episodes) => {
//                     return true;
//             }
//         }
//     ]);
// }

async function search(keyword) {
    // const search = await npm.search(keyword);
    // console.log(search);

    //characters
    console.log("Search for as many characters as you want")
    console.log("-----------------------------------");
    let results = await npm.findAll(keyword, type = 'chara');
    console.log(results);
    console.log("-----------------------------------\n");






    //let data = await searchCharacter();
    //console.log(data);
    // let swap = [];

    // // //get key values from searchCharacter
    // for (const key in data) {
    //     swap.push(data[key]); //value set as key
    // }

    // //get key values and put into single array
    // let readableCode = swap[0];

    // //make code readable for findAll method
    // for (i = 0; i < readableCode.length; i++) {
    //     readableCode[i] = "\"" + readableCode[i] + "\"";
    // }
    // let results = await character.findAll(readableCode, 'chara');
    // console.log("-----------------------------------\n");//done 

    // //locations 
    // console.log("Search for as many locations as you want")
    // console.log("-----------------------------------");
    // data = await searchLocation();
    // swap = [];

    // for (const key in data) {
    //     swap.push(data[key]); //value set as key
    // }
    // readableCode = swap[0];
    // for (i = 0; i < readableCode.length; i++) {
    //     readableCode[i] = "\"" + readableCode[i] + "\"";
    // }
    // results = await character.findAll(readableCode, 'loca');
    // console.log("-----------------------------------\n");

    // //episodes
    // console.log("Search for as many characters as you want")
    // console.log("-----------------------------------");
    // data = await searchEpisode();
    // swap = [];

    // for (const key in data) {
    //     swap.push(data[key]); //value set as key
    // }
    // readableCode = swap[0];
    // for (i = 0; i < readableCode.length; i++) {
    //     readableCode[i] = "\"" + readableCode[i] + "\"";
    // }
    // results = await character.findAll(readableCode, 'epi');
    // console.log("-----------------------------------\n");    
}
module.exports = {
    search
};