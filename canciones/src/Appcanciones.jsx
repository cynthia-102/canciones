import React from 'react';
import './Appcanciones.css';
import Card from './components/Cardcanciones';
import fondo from './assets/fondo.png';
import icono1 from './assets/icono.png';
import icono2 from './assets/icono2.png';
import icono3 from './assets/icono3.png';
import icono4 from './assets/icono4.png';
import icono5 from './assets/icono5.png';
import icono6 from './assets/icono6.png';

const App = () => {
  const cards = [
    { title: 'Recicla, recicla', image: icono1, videoUrl: 'https://www.youtube.com/watch?v=7ixrpM9kPUU' },
    { title: 'Reducir, reutilizar y reciclar con Hiperdino', image: icono2, videoUrl: 'https://www.youtube.com/watch?v=06QjyuFcuUY' },
    { title: 'El reggaetón del reciclado', image: icono3, videoUrl: 'https://www.youtube.com/watch?v=0k1DGevxYCk' },
    { title: '¡Aprende el baile del reciclaje con cantajuegos!', image: icono4, videoUrl: 'https://www.youtube.com/watch?v=qq6M-8nkI5g' },
    { title: 'La canción y el reciclaje', image: icono5, videoUrl: 'https://www.youtube.com/watch?v=e-pM5ArUYNI' },
    { title: 'El medioambiente vamos a cuidar', image: icono6, videoUrl: 'https://www.youtube.com/watch?v=_Ic_oz9FN44' },
  ];

  const handleButtonClick = () => {
    console.log('Botón clickeado');
  };

  return (
    <div className="appcanciones" style={{ backgroundImage: `url(${fondo})` }}>
      <h1>CANCIONES</h1>
      <button className="top-button" onClick={handleButtonClick}>INICIO</button>
      <div className="card-container">
        {cards.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            image={card.image}
            videoUrl={card.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
