const superagent = require('superagent');

const config = require('./config.json');

const nextPage = async (page = 1, keyword) => {
    try {
        if (keyword === 'character') {
            page++;
            const getCharacter = `${config.url}/character/?page=${page}`;
            const response = await superagent.get(getCharacter);

            return response.body;
        }
        if (keyword === 'location') {
            page++;
            const getCharacter = `${config.url}/location?page=${page}`;
            const response = await superagent.get(getCharacter);

            return response.body;
        }
    } catch (error) {
        return error;
    }
};

//recieve data from API 
const getAll = async (keyword) => {
    //characters
    if (keyword === 'character') {
        let pages;
        let hold = [];
        try {
            for (i = 0; i < 5; i++) {
                for (j = 0; j < 20; j++) {
                    pages = await nextPage(i, keyword);
                    hold.push(pages["results"][j]);
                }
            }
        } catch (error) {
            return error;
        }
        return hold;
    }
    //locations
    if (keyword === 'location') {
        let pages;
        let hold = [];
        try {
            for (i = 0; i < 5; i++) {
                for (j = 0; j < 20; j++) {
                    pages = await nextPage(i, keyword);
                    hold.push(pages["results"][j]);
                }
            }
        } catch (error) {
            return error;
        }
        return hold;
    }
}

const findAll = async (keyword, type = 'character') => {
    if (type === 'character') {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
        try {
            for (i = 0; i < 5; i++) {
                let pages = await nextPage(i, 'character');
                for (j = 0; j < 20; j++) {
                    let pageName = JSON.stringify(pages["results"][j].name);
                    if (pageName.includes(keyword)) {
                        console.log("ID: " + pages["results"][j].id +
                            "\nName: " + pages["results"][j].name +
                            "\nStatus: " + pages["results"][j].status +
                            "\nSpecies: " + pages["results"][j].species);
                        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
                    }
                }
            }
        } catch (error) {
            return error;
        }
    }
    if (type === 'location') {
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
        try {
            for (i = 0; i < 5; i++) {
                let pages = await nextPage(i, 'location');
                for (j = 0; j < 5; j++) {
                    let pageName = JSON.stringify(pages["results"][j].name);
                    if (pageName.includes(keyword)) {
                        console.log("ID: " + pages["results"][j].id +
                            "\nName: " + pages["results"][j].name);
                        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~');
                    }
                }
            }
        } catch (error) {
            return error;
        }
    }
}

module.exports = {
    findAll,
    nextPage,
    getAll
};
