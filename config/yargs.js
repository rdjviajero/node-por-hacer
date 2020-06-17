const descripcion= {
    demand: true,
            alias: 'd',
            desc: 'Descripcion de la tarea por hacer'
}

const completado= {
    alias: 'c',
            default: true,
            desc: 'Marca como completo o pendiente una tarea'
}

const argv = require('yargs')
    .command('crear', 'permite crear una tarea', {
        descripcion
    })
    .command('listar', 'lista las tareas que esten registradas')
    .command('actualizar', 'permite actualizar una tarea y marcarla como hecha', {
        descripcion,
        completado
    })
    .command('borrar','borrara  una tarea por hacer',{
        descripcion
    })
    .command('borrarAll', 'borrara todas las tareas de la base de datos')
    .help()
    .argv;



module.exports = {
    argv
}