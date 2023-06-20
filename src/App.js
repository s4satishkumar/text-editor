import { useState } from "react";
import "./App.css";
import TipTap from "./components/TipTap";


function App() {
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      
      <TipTap setDescription={setDescription} />
    </div>
  );
}

export default App;