import React from 'react'

function Tarjeta({ animal, habitat }) {
    return (
      <div className="card">
        <h2>Información del Animal</h2>
        <p>
          <strong>Cual es tu animal favorito?</strong> {animal}
        </p>
        <p>
          <strong>Cual es el habitat en el que habita?</strong> {habitat}
        </p>
      </div>
    );
  }
  

export default Tarjeta