const argv = require('./config/yargs').argv;
const colors = require("colors/safe");

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
// 1. - require('fs') Libreria que ya esta definida por Node
// 2. - 'express'--Paquetes que no son nativos de Node
// 3. - 'require(./)' son archivos que uno crea;


let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado :`, colors.green(archivo)))
            .catch(e => console.log(e))
        break;
    default:
        console.log(`Comando ${comando} no reconocido.`);
        break;
}