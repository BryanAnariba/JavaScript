const Tarea = require("./Tarea");

class Tareas {
    _listado = {};
    /*
        _listado = {
            'uuid': { id: 12, desc: 'asd', completadoEn: '12/12/12 00:00' }
        };
    */

    get listadoTareasEnArray () {
        const listado = [];
        Object.keys( this._listado ).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });
        return listado;
    }

    constructor () {
        this._listado = {};
    }

    crearTarea ( desc = '' ) {
        const tarea = new Tarea( desc );
        this._listado[ tarea.id ] = tarea;
    }

    cargarTareasFromArray ( tareas = [] ) {
        tareas.forEach( tarea => {
            this._listado[ tarea.id ] = tarea;
        });
        return this._listado;
    }

    getListadoBonitoTareas () {
        let tareas = this.listadoTareasEnArray;
        let contador = 1;
        tareas.forEach( tarea => {
            console.log( ` ${ contador } - `.green + tarea.desc + ' :: ' + ( tarea.completadoEn === null ? 'Pendiente'.red : 'Completada'.green ) );
            contador++;
        });
    }

    listarPendienteCompletadas( quieresTareasCompletadas = false) {
        let tareas = this.listadoTareasEnArray;
        let contador = 1;
        let array = [];
        let msg = '';
        if ( quieresTareasCompletadas ) {
            array = tareas.filter( tarea => tarea.completadoEn !== null );
            msg = 'Completado'.green;
        } else {
            array = tareas.filter( tarea => tarea.completadoEn === null );
            msg = 'Pendiente'.red;
        }
        array.forEach( tarea => {
            console.log( ` ${ contador } - `.green + tarea.desc + ' :: ' + msg );
            contador++;
        });
    }
}   

module.exports = Tareas;