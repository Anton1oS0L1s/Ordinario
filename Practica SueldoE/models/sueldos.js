const { DataTypes } = require('sequelize');
const conexionBD = require('./conexion');

class ModeloSueldos {
    constructor() {
        this.modelo = conexionBD.define('sueldos', {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                comment: 'Identificador único del registro'
            },
            tipoEmpleado: {
                type: DataTypes.STRING,
                field: 'tipo',
                allowNull: false,
                comment: 'Categoría del empleado'
            },
            sueldoDiario: {
                type: DataTypes.DOUBLE,
                allowNull: false,
                comment: 'Sueldo base por día'
            },
            bonoMensual: {
                type: DataTypes.DOUBLE,
                field: 'bono',
                defaultValue: 0,
                comment: 'Bono mensual adicional'
            }
        }, {
            timestamps: false,
            tableName: 'sueldos'
        });
    }

    obtenerModelo() {
        return this.modelo;
    }
}

const sueldos = new ModeloSueldos();
module.exports = sueldos.obtenerModelo();