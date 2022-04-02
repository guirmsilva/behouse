import InfoBasica from './components/layout/InfoBasica';
import Endereço from './components/layout/Endereço';
import Emergencia from './components/layout/Emergencia';
import Notes from './components/layout/Notes';

import './App.css';

function App() {
  return (
    <main>

      <form className="formbox">
          <InfoBasica />
          <Endereço />
          <Emergencia />
          <Notes />

          <button>Enviar</button>
        </form>

    </main>
  );
}

export default App;
