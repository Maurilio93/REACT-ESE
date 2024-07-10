import { useState } from "react";
import { Clock } from "./Clock";
import { LanguageContext } from "./LanguageContext";

function App() {
  const [language, setLanguage] = useState("en");

  function handlerSetLanguage(language) {
    setLanguage(language);
  }

  return (
    <div>
      <button onClick={() => handlerSetLanguage("it")}>IT</button>
      <button onClick={() => handlerSetLanguage("en")}>EN</button>
      <LanguageContext.Provider value={language}>
        <div>
          <Clock></Clock>
        </div>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
