import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanKey = process.env.REACT_APP_ALAN_KEY;

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ commande }) => {
        if (commande === "testCommand") {
          alert("this code was executed");
        }
      },
    });
  }, []);
  return (
    <div className="App">
      <h1>AI News Application</h1>
    </div>
  );
}

export default App;
