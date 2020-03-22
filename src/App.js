import React, { useState } from 'react';

function App() {
  const [techs, setTechs] = useState(['ReactJS', 'React Native']);
  const [newTech, setNewTech] = useState('');

  function hanldeAdd() {
    setTechs([...techs, newTech ]);
    setNewTech('');
  }

  return (
    <>
      <ul>
        { techs.map(tech => (
          <li key={ tech }>{ tech }</li>
        ))}
      </ul>

      <input value={ newTech } onChange={ e => setNewTech(e.target.value) } />

      <button type="button" onClick={ hanldeAdd }>Add Tech</button>
    </>
  );
}

export default App;