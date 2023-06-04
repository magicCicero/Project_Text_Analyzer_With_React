import React, { useState } from "react";
import "./App.css";

function App() {
  // Die Anzahl der Zeichen und Wörter werden mit useState gezählt
  const [count, setCount] = useState(0);
  const [wordsCount, setWordsCount] = useState(0);

  // Zunächst werden die die Zeichen erfasst über diese Funktion. Anschließend wird der State setCount geupdatet, da das Textfeld auf Onchange eingestellt ist. Danach wird das Value an die zweite Funktion mit dem Parameter inputText übergeben und zeitgleich auch der zweite useState geupdatet
  const countInputs = (e) => {
    const inputText = e.target.value;
    setCount(inputText.length);
    setWordsCount(countWords(inputText));
  };

  // die zweite Funktion prüft nun das Value des Inputfeldes nach Wörtern. ist die Länge des Inputs 0 wird entsprechend 0 returned.
  // Ansonsten wird das Value mithilfe der JS Funktion trim() getrimmt und Sonderzeichenmit Leerzeichen ersetzt. Danach wird der bereinigte Text nach diesen eingesetzten Leerzeichen gesplittet und zeitgleich die Länge dieser gesplitteten Wörter returned. Die erste Funktion updated dann immer den useState
  const countWords = (text) => {
    if (text.length === 0) {
      return 0;
    } else {
      let cleanedText = text.trim();
      cleanedText = cleanedText.replace(/\s\s+/g, " ");
      cleanedText = cleanedText.replace(/\n /g, "\n");
      console.log(cleanedText.length);
      return cleanedText.split(" ").length;
    }
  };

  return (
    <>
      <h1>Text Analyzer</h1>
      <input type="text" name="input" id="input" onChange={countInputs} />
      <p className="output">Zeichen: {count}</p>
      <p className="output">Wörter: {wordsCount}</p>
    </>
  );
}

export default App;
