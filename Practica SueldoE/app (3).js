const express = require('express')
const modeloSueldos = require('./models/sueldos')

class ServidorSueldos {
    constructor() {
        this.app = express()
        this.puerto = 3001
        this.configurarMiddlewares()
        this.configurarRutas()
    }

    configurarMiddlewares() {
        this.app.use(express.json())
    }

    configurarRutas() {
        this.app.post('/calculadora/sueldo', this.calcularSueldo)
    }

    async calcularSueldo(req, res) {
        try {
            const { tipo: tipoEmpleado, dias: diasTrabajados } = req.body

            const datosEmpleado = await modeloSueldos.findOne({
                where: { tipo: tipoEmpleado }
            })

            if (!datosEmpleado) {
                return res.status(404).json({
                    mensaje: 'Tipo de empleado no encontrado'
                })
            }

            const { sueldoDiario, bono: bonoMensual } = datosEmpleado
            const bonoFinal = bonoMensual >= 25 ? bonoMensual : 0
            const sueldoTotal = (sueldoDiario * diasTrabajados) + bonoFinal

            res.json({
                empleado: tipoEmpleado,
                diasLaborados: diasTrabajados,
                pagoDiario: sueldoDiario,
                bonoMensual: bonoFinal,
                total: sueldoTotal
            })
        } catch (error) {
            res.status(500).json({
                mensaje: 'Error al calcular el sueldo',
                error: error.message
            })
        }
    }

    iniciar() {
        this.app.listen(this.puerto, () => {
            console.log(`✨ Servidor iniciado en el puerto ${this.puerto}`)
        })
    }
}

const servidor = new ServidorSueldos()
servidor.iniciar()