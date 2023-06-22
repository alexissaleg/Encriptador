const ingresoTexto = document.getElementById("ingresoTexto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botonCopiar = document.getElementById("botonCopiar");
const mensajeFinal = document.getElementById("mensajeFinal");
const munheco = document.getElementById("munheco");
const derechaInfo = document.getElementById("derechaInfo");
const derecha = document.getElementById("derecha");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
];

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor;
    ingresoTexto.value = "";
    munheco.classList.add("ocultar");
    derechaInfo.classList.add("ocultar");
    botonCopiar.classList.remove("bn_ocultar");
    derecha.classList.add("ajuste");
    mensajeFinal.classList.add("ajustar");
};

const reset = () => {
    mensajeFinal.innerHTML = "";
    ingresoTexto.value = "";
    munheco.classList.remove("ocultar");
    derechaInfo.classList.remove("ocultar");
    botonCopiar.classList.add("bn_ocultar");
    derecha.classList.remove("ajuste");
    mensajeFinal.classList.remove("ajustar");
    ingresoTexto.focus();
};

botonEncriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto !== "") {
        function encriptar(texto) {
            for (let i = 0; i < remplazar.length; i++) {
                if (texto.includes(remplazar[i][0])) {
                    texto = texto.replaceAll(remplazar[i][0], remplazar[i][1]);
                }
            }
            return texto;
        }
        remplace(encriptar(texto));
    } else {
        alert("Ingrese texto a encriptar");
        reset();
    }
});

botonDesencriptar.addEventListener("click", () => {
    const texto = ingresoTexto.value.toLowerCase();
    if (texto !== "") {
        function desencriptar(texto) {
            for (let i = 0; i < remplazar.length; i++) {
                if (texto.includes(remplazar[i][1])) {
                    texto = texto.replaceAll(remplazar[i][1], remplazar[i][0]);
                }
            }
            return texto;
        }
        remplace(desencriptar(texto));
    } else {
        alert("Ingrese texto a desencriptar");
        reset();
    }
});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal.value;
    navigator.clipboard.writeText(texto);
    alert("Texto Copiado");
    reset();
});
