import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Form } from "./Components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
