const ciudades = [];
const indice = 1;

while (confirm("Quiere ingresar el nombre de una Ciudad?")) {
    let nombre = prompt("Ingrese la Ciudad")
    ciudades.push(nombre);
}

document.write(ciudades + "<br>");
document.write(ciudades.length + "<br>");
document.write(ciudades[0], ciudades[2], ciudades[ciudades.length -1] + "<br>");
ciudades.push("Paris")
document.write(ciudades + "<br>");
document.write(ciudades[1] + "<br>");
ciudades[indice] = "Barcelona";
document.write(ciudades);









