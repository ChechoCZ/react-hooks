import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [techs, setTechs] = useState([]);
  const [newTech, setNewTech] = useState('');

  const hanldeAdd = useCallback(() => {
    setTechs([...techs, newTech ]);
    setNewTech('');
  }, [techs, newTech]);

  useEffect(() => {
    const storageTechs = localStorage.getItem('techs');

    if (storageTechs) {
      setTechs(JSON.parse(storageTechs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  const techsSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        { techs.map(tech => (
          <li key={ tech }>{ tech }</li>
        ))}
      </ul>

      <input value={ newTech } onChange={ e => setNewTech(e.target.value) } />

      <button type="button" onClick={ hanldeAdd }>Add Tech</button>

      <br/><br/>

      <strong>There are { techsSize } techs registered.</strong>
    </>
  );
}

export default App;
