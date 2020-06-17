const fs = require('fs');

let listadoPorHacer= [];

let guardarDB = ()=>{
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json', data,(err)=>{
        if(err) throw new Error('no se pudo grabar',err);
    });
}

let cargarDB = ()=>{    
    // console.log(listadoPorHacer);
    try {
        listadoPorHacer = require('../db/data.json');        
    } catch (error) {
        listadoPorHacer=[];
    }
}

const crear = (descripcion)=>{
    cargarDB();
    let porHacer={
        descripcion,
        completado: false
    }
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const getListado= ()=>{
    cargarDB();
    return listadoPorHacer;
}
const actualizar =(descripcion, completado=true)=>{
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea=>{
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
    }

    // for(tarea of listadoPorHacer){
    //     if (tarea.descripcion == descripcion) {
    //         tarea.completado= true;
    //         guardarDB()
    //     }
    // }
    return getListado();
}
const borrar =(descripcion)=>{
    
    cargarDB();

    let nuevoListado = listadoPorHacer.filter(tarea=>{
        return tarea.descripcion !== descripcion;
    })

    if ( listadoPorHacer.length === nuevoListado.length) {
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardarDB()
        return true;
    }      
}

const borrarAll =()=>{
    guardarDB()
    let mensaje = 'db borrada'
    return mensaje
}

module.exports={
    crear,
    getListado,
    actualizar,
    borrar,
    borrarAll
}