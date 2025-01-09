import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  /* Entfernt horizontales Scrollen und sorgt für maximale Breite */
  html, body {
    max-width: 100%;
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif; /* Definiert Schriftart */
    line-height: 1.6; /* Verbessert Lesbarkeit von Text */
  }

  /* Standardstil für Buttons */
  button {
    color: white;
    background: green;
    border: none;
    border-radius: 8px; /* Rundet die Ecken der Buttons ab */
    margin: 10px; /* Fügt etwas Außenabstand hinzu */
    padding: 10px; /* Fügt etwas Innenabstand hinzu */
    font-size: 1rem; /* Passt die Schriftgröße an */
    cursor: pointer; /* Zeigt einen Zeiger an, wenn der Button schwebt */
    transition: background 0.3s ease, transform 0.2s ease; /* Fügt weiche Übergänge hinzu */
  }

  /* Hover-Effekt für Buttons */
  button:hover {
    background: darkgreen; /* Ändert die Hintergrundfarbe beim Schweben */
    transform: scale(1.05); /* Vergrößert den Button leicht */
  }

  /* Titelstile */
  h1 {
    font-size: 2.5rem; /* Große, prominente Schriftgröße */
    color: #333; /* Dunkles Grau für eine gute Lesbarkeit */
    margin: 1rem; /* Abstand zum nächsten Element */
  }

  h2 {
    font-size: 2rem;
    color: #444;
    margin: 0.75rem;
  }

  h3 {
    font-size: 1.5rem;
    color: #555;
    margin: 0.5rem;
  }

  /* Standardstil für Absätze */
  p {
    font-size: 1rem;
    color: #666;
    margin: 1rem; /* Abstand zwischen Absätzen */
  }

  /* Standardstil für Eingabefelder */
  input {
    border: 1px solid #ccc;
    border-radius: 4px; /* Leicht abgerundete Ecken */
    padding: 8px 12px;
    font-size: 1rem;
    margin: 1rem;
    width: 100%; /* Eingabefelder passen sich der Breite ihres Containers an */
  }

  /* Fokusstil für Eingabefelder */
  input:focus {
    border-color: green; /* Grüner Rand beim Fokus */
    outline: none; /* Entfernt die Standardumrandung */
    box-shadow: 0 0 5px rgba(0, 128, 0, 0.5); /* Fügt einen leichten Schatten hinzu */
  }

`
export default GlobalStyle
