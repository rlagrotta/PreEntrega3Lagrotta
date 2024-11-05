import React from 'react';

const Hero = ({ page }) => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        backgroundColor: '#e0e0e0', // Fondo gris claro
        height: '400px',
      }}
    >
      <h1 className="text-center">{page}</h1>
    </div>
  );
};

export default Hero;