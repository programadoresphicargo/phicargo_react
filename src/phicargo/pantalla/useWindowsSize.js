import { useState, useEffect } from 'react';

function useWindowSize() {
  // Estado inicial con el tamaño actual de la ventana
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Función para actualizar el tamaño en el estado
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Agrega el listener al evento 'resize'
    window.addEventListener('resize', handleResize);

    // Limpia el listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []); // El array vacío asegura que este efecto se ejecute solo al montar y desmontar

  return windowSize; // Retorna el tamaño de la ventana
}

export default useWindowSize;
