const assert = require('chai').assert;
const { Director, Trabajador, Ingeniero } = require('../empresa.js');
const chai = require('chai');
chai.should();

describe('Director', function () {
  it('Director con el mismo nombre', function () {
    const director = new Director('Cecilia');
    assert.equal(director.nombre, 'Cecilia');
  });


  it('Añadir informe a director', function () {
    const director = new Director('Carlos');
    director.informes.push('Informe de ventas');
    assert.include(director.informes, 'Informe de ventas');
  });


  it('Director sin nombre', function () {
    const director = new Director();
    assert.equal(director.nombre, '');
  });
});


describe('Trabajador', function () {
  it('Trabajador con el mismo nombre', function () {
    const trabajador = new Trabajador('Vanesa');
    assert.equal(trabajador.nombre, 'Vanesa');
  });


  it('Añadir proyecto a un trabajador', function () {
    const trabajador = new Trabajador('Noelia');
    trabajador.proyectos.push('Proyecto');
    assert.include(trabajador.proyectos, 'Proyecto');
  });


  it('Trabajador sin nombre', function () {
    const trabajador = new Trabajador();
    assert.equal(trabajador.nombre, '');
  });
});


describe('Ingeniero', function () {
  it('Ingeniero con el mismo nombre y lenguaje de programación', function () {
    const ingeniero = new Ingeniero('Pablo');
    ingeniero.LenguajeProgramacion = 'JavaScript';
    assert.equal(ingeniero.nombre, 'Pablo');
    assert.equal(ingeniero.LenguajeProgramacion, 'JavaScript');
  });
});


describe('Director', function () {
  it('Director con el mismo nombre', function () {
    const director = new Director('Sergio');
    assert.equal(director.nombre, 'Juan');
  });
});


describe('Trabajador', function () {
  it('Trabajador con el mismo nombre', function () {
    const trabajador = new Trabajador('Carlos');
    assert.equal(trabajador.nombre, 'Pedro');
  });
});


describe('Ingeniero', function () {
  it('Ingeniero con el mismo nombre y lenguaje de programación', function () {
    const ingeniero = new Ingeniero('Sonia');
    ingeniero.LenguajeProgramacion = 'JavaScript';
    assert.equal(ingeniero.nombre, 'Laura');
    assert.equal(ingeniero.LenguajeProgramacion, 'Java');
  });
});

describe('test', () => {
  it("Nombre es un string", () => {
    const ingeniero = new Ingeniero('Cecilia');
    ingeniero.should.have.property('nombre');
    ingeniero.nombre.should.be.a('string');
  })
});