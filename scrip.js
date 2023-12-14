let Nintentos = 6;
let palabra = ["H","O","L","A"];
const boton = document.getElementById("boton");
const input = document.getElementById("inpuut");
let contenedor = document.getElementById('resultado');
let letra = document.getElementById("letras");
let cantidad = document.getElementById("cantidad");


letra.innerHTML = "La palabra a adivinar tiene " + palabra.length + " letras";

boton.addEventListener("click", intentar);

function intentar(){
    let palabraIngre = leer();
    const intentos = document.getElementById("intentos");
    const div = document.createElement('div');
    div.className = 'divS';
    if (palabraIngre.length != palabra.length){
        contenedor.innerHTML = "Ingrese la misma cantidad de letras"    
    }else{
        for (let i in palabra){
            contenedor.innerHTML = ""
            const divP = document.createElement('div');
            divP.className = 'divP';
            if (palabraIngre[i] === palabra[i]){
            
                divP.style.backgroundColor = 'green';
            }else if (palabra.includes(palabraIngre[i])){
                divP.style.backgroundColor = 'yellow';
            } else {
                divP.style.backgroundColor = 'grey';
            }
            divP.innerHTML = palabraIngre[i];
            div.appendChild(divP);
        }
        Nintentos--;
        cantidad.innerHTML = "Te quedan " + Nintentos + " intentos"
        intentos.appendChild(div);
        if (compararVectores(palabraIngre, palabra)){
            terminar("ganaste");
            return;
        } else if (Nintentos === 0){
            terminar("Perdiste");
           
        }
    }
}
function compararVectores(vector1, vector2) {
    if (vector1.length !== vector2.length) {
        return false;
    }

    for (let i = 0; i < vector1.length; i++) {
        if (vector1[i] !== vector2[i]) {
            return false;
        }
    }

    return true;
}
function leer(){
    let palabraIngre = document.getElementById("inpuut");
    palabraIngre = palabraIngre.value;
    palabraIngre = palabraIngre.toUpperCase(); 
    return palabraIngre;
}

function terminar(mensaje){
    input.disabled = true;
    boton.disabled = true;
    contenedor.innerHTML = mensaje;
}
