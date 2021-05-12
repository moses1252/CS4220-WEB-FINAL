const superagent = require('superagent');

const config = require('./config.json');

//const base = 'https://rickandmortyapi.com/api/';
// const card = './CharacterCard';
// const app = require('../npm-app/app.js');
// const search = async (keyword) => {
//     try {
//         const url = `${config.url}/character/${keyword}`;
//         console.log(url);
//         const response = await superagent.get(url);
//         return response.body;
//     } catch (error) {
//         console.log(error);
//     }
// };
const nextPage = async (page = 1, type = 'chara') => {
    try {
        if (type === 'chara') {
            page++;
            const getCharacter = `${config.url}/character/?page=${page}`;
            const response = await superagent.get(getCharacter); //[character] -- prints out 'code' 

            return response.body;
        }
        // if (type === 'loca') {
        //     page++;
        //     const getCharacter = `${base}location?page=${page}`;
        //     const response = await superagent.get(getCharacter); //[character] -- prints out 'code' 

        //     return response.body;
        // }
        // if (type === 'epi') {
        //     page++;
        //     const getCharacter = `${base}episode?page=${page}`;
        //     const response = await superagent.get(getCharacter); //[character] -- prints out 'code' 

        //     return response.body;
        // }

    } catch (error) {
        return error;
    }
};

//recieve data from API 
const getAll = async (type = 'chara') => {
    //characters
    if (type === 'chara') {
        let pages;
        let hold = []
        try {
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 20; j++) {
                    pages = await nextPage(i, 'chara');
                    hold.push(pages["results"][j]);
                }
            }
        } catch (error) {
            return error;
        }
        return hold;
    }
    //locations
    if (type === 'loca') {
        let pages;
        let hold = []
        try {
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 20; j++) {
                    pages = await nextPage(i, 'loca');
                    hold.push(pages["results"][j]);
                }
            }
        } catch (error) {
            return error;
        }
        return hold;
    }
    if (type === 'epi') {
        let pages;
        let hold = []
        try {
            for (i = 0; i < 2; i++) {
                for (j = 0; j < 20; j++) {
                    pages = await nextPage(i, 'epi');
                    hold.push(pages["results"][j]);
                }
            }
        } catch (error) {
            return error;
        }
        return hold;
    }


}

const getAllCharacters = async () => {
    let pages;
    let hold = []
    try {
        for (i = 0; i < 3; i++) {
            for (j = 0; j < 20; j++) {
                pages = await nextPage(i, 'chara');
                hold.push(pages["results"][j]);
            }
        }
    } catch (error) {
        return error;
    }
    return hold;
};

// const getAllLocations = async () => {
//     let pages;
//     let hold = []
//     try {
//         for (i = 0; i < 3; i++) {
//             for (j = 0; j < 20; j++) {
//                 pages = await nextPage(i, 'loca');
//                 hold.push(pages["results"][j]);
//             }
//         }
//     } catch (error) {
//         return error;
//     }
//     return hold;
// }

// const getAllEpisodes = async () => {
//     let pages;
//     let hold = []
//     try {
//         for (i = 0; i < 2; i++) {
//             for (j = 0; j < 20; j++) {
//                 pages = await nextPage(i, 'epi');
//                 hold.push(pages["results"][j]);
//             }
//         }
//     } catch (error) {
//         return error;
//     }
//     return hold;
// }

const search = async (keyword) => {
    try {
        const url = `${config.url}/character/${keyword} `;
        console.log(url);
        const response = await superagent.get(url);
        return response.body;
    } catch (error) {
        console.log(error);
    }
};
 
const findAll = async (keyword, type = 'chara') => {
    if (type === 'chara') {
        try {
            for (i = 0; i <33; i++) {
                let pages = await nextPage(i, 'chara');
                for (j = 0; j < 20; j++) {
                    //for (r = 0; r < ch.length; r++) {
                        let pageName = JSON.stringify(pages["results"][j].name);
                        pageName = pageName.toLowerCase();
                        let check = keyword.toLowerCase();

                        if (pageName.includes(check)) {
                            console.log("ID: " + pages["results"][j].id +
                            "\nName: " + pages["results"][j].name +
                            "\nStatus: " + pages["results"][j].status + 
                            "\nSpecies: " + pages["results"][j].species);
                            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
                            // pages["results"][j].episode.forEach(element => {
                            //     console.log("Characters: " + element);
                            // });
                        }

                    //}------------------------------------------
                }
            }
            console.log("this async function is done running");
        } catch (error) {
            return error;
        }
    }
    // if (type === 'loca') {
    //     try {
    //         for (i = 0; i < 5; i++) {
    //             let pages = await nextPage(i, 'loca');
    //             for (j = 0; j < 20; j++) {
    //                 for (r = 0; r < ch.length; r++) {
    //                     if (ch[r] === JSON.stringify(pages["results"][j].name)) {
    //                         console.log("ID: " + pages["results"][j].id + 
    //                         "\nName: " + pages["results"][j].name +
    //                         "\nType: " + pages["results"][j].type +
    //                         "\nDimenstion: " + pages["results"][j].type);
    //                     }
    //                 }

    //             }
    //         }
    //         //console.log("this async function is done running");
    //     } catch (error) {
    //         return error;
    //     }
    // }
    // if (type === 'epi') {
    //     try {
    //         for (i = 0; i < 3; i++) {
    //             let pages = await nextPage(i, 'epi');
    //             for (j = 0; j < 20; j++) {
    //                 for (r = 0; r < ch.length; r++) {
    //                     if (ch[r] === JSON.stringify(pages["results"][j].name)) {
    //                         console.log("ID: " + pages["results"][j].id + 
    //                         "\nName: " + pages["results"][j].name +
    //                         "\nAir Date: " + pages["results"][j].air_date +
    //                         "\nEpisode: " + pages["results"][j].episode);
    //                     }
    //                 }
    //             }
    //         }
    //         //console.log("this async function is done running");
    //     } catch (error) {
    //         return error;
    //     }
    // }
}

// const findCharacter = async (ch = ["Morty’s Girlfriend"]) => { // the parameter should be a character name
//     try {
//         for (i = 0; i < 33; i++) {
//             let pages = await nextPage(i, 'chara');
//             for (j = 0; j < 20; j++) {
//                 for (r = 0; r < ch.length; r++) {
//                     if (ch[r] === JSON.stringify(pages["results"][j].name)) {
//                         console.log(pages["results"][j]);

//                     }
//                 }

//             }
//         }
//         console.log("this async function is done running");
//     } catch (error) {
//         return error;
//     }
// };

// const findLocation = async (ch = ["Earth (C-137)"]) => { // the parameter should be a character name
//     try {
//         for (i = 0; i < 5; i++) {
//             let pages = await nextPage(i, 'loca');
//             for (j = 0; j < 20; j++) {
//                 for (r = 0; r < ch.length; r++) {
//                     if (ch[r] === JSON.stringify(pages["results"][j].name)) {
//                         console.log(pages["results"][j]);

//                     }
//                 }

//             }
//         }
//         console.log("this async function is done running");
//     } catch (error) {
//         return error;
//     }
// };

// const findEpisode = async (ch = ["The Wedding Squanchers"]) => { // the parameter should be a character name
//     try {
//         for (i = 0; i < 3; i++) {
//             let pages = await nextPage(i, 'epi');
//             for (j = 0; j < 20; j++) {
//                 for (r = 0; r < ch.length; r++) {
//                     if (ch[r] === JSON.stringify(pages["results"][j].name)) {
//                         console.log(pages["results"][j]);
//                     }
//                 }

//             }
//         }
//         console.log("this async function is done running");
//     } catch (error) {
//         return error;
//     }
// };

// //this is for my testing methods
// const printCharacters = async () => {
//     let pages;
//     try {
//         for (i = 0; i < 1; i++) {
//             pages = await nextPage(i, 'chara');
//             for (j = 0; j < 20; j++) {
//                 console.log(pages["results"][j].name);
//                 //result.push(pages["results"][j].name);
//             }
//         }
//     } catch (error) {
//         return error;
//     }
// };

// const printLocations = async () => {
//     let pages;
//     try {
//         for (i = 0; i < 1; i++) {
//             pages = await nextPage(i, 'loca');
//             for (j = 0; j < 20; j++) {
//                 console.log(pages["results"][j].name);
//             }
//         }
//     } catch (error) {
//         return error;
//     }
// };



module.exports = {
    findAll,
    nextPage,
    getAll,
    search
};
