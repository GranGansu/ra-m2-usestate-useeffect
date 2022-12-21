import './App.css';
import React, { useState, useEffect } from 'react'
import Triangulo from './components/Triangulo'
import Circulo from './components/Circulo'
import Cuadrado from './components/Cuadrado'
function App() {
  const [triangulo, setTriangulo] = useState({ color: '#79d747', numero: '100' })
  const [cuadrado, setCuadrado] = useState({ color: '#843333', numero: '99' })
  const [circulo, setCirculo] = useState({ color: '#2c3fd7', numero: '98' })

  useEffect(() => {
    triangulo.color === cuadrado.color && circulo.color === cuadrado.color && alert('Todas las figuras tienen el mismo color')
  }, [triangulo.color, cuadrado.color, circulo.color])
  useEffect(() => {
    triangulo.numero === cuadrado.numero && circulo.numero === cuadrado.numero && alert('Todas las figuras tienen el mismo tamaño')
  }, [triangulo.numero, cuadrado.numero, circulo.numero])
  return (
    <div className="App">
      <h1>Ejercicio useState y useEffect</h1>
      <Triangulo estado={triangulo} setter={setTriangulo}></Triangulo>
      <Circulo estado={circulo} setter={setCirculo}></Circulo>
      <Cuadrado estado={cuadrado} setter={setCuadrado}></Cuadrado>
    </div>
  );
}

export default App;
