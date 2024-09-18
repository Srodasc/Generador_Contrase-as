let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let mensaje =document.getElementById('mensaje');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
const cadenaStringsMayus = /[A-Z]/;
const cadenaStringEspecial = /[!@#$%^&*()]/;

function generar() {

    let numeroDigitado = parseInt(cantidad.value)

    if (numeroDigitado < 8) {
        alert("Para la cantidad de caracteres tiene que ser mayor o igual a 8");
        return;
    } 

        let password = '';

        for (let i = 0; i < numeroDigitado; i++) {
            let caracterAleateorio = cadenaCaracteres[Math.floor((Math.random() * cadenaCaracteres.length))];


            password += caracterAleateorio;

            

        }
        console.log('ContraseÑa generada: ' + password);
        contrasena.value = password;
        validarMayuscula(password);
    }

function validarMayuscula(password) {
    const tieneMayuscula = cadenaStringsMayus.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const caracterEspecial = cadenaStringEspecial.test(password);

    if(tieneMayuscula && tieneNumero && caracterEspecial){
        mensaje.textContent="Contreña Segura";
        mensaje.style.color="green";
    } else {
        mensaje.textContent="Contraseña insegura";
        mensaje.style.color="red";
    }


    console.log("Especial " + caracterEspecial);
    console.log("Number " + tieneNumero);
    console.log("Tiene mAyus" + tieneMayuscula);
    console.log(mensaje);
}

function limpiar() {
    document.getElementById('contrasena').value = '';
}





