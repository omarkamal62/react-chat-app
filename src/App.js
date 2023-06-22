import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="cdeb2e99-742e-44e3-853e-d581d54966f7"
        userName="john"
        userSecret="qwerty"
      />
    </div>
  );
}

export default App;
