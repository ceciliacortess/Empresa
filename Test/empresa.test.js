const chai = require('chai');
const expect = chai.expect;
const { Empleado, Director, Trabajador, Ingeniero } = require('../tests_mocha_chai/empresa.js');


describe('Empleado', () => {
  it('Debe crear un empleado con el nombre y el departamento por defecto dados', () => {
    const empleado = new Empleado('John');
    expect(empleado.nombre).to.equal('John');
    expect(empleado.departamento).to.equal('Informatica');
  });
});


describe('Director', () => {
  it('Debe crear un director con el nombre dado y una matriz vacía de informes', () => {
    const director = new Director('Carlos');
    expect(director.nombre).to.equal('Carlos');
    expect(director.informes).to.be.an('array').that.is.empty;
  });
});


describe('Trabajador', () => {
  it('Debe crear un trabajador con el nombre dado y una matriz vacía de proyectos', () => {
    const trabajador = new Trabajador('Bob');
    expect(trabajador.nombre).to.equal('Bob');
    expect(trabajador.proyectos).to.be.an('array').that.is.empty;
  });
});


describe('Ingeniero', () => {
  it('Debe crear un ingeniero con el nombre, el lenguaje de programación y el departamento indicados', () => {
    const ingeniero = new Ingeniero('Eve');
    ingeniero.LenguajeProgramacion = 'JavaScript';
    expect(ingeniero.nombre).to.equal('Eve');
    expect(ingeniero.LenguajeProgramacion).to.equal('JavaScript');
    expect(ingeniero.departamento).to.equal('Ingeniería');
  });
});
