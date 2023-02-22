const {writeFile} = require('fs');
const {argv} = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
    ? `./src/environments/gfbio.environment.prod.ts`
    : `./src/environments/gfbio.environment.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent = `
export const gfbioEnvironment = {
   production: ${isProduction},
   COLLECTIONS_API_URL: "${process.env.COLLECTIONS_API_URL}",
   COLLECTIONS_API_TOKEN: "${process.env.COLLECTIONS_API_TOKEN}",
   VAT_ROOT_URL: "${process.env.VAT_ROOT_URL}"
};
`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, err => {
    if (err) {
        console.log(err);
    }

    console.log(`Wrote variables to ${targetPath}`);
});
