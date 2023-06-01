import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tarjeta from './Components/Tarjeta'
import Formulario from './Components/Formulario'

function App() {
  const [animal, setAnimal] = useState('');
  const [habitat, setHabitat] = useState('');

  const handleDataSubmit = (animalData, habitatData) => {
    setAnimal(animalData);
    setHabitat(habitatData);
  };

  return (
    <div className="App">
      <Formulario onSubmit={handleDataSubmit} />
      <Tarjeta animal={animal} habitat={habitat} />
    </div>
  );
}
export default App
