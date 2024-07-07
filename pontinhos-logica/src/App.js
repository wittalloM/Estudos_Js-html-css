
import { useState } from 'react';
import devImage from './imagens/Ft-PfGoogle1.png';
import './App.css';



function App() {
  const [list, setList] = useState([]);
  const handleClick = (event) => {
    const nDot = {
      clientY: event.clientY,
      clientX: event.clientX,
    };

    console.log(nDot);
    setList((prev) => [...prev, nDot]);
  };

  return (
    <>
    <div className='cabecalho'>
      <h3>Desafio React;</h3>
      <p><strong>Deafio 1</strong> : Utilizando conhecimentos de Desenvolvimento Web(HTML,CSS,JS)
        construa uma página que possua elementos que possam capturar eventos de clique do usuário
         e renderizar algumas formas no local exato do clique do mesmo;
      </p>
    </div>
    <div id='Game-Pad' onClick={handleClick}>
      {list.map((item) => (
        <span
          className='pontinho'
          style={{ left: item.clientX, top: item.clientY }}
        />
      ))}
    </div>
    <div className='footer'>
      <p>Desafio React</p>
      <p><strong>wittalloM.</strong></p>
      <img src={devImage} alt="Imagem Perfil do Desenvolvedor" />
    </div>
    </>
  );
}

export default App;
