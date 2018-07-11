let cn = require('../dbconfig/postgresqldb');
let db = cn.connection;

function select(res, next, columns, tableName){
    let query = `select ${columns} from ${tableName}`;
    console.log(query);
    db.any(query)
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data,
                    message : 'Retrieved List'
                });
        })
        .catch(function(err){
            return next(err);
        })
}

function insert(res, next, tableName, clave, value){
    let query = `INSERT INTO ${tableName} ${clave} VALUES ${value}`;
    console.log(query);
    db.any(query)
        .then(function(data){
            res.status(200)
                .json({
                    status : 'success',
                    data:data,
                    message : 'Retrieved List'
                });
        })
        .catch(function(err){
            return next(err);
        })
}

module.exports = {
    select:select,
    insert:insert,
};