import { useState } from "react";
import { TextField, Result } from "./components";
// css
import "./App.css";

function App() {
  const [capPiste, setCapPiste] = useState(0);
  const [capVent, setCapVent] = useState(0);
  const [forceVent, setForceVent] = useState(0);

  return (
    <div className="main">
      <h1>Calculateur de </h1>
      <header>
        <TextField label="Cap de la piste" data={capPiste} setData={setCapPiste} />
        <TextField label="Direction du vent" data={capVent} setData={setCapVent} />
        <TextField label="Force du vent" data={forceVent} setData={setForceVent} />
      </header>
      <section>
        <Result data={{ capPiste, capVent, forceVent }} />
      </section>
    </div>
  );
}

export default App;
