import React, { useState } from 'react';
import Tarjeta from './Tarjeta';

function Formulario({ onSubmit }) {
    const [animal, setAnimal] = useState('');
    const [habitat, setHabitat] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [esValido, setEsValido] = useState(true);
  
    const handleAnimalChange = (event) => {
      setAnimal(event.target.value);
    };
  
    const handleHabitatChange = (event) => {
      setHabitat(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const trimmedAnimal = animal.trim();
      const trimmedHabitat = habitat.trim();
  
      if (trimmedAnimal.length < 3 || trimmedAnimal.match(/^\s/) || trimmedHabitat.length < 7) {
        // Invalid input
        setEsValido(false);
        setSubmitted(true);
      } else {
        // Valid submission
        setEsValido(true);
        setSubmitted(true);
        onSubmit(trimmedAnimal, trimmedHabitat); // Pass data to parent component
      }
    };
  
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Animal:
              <input type="text" value={animal} onChange={handleAnimalChange} />
            </label>
            <br />
            <label>
              Hábitat:
              <input type="text" value={habitat} onChange={handleHabitatChange} />
            </label>
            <br />
            <button type="submit">Enviar</button>
          </form>
          {submitted && esValido && <p>Datos válidos</p>}
          {submitted && !esValido && <p>Por favor chequea que la información sea correcta.</p>}
        </div>
      );
    }

export default Formulario