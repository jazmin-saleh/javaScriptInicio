"use Strict";
alert('Hola');
const name = prompt('Cual es tu nombre?');

//para manejar la consola (console)

console.log('hola '+name);
console.error('Error');
console.warn('Advertencia');
//---------VARIABLES----------//
//2.Variables se utiliza la palabra reservada (Var)
//se puede colocar en una variable texto luego un entero
var producto = "Camisa jean";
product = "Pantalon";
product = 20;

var dispodible = true,
    deSegunda = false,
    economico = true;

//2.Vraibales con (let)
let objeto = "camiseta";
objeto = "short";
objeto = 60;

//diferntcia entre var y let:
//esta vota un undefined
console.log(x);
var x = 1;

// y esta un refactorError
/*console.log(i);
let i = 2;*/

//3.variable const
const compra = "tennis";

//difencia entre let y const
//es que en const se debe inicializar y no se puede cambiar 
//y en cuanto a let no se debe inicializar y si se puede cambiar

//---------STRING-------//
const elemento = String('      Cachucha con media y tenis    ');
const precio = ' y vale 30 lucas';
//elimnar del inicio y fin el espacio
console.log(elemento.trimStart().trimEnd());

console.log(elemento);

console.log(elemento.length);
//se mira si elmento tiene incluido la frase o no la tiene
console.log(elemento.includes('Cachucha'));
//cuantos esapcios debe recorrer para llegar hasta una palbra
console.log(elemento.indexOf('con'));
//compara dos cadena y devuelve 0 si son igual y 1 si son diferntes
console.log("Comparacion de dos cadenas: "+elemento.localeCompare('Cachucha con media'));
//Juntar dos cadenas de tetxo en un solo renglon
console.log(elemento.concat(precio).concat(" gracias por comprar"));
//Reemplazar una palabra por otra
console.log(elemento.replace('Cachucha', 'plantillas, '));
//Cortar una parte de la cadena
console.log(elemento.slice(0,10));
console.log(elemento.substring(2,1));
//repetir un texto un numero n de veces
const texto = 'en promocion'.repeat(3);
console.log(texto);
//dividir una cadena por palabras
console.log(elemento.split(" "));
const menu ="agua, ensalada, sopa, arroz, papas, carne";
console.log(menu.split(","));
//Transformar a mayusculas
console.log(elemento.toUpperCase());
//transformar a minuscula
console.log(elemento.toLocaleLowerCase());
//pasar de int a string
const p = 200;
console.log(p);
console.log(p.toString());
//--------NUMEROS-------//
//los que salen por consola azul es que son numeros
const numero1 = 20;
const numero2 = 20.4;

console.log(numero1);
console.log(numero2);

//operaciones

let resultado;
resultado = numero2 +numero1;
console.log(resultado);

//Math

console.log(Math.PI);
console.log(Math.sin(0));
console.log(Math.round(2.6));
//redondea hacia abajo
console.log(Math.floor(2.6));
//redondea hacia arriba
console.log(Math.ceil(2.1));
//Numero menor y mayor
console.log(Math.min(1,2,3,4,5,6,7,8,9));
console.log(Math.max(1,2,3,4,5,6,7,8,9));
//Numero aleatorio
console.log(Math.random()*20);
//logaritmo de 10
console.log(Math.log10(78));

//incremento

let puntaje = 5;
console.log(puntaje++);
console.log(++puntaje);

// para ver el tipo de algun dato

console.log(typeof puntaje);
console.log(typeof resultado);
console.log(typeof elemento);

const numero11 = "20";
const numero21 = "20.4";

//convertir de string a int o float

console.log(Number.parseInt(numero11));
console.log(Number.parseFloat(numero21));

//mirar sin un numero es mayor, menor  o igual a otro

console.log(numero1 > numero2);
console.log(numero1 == numero2);
console.log(numero1 != numero2);

// comparador estricto que se fija en el tipo
console.log(numero1 === numero2);
console.log(numero1 !== numero2);

let numero, numeroo = null;
//como no tiene un comparador esctricto nos va a salir que es true
//de ahi la importnacia de utilizar comparador estrcict
console.log(numero == numeroo);

console.log(numero === numeroo);

const b1 = true;
const b2 = false;

console.log(b1 === b2);

//--------UN OBJETO---------// 
const nombre = "Monitor";
const cost = 300;
const disponidble = true;

const produc = {
    nombre: "Monitor",
    cost: 300,
    dispodible: true,
}

console.log(produc);

//acceder a elemntos de un objeto 
console.log("Nombre ",produc.nombre);

//Eliminar elemnto de un objeto
delete produc.cost;

console.log(produc);

//Extraer el val0or del objeto 
const nom = produc.nombre;
console.log(nom);

/*No me funiono :(
const {nombre} = produc;
console.log(nombre);*/

//Un objeto mas complejo

const pro ={
    nombre: "Monitor",
    precio:200,
    disponible: true,
    info:{
        peso: '1kg',
        medida: '1m',
        fabricacion:{
            pais: 'Colombia'
        }
    }
}

//Para congelar el objeto y que no se pueda cambiar lo que tiene dentro:
Object.freeze(pro);


//Habilitar el modo estricto hace que se cumplan las reglas
//Para saber si el objeto esta congelado o no
console.log(Object.isFrozen(pro));

//lo que hace seal es que no se pueden agregar ni eliminar propiedades pero si se pueden modificar las existenes
Object.seal(pro);

console.log(pro.info.fabricacion.pais);

//Para acceder a un lemnto en espcifico
const{ info, info: {fabricacion, fabricacion: {pais}}}= pro;
console.log(pais);

//una variable al estar declarada com const sus propiedades si se pueden cambiar
pro.nombre = "Mouse";
console.log(pro);
console.log(Object.isSealed(pro));

const medidas ={
    pesoo: '1kg',
    medidaa:'1m'
}

console.log(pro);
console.log(medidas);

//Hay una forma de unir los dos objetos(deben tener las variables con nombres distintos)
const resultado2 = {...pro, ...medidas};
console.log(resultado2);

//Funciones dentro del objeto, toca colocar el this para que no se vaya a otro objeto 
const carro = {
    nombre: "deportivo",
    precio: 300,
    dispodible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de: ${this.precio}`)
    }
}
carro.mostrarInfo();

//Objeto constructor
function element(nombre, precio, dispodible){
    this.nombre = nombre;
    this.precio = precio;
    this.dispodible = true;
}
console.log(element("jasmin",23,false));

const producto0 = new element("Andrea", 54, false);
console.log(producto0);

//objeto keys sirve para verificar si el obejto esta vacio o no (nombre, prescio...)
console.log(Object.keys(carro));

//Objetvo values donde muestra que todos tenga valores osea sale (desportivo, 300...)
console.log(Object.values(carro));

//Obejto entries muestra todo tanto lo que muestra en keys como values
console.log(Object.entries(carro));









