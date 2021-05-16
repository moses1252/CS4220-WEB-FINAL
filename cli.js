const yargs = require('yargs');
const app = require('./app.js');

yargs
    .usage('$0: Usage <cmd> [options]')
    // add the 'search' command
    .command({
        command: 'search',
        desc: 'You will have access to all characters and locations from the show Rick and Morty Show',
        builder: (yargs) => {
            // add the search option to the search command
            return yargs.options('d', {
                alias: 'document',
                describe: 'You can choose from a list of characters or locations and it will display information about them.'
            });
        },
        handler: (argv) => {
            app.search(argv.document);
        }
    })
    // add a help menu to assist the user in understanding our CLI
    .help('help').argv;