//exportamos yargs (ruta)
const argv = require('./config/yargs').argv;
//exportamos colors
const colors = require('colors');
//le especificamos que archivo y que función exportando queremos utilizar
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');
let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//para poder mandar la base a travez de consola con la función de process
// let argv2 = process.argv;



//console.log(argv.base);
// let parametro = argv[2];
// let base = parametro.split('=')[1];


// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(e => console.log(e));