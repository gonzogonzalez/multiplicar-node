const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

//exportamos yargs
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
    .command('crear', 'Genera el archivo txt de tabla de multiplicar', opt)
    .help()
    .argv;

module.exports = {
    argv
}