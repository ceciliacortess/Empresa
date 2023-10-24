function Empleado(nombre){
    this.nombre = nombre || "";
    this.departamento = "Informático";
}

function Director(nombre){
    Empleado.call(this, nombre);
    this.informes = [];
}

Director.prototype = new Empleado();
Director.prototype.constructor = Director;

function Trabajador(nombre){
    Empleado.call(this, nombre);
    this.proyectos = [];
}

Trabajador.prototype = new Empleado();
Trabajador.prototype.constructor = Trabajador;

function Ingeniero(nombre){
    Trabajador.call(this, nombre);
    this.lenguajeProgramacion = "";
    this.departamento = "Ingeniería";
}

Ingeniero.prototype = new Trabajador();
Ingeniero.prototype.constructor = Ingeniero;

var Director1 = new Director("Pepito");
var Director2 = new Director("Manolo");
var Director3 = new Director("Hortencia");

var Ingeniero1 = new Ingeniero("Juan");
var Ingeniero2 = new Ingeniero("Carmen");
var Ingeniero3 = new Ingeniero("Pablo");
var Ingeniero4 = new Ingeniero("Emilio");

Ingeniero1.lenguajeProgramacion = "JAVA";
Ingeniero1.lenguajeProgramacion = "C++";
Ingeniero1.lenguajeProgramacion = "JS";
Ingeniero1.lenguajeProgramacion = "HTML5";

Director2.informes.push("Informe produccion enero.");
Director2.informes.push("Informe produccion febrero.");
Director2.informes.push("Informe produccion marzo.");
Director3.informes.push("Informe despido becario.");

document.write('______********** NOMBRES DIRECTORES **********______'+'<br><br>');
document.write('Director --> '+ Director1.nombre + '<br>');

if(Director1.informes.length > 0){
    document.write('______********** INFORMES de: ' + Director1.nombre + ': <br>');
    for (let index = 0; index < Director1.informes.length; index++) {
        document.write('____________**********'+Director1.informes[index]+'<br>');
    }
}
document.write('Director --> '+ Director2.nombre + '<br>');
if(Director2.informes.length > 0){
    document.write('______********** INFORMES de: ' + Director2.nombre + ': <br>');
    for (let index = 0; index < Director2.informes.length; index++) {
        document.write('____________**********'+Director2.informes[index]+'<br>');
    }
}
document.write('Director --> '+ Director3.nombre + '<br>');
if(Director3.informes.length > 0){
    document.write('______********** INFORMES de: ' + Director3.nombre + ': <br>');
    for (let index = 0; index < Director3.informes.length; index++) {
        document.write('____________**********'+Director3.informes[index]+'<br>');
    }
}
document.write('<br>______********** INGENIEROS **********______'+'<br>');
document.write('____________********** El ingeniero ' + Ingeniero1.nombre + ' usa el lenguaje de programación ' + Ingeniero1.lenguajeProgramacion + ' en el departamento ' + Ingeniero1.departamento + '<br>');
document.write('____________********** El ingeniero ' + Ingeniero2.nombre + ' usa el lenguaje de programación ' + Ingeniero2.lenguajeProgramacion + ' en el departamento ' + Ingeniero2.departamento + '<br>');
document.write('____________********** El ingeniero ' + Ingeniero3.nombre + ' usa el lenguaje de programación ' + Ingeniero3.lenguajeProgramacion + ' en el departamento ' + Ingeniero3.departamento + '<br>');
document.write('____________********** El ingeniero ' + Ingeniero4.nombre + ' usa el lenguaje de programación ' + Ingeniero4.lenguajeProgramacion + ' en el departamento ' + Ingeniero4.departamento + '<br>');