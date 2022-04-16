import { useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

function App() {
  const alanKey = process.env.REACT_APP_ALAN_KEY;

  useEffect(() => {
    function updateScreen(time) {
      // Make visual updates here.
      alanBtn({
        key: alanKey,
        onCommand: ({ command }) => {
          if (command === "testCommand") {
            alert("This code was executed");
          }
        },
      });
    }

    requestAnimationFrame(updateScreen);
  }, []);
  return (
    <div className="App">
      <h1>AI News Reader</h1>
    </div>
  );
}

export default App;
