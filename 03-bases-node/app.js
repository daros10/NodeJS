const argv = require("./config/yargs").argv;
const colors = require("colors");

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

// let argv2 = process.argv;
// let parametroBase = argv[2];
// let base = parametroBase.split("=")[1];

let comando = argv._[0];

switch (comando) {
    case "listar":
        console.log("Listar");
        listarTabla(argv.base, argv.limite);
        break;

    case "crear":
        console.log("Crear");
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => {
                console.log(`Archivo ${archivo} creado exitosamente!`);
            })
            .catch((err) => {
                console.log(err);
            });
        break;

    default:
        console.log("Comando no reconocido");
}