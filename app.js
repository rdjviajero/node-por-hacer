const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crear, getListado, actualizar, borrar, borrarAll } = require('./por-hacer/por-hacer')


// console.log(argv);
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crear(argv.descripcion);
        // console.log(tarea);
        break;
    case 'listar':
        let listado = getListado()
            // console.log(listado);
        for (let tarea of listado) {
            console.log('======Por Hacer======'.green);
            console.log(tarea.descripcion);
            console.log(`estado: ${tarea.completado}`);
            console.log('====================='.green);
        }
        break;
    case 'actualizar':
        let datos = actualizar(argv.descripcion, argv.completado);
        for (let tarea of datos) {
            if (tarea.completado == true) {
                console.log('======Actualizado======'.green);
                console.log(tarea.descripcion);
                console.log(`estado: ${tarea.completado}`);
                console.log('====================='.green);
            }

        }
        // console.log('actualizar');
        break;
    case 'borrar':
        let resp = borrar(argv.descripcion);
        if (resp== true) {
            console.log('tarea Borrada');
        }else{
            console.log('no se borro la tarea');
        }
        break;
    case 'borrarAll':
        let mensaje = borrarAll();
        console.log(mensaje);
        break;

    default:
        console.log('comado no valido')
        break;
}