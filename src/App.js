import "./App.css";
import socketIOClient from "socket.io-client";
import { useState } from "react";

function App() {
  const socket = socketIOClient("http://localhost:3001");
  const [connected, setConnected] = useState(socket);

  return (
    <div className="App">
      <div className="div_container"></div>
    </div>
  );
}

export default App;
