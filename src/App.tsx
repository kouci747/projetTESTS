import { useState } from "react";
import { TextField, Result } from "./components";
// css
import "./App.css";

function App() {
  const [capPiste, setCapPiste] = useState(null);
  const [capVent, setCapVent] = useState(null);
  const [forceVent, setForceVent] = useState(null);
  const [error, setError] = useState(false);

  return (
    <div className="main">
      <h1>TakeOff Calculator</h1>
      <header>
        <TextField
          error={{ error, setError }}
          label="Cap de la piste"
          data={capPiste}
          setData={setCapPiste}
          min={1}
          max={360}
        />
        <div className="wind">
          <TextField error={{ error, setError }} label="Direction du vent" data={capVent} setData={setCapVent} />
          <h1>/</h1>
          <TextField error={{ error, setError }} label="Force du vent" data={forceVent} setData={setForceVent} />
        </div>
      </header>
      <section>
        <Result error={error} data={{ capPiste, capVent, forceVent }} />
      </section>
    </div>
  );
}

export default App;
