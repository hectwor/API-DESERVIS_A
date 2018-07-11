const tableProduccion = {
    tableName: 'Produccion',
    nombre:'nombre',
    descripcion:'desc_prod',
    caracteristicas:'caracteristicas'
};

const tableProducto = {
    tableName: 'producto',
    id_produccion: 'produccion_cod_prod',
    stock:'cant_stock',
    p_unidad:'precio_unidad',
    proveedor:'proveedor'
};

const tableServices = {
    tableName: 'servicio',
    id_produccion: 'produccion_cod_prod',
    tipo_service: 'tipo_servicio',
    cost: 'costo'
};

module.exports = {
    tableProduccion:tableProduccion,
    tableProducto:tableProducto,
    tableServices:tableServices,
};