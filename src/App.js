import "./App.css";
import socketIOClient from "socket.io-client";
import { useState, useEffect } from "react";

function App() {
  const socket = socketIOClient("http://localhost:3001");
  const [connected, setConnected] = useState(null);
  const [messages, setMessages] = useState([""]);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("initialMessageList", messages, socket.id);
      return () => {
        socket.emit("disconnect", () => {
          console.log("disconnected");
        });
      };
    });
  }, []);

  return (
    <div className="App">
      <div className="div_container"></div>
    </div>
  );
}

export default App;
