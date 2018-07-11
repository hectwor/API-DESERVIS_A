let queries = require('../src/queries');
let tables = require('../Objects/Models');

const tableProduccion = tables.tableProduccion;
const tableProducto = tables.tableProducto;
const tableServices = tables.tableServices;

function getAllProduct(req, res, next) {
    queries.select(res, next, '*', tableProducto.tableName);
}

function getAllServices(req, res, next) {
    queries.select(res, next, '*', tableServices.tableName);
}

function newProduction(req, res, next){
    let jsonR = req.body;
    console.log(jsonR);
    let name = jsonR.nombre;
    let description = jsonR.descripcion;
    let characteristics = jsonR.caracteristicas;

    const claveProduccion = `(${tableProduccion.nombre}, ${tableProduccion.descripcion}, ${tableProduccion.caracteristicas})`;
    const valueProduccion = `('${name}', '${description}', '${characteristics}')`;

    queries.insert(res, next, tableProduccion.tableName, claveProduccion, valueProduccion);
}

function newProduct(req, res, next){
    let jsonR = req.body;
    console.log(jsonR);
    let id_prod = jsonR.id_produccion;
    let stock = jsonR.stock;
    let price = jsonR.precio;
    let proveedor = jsonR.proveedor;

    const claveProducto = `(${tableProducto.id_produccion}, ${tableProducto.stock}, ${tableProducto.p_unidad}, ${tableProducto.proveedor})`;
    const valueProducto = `('${id_prod}', '${stock}', '${price}', '${proveedor}')`;

    queries.insert(res, next, tableProducto.tableName, claveProducto, valueProducto);
}

module.exports = {
    newProduction:newProduction,
    newProduct:newProduct,
    getAllProduct:getAllProduct,
    getAllServices:getAllServices,
};