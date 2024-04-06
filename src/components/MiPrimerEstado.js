import React, { useState } from 'react';

export const MiPrimerEstado = () => {

  const [nombre, setNombre] = useState('');
  const cambiarNombre = (e, nombre) => {
    setNombre(nombre);
  }

  return (
    <div>
      <h3>Componente: MiPrimerEstado</h3>
      <p>{nombre}</p>
      <input type='text' onKeyUp={e => cambiarNombre(e, e.target.value)} placeholder='Nombre' />
      &nbsp;
      <button onClick={e => cambiarNombre(e, 'Elisa')}>Change</button>

    </div>
  );
}
