/**
*4. PROFESORES-B
*En la Universidad se contratan los profesores por categorías (1=Instructor, 2=Asistente,
*3=Agregado, 4=Asociado, 5=Titular), también se conoce de cada profesor: su nombre y sexo (F
*- M).
*Considerando que los datos de los profesores se cargan en un array de objetos (Ej.
*estructura de cada objeto: {categoría: 1, nombre: ‘Ana’, sexo: ‘F’}) se requiere una función que
*retorne el porcentaje de profesores de un sexo y una categoría dada.
*Función: porcProfesSexoEnCategoria.
*Parámetros: profesores (array de objetos profesor), categoria (un número), sexo (una
*letra).
*Retorno: el porcentaje de profesores de un sexo dado en la categoría indicada.
*Condiciones: debe usarse la función profesoresCategoria del ejercicio anterior.
 */
let profesoresCategoria = (profesores, categoria) => {
    let array = [];
    for(let i = 0; i < profesores.length; i++){
        if(profesores[i].categoría == categoria){
            array.push(profesores[i]);
        }
    }
    return array;
}
let porcProfesSexoEnCategoria = (profesores, categoria, sexo) => {
    let array = profesoresCategoria(profesores, categoria);
    let contador = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].sexo == sexo){
            contador++;
        }
    }
    return (contador / array.length) * 100;
}

let profesores = [
    {categoría: 1, nombre: 'Juana', sexo: 'F'},
    {categoría: 2, nombre: 'Carlos', sexo: 'M'},
    {categoría: 3, nombre: 'Maria', sexo: 'F'},
    {categoría: 3, nombre: 'Luis', sexo: 'M'},
    {categoría: 5, nombre: 'Ricardo', sexo: 'M'},
    {categoría: 3, nombre: 'Diovarda', sexo: 'F'},
    {categoría: 3, nombre: 'Catalina', sexo: 'F'},
    {categoría: 4, nombre: 'Ricardo', sexo: 'M'},
]
let salida = document.getElementById('salida');

salida.innerHTML =  `Porcentaje de profesores de sexo femenino en la categoría 3: `
+JSON.stringify(porcProfesSexoEnCategoria(profesores, 3, 'F'));
salida.innerHTML += `%`