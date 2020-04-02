const fileSystem = require('fs');
const colors = require("colors");

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número.`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }
        fileSystem.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(`${err}`.red)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
}

let listarTabla = (base, limite = 10) => {
    console.log('========================='.green);
    console.log(`===Tabla de ${base}==`.green);
    console.log("=========================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i} \n`);
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}