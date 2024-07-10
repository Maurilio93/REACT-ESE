import { useState, useEffect } from "react";
import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

export function Clock() {
  const language = useContext(LanguageContext);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>
      {language === "en" ? "Current Time" : "Ora Corrente"}:{" "}
      {date.toLocaleTimeString()}
      </h2>
    </div>
  );
}
