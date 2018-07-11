let promise = require('bluebird');
let options = {
    promiseLib: promise
};

const pgp = require('pg-promise')(options);

const  urlconnection = 'postgres://hectwr@deservis:Admision1;@deservis.postgres.database.azure.com:5432/deservis_a';
let cn = pgp(urlconnection);

module.exports = {
    connection: cn
};
