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
    border-radius: 100px; /* Rundet die Ecken der Buttons ab */
    margin: 10px; /* Fügt etwas Außenabstand hinzu */
    padding: 10px; /* Fügt etwas Innenabstand hinzu */
    font-size: 1rem; /* Passt die Schriftgröße an */
    cursor: pointer; /* Zeigt einen Zeiger an, wenn der Button schwebt */
    transition: background 0.3s ease, transform 0.2s ease; /* Fügt weiche Übergänge hinzu */
  }

  /* Hover-Effekt für Buttons */
  button:hover {
    background: red; /* Ändert die Hintergrundfarbe beim Schweben */
    transform: scale(1.05); /* Vergrößert den Button leicht */
  }

  /* Galerie-Element Styling */
  .gallery-element {
    display: inline-block;
    margin: 15px; /* Abstand zwischen den Galerie-Elementen */
    padding: 15px;
    text-align: center;
    border: 2px solid #ccc; /* Rahmen um jedes Bild */
    border-radius: 10px; /* Abgerundete Ecken für jedes Galerie-Element */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Leichter Schatten */
    background-color: #fff; /* Weißer Hintergrund */
    transition: transform 0.3s ease; /* Weiche Übergangsanimation */
  }

  /* Hover-Effekt für Galerie-Elemente */
  .gallery-element:hover {
    transform: scale(1.05); /* Vergrößert das Element leicht */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Stärkerer Schatten beim Hover */
  }

  /* Picture Styling */
  .picture {
    display: flex;
    flex-direction: column;
    align-items: center; /* Zentriert den Inhalt horizontal */
    padding: 10px;
    margin: 10px;
    background-color: #f9f9f9; /* Heller Hintergrund */
    border-radius: 8px; /* Abgerundete Ecken für jedes Bild */
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1); /* Leichter Schatten */
    width: 200px; /* Setzt eine feste Breite für alle Bilder */
    height: 250px; /* Setzt eine feste Höhe für die Bilder */
    overflow: hidden; /* Verhindert, dass das Bild den Container überlappt */
  }

  .picture img {
    width: 100%;
    height: auto; /* Bild skaliert proportional zur Breite */
    max-height: 150px; /* Maximalhöhe für die Bilder */
    object-fit: cover; /* Verhindert, dass das Bild verzerrt wird */
    border-radius: 8px; /* Abgerundete Ecken für das Bild */
  }

  /* Beschreibung Styling */
  .picture p {
    font-size: 1rem;
    color: #333;
    margin-top: 10px; /* Abstand zwischen Bild und Text */
    font-weight: 500;
  }

  /* Stil für Like-Button */
  .picture button {
    margin-top: auto; /* Stellt sicher, dass der Button am unteren Ende des Containers bleibt */
    background-color: white;
    border: 2px solid #ccc;
    color: #333;
    transition: background-color 0.3s ease;
  }

  .picture button:hover {
    background-color: #f0f0f0;
  }
`
export default GlobalStyle
