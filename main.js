let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena= document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&!.';

function generar() {

    let numeroDigitado = parseInt(cantidad.value)

    if (numeroDigitado < 8) {
        alert("Para la cantidad de caracteres tiene que ser mayor o igual a 8");
    }

    let password='';
    for(let i=0;i < numeroDigitado; i++){
        let caracterAleateorio = cadenaCaracteres[Math.floor((Math.random() * cadenaCaracteres.length))];

        console.log(caracterAleateorio);

        password+=caracterAleateorio;

        console.log(password);
    }
    console.log('ContraseÑa generada: '+password);
    contrasena.value=password;

}





