let cn = require('../dbconfig/postgresqldb');
let db = cn.connection;

function selectproductos(res, next){
    let query = "select * from Producto";
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
    selectproductos:selectproductos,
};