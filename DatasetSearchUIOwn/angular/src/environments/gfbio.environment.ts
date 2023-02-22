export const gfbioEnvironment = {
    production: false,
    COLLECTIONS_API_URL: 'https://collections.gfbio.dev/api/collections/',
    // TODO: add a specific API-Token here when testing and using ng-serve. This seems to be the better solution
    //  than automatically set a secret in a file that is under version control. Do not forget to remove
    //  before committing
    COLLECTIONS_API_TOKEN: '',
    VAT_ROOT_URL: 'https://vat.gfbio.dev',
};
