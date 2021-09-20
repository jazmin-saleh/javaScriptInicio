"use Strict";
alert('Hola');

//si no se le define var o let el editor lo toma como var
city = 1;
console.log(city);
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

//este es un objto
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


//----ARRAYS----//
const numeros = [10,20,30];

//const meses = new Array('Enero', 'Febrero', 'Marzo');

console.log(numeros);
//console.log(meses);

const detodo = ["Hola", 19, true, [1,2,3], null, {one:1,two:2}];
console.log(detodo);
//recorrer el array
for(const elemento of detodo){
    console.log(elemento);
}

//Acceder a un elemento de un arrgelo
console.log(numeros[1]);

const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre'];
console.table(meses);//una tabla en la consola

//Cuanto midel el arreglo (tamaño)
console.log(meses.length);

//Agregar en una posicion especifica
meses[9] = "Ultimno mes";
meses.push('octubre');

//acceder a toda la info del arrego
for(let i =0; i < meses.length; i++){
    console.log(meses[i]);
}

//agregar objetos a un arreglo
const car =[];

const pra ={
    nombre: "Monitor",
    precio: 400
}

const pro2 ={
    nombre: "Celular",
    precio: 600
}
const pro3 ={
    nombre: "computador",
    precio: 600
}


//forma 1 de agregar:
car.push(pro2);
car.push(pra);
car.push(pro3);
console.table(car);

//forma 2 de agregra:
//let resulta;
//resulta = [...car, pra];
//resulta = [...resulta, pro2];
//console.table(resulta);

//eliminar elemnto de un arreglo
//eliminar ultimo elemnto:
car.pop();
console.table(car);

//eliminar primer elemnto del arreglo
car.shift();
console.table(car);

//eliminar varios elemntos
car.splice(1,1);
console.table(car);

//Destructing con arreglos (accedera solo un valor en especifico en le arreglo)
const number = [10,20,30,40,50,60];

const [primero, segunod, tercero] = number;

console.log(primero);

console.log(tercero);

//forEach 

const bus =[ 
     {nombre: 'Monitor', precio: 500},
     {nombre: 'compu', precio: 600},
     {nombre: 'Mouse', precio: 700},
     {nombre: 'Teclado', precio: 800},
     {nombre: 'Audifnos', precio: 900},
]

//El forEach recorre el arreglo que ya tenemos
bus.forEach( function(prod){
    console.log(`${prod.nombre} - precio: ${prod.precio}`)
})

//El map Nos crea un nuevo arreglo 
bus.map( function(prod){
    console.log(`${prod.nombre} - precio: ${prod.precio}`)
})


//----FUNTIONS-------//
//la difenrcia entres las dos es que en sumar() se puede llmara antes de la funcion
//en cambio en sumar2() no se puede llmara nates, ya que es como variable
//Declaracion de funcion

function sumar(){
    console.log(2+2);
}

sumar();

//Expresion de funcion (Funtion expresion)
const sumar2 = function(){
    console.log(2+3);
}

sumar2();

const num1 = 20;
const num2 = "20";

// este es una funcion -> nom(valor);
console.log(parseInt(num2));
// este es un metodo -> atributo.nom();
console.log(num1.toString());

// a y b son argumnetos
function sumar(a,b){
    console.log(a+b);
}
sumar(2,6);

//Si no mandan algo por parametros se hace asi para que no salga undefined
function saludar(nombre = 'Desconocido', apellido = ''){
    console.log("Nombre "+nombre+" Apellido "+apellido)
}

saludar("jasmin");

iniciarApp();
function iniciarApp(){
    console.log("INiciar app");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda funsion");
    usuarioAutenticamdo("jasmin");
}

function usuarioAutenticamdo(usuario ){
    console.log("Uusario autenticando"+ usuario);
}

function resta(a,b){
    return b-a;
}

console.log(resta(9,1));

let total =0;

function agregarC(precio){
    return total += precio;
}

total = agregarC(200);
total = agregarC(300);
total = agregarC(300);

console.log(total);

const reproducir ={
    reproductor: function(id){
        console.log(`Reprodicienod la cancion el id ${id}`);
    },
    pausar: function(){
        console.log('pausa');
    }
}

reproducir.reproductor(30);
reproducir.reproductor(20);
reproducir.reproductor(0);

reproducir.pausar();

const aprenidno = function(){
    console.log('apreindo js');
}

//arrowfuntions =>
const aprenidno2 = (tecnologia) =>'apreindo js '+tecnologia;

console.log(aprenidno2("t"));

const buseta =[ 
    {nombre: 'Monitor', precio: 500},
    {nombre: 'compu', precio: 600},
    {nombre: 'Mouse', precio: 700},
    {nombre: 'Teclado', precio: 800},
    {nombre: 'Audifnos', precio: 900},
]

//aplicando arrowFunction a map y foreach
const nuevoA = buseta.map(prod => `${prod.nombre} - precios: ${prod.precio}`);

buseta.forEach(prod => console.log(`${prod.nombre} - precio: ${prod.precio}`));

console.log(nuevoA);

//otra forma de defnir farreglos
function two(){
    const nums = new Array();
    nums.push(34);
    nums.push(35);
    nums.push(36);
    nums.push(37);
    nums.forEach(value=> console.log(value));
}

two();

function tree(){
    const data=[{
        id:345,
        desc:"lopez",
        value:3345
    },
    {
        id:345546,
        desc:"marin",
        value:2345
    },
    {
        id:3545,
        desc:"santana",
        value:2000
    },
];
console.log(data);
}

tree();

function four (){
    const nums = [34,56,78,45,32,21,43,56];
    const squares = nums.map(num => Math.pow(num,2));
    //Sacar numeros pares:
    const odds = nums.filter(num => num % 2 ==0);
    //para sumar todos los numeros de un arrgelo
    const sum = nums.reduce((ant,act)=>ant+act);
    console.log(squares);
    console.log(odds);
    console.log(sum);
}
four();

//----ESTRUCTURAS DE CONTROL-----//
//un signo de igual es asigancion
// dos signos de igual es comparacion no estructa
//tres signos de igual es comparacion estricta

//if
const puntaj = 1000;
if (puntaj != 100) console.log('si es igual');
else console.log('No es igual');

if (puntaj === 1000) console.log('si es igual');
else console.log('No es igual');

const user = true;
const paga = true;
if(user && paga) console.log("si puedes pagra");
else console.log("No se puede pagra");

//switch

const metodoPago = 'efectivo';
switch(metodoPago){
    case 'efectivo':
        console.log("pagaste con efectivo ");
    break;
    default:
        console.log('aun no has seleccionado un metodo de pago');
}

//operador ternario
// if (?)
//else :
const autenticado = true;
const puedeP = false;
console.log(autenticado ? "si esta autenticado" : "no esta autenticado");
console.log(autenticado ? puedeP ? 'si esta autenticado y puede pagar' : 'si autenticado no puede pagar' : 'no esta autenticado');

//for lop
//continue: lo que hace es que asi ya se cumplio la condicion continue el for hasta que se acabe
for(let i = 0; i < 10; i++){
    if(i===5){
        console.log('CINCO');
        continue;
    }
    console.log(i);
}

//while

let i =0;
while(i <10){
    console.log(i);
    i++;
}
//for of
//asignar los elemntos de un arreglo a un variable
const pendisntes = ['tarea','comer','proyectop'];
for(let pendiente of pendisntes){
    console.log(pendiente);
}




