import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle({
  "html, body": {
    maxWidth: "100%",
    overflowX: "hidden",
    height: "100vh",
    padding: 0,
    fontFamily: "Arial, Helvetica, sans-serif",
    lineHeight: "1.6",
    background: "linear-gradient(to bottom, turquoise, greenyellow)",
    display: "flex",
  },

  "section":{
    display: "flex",
    padding: "3px",
    flexDirection: "column",
    alignItems: "center",
    margin: "5px",
    width: "300px",
    border: "10px",
    fontFamily: 'impact, fantasy',
    color: "white",
    boxShadow: "4px 4px 8px 8px rgba(0, 0, 0, 0.2)", // Adds shadow around the section
    borderRadius: "10px",
  },

  "section:hover":{
    boxShadow: "4px 4px 8px 8px rgba(0, 0, 0, 0.52)", // Adds shadow around the section
    transition: "0.4s ease-in-out",
    background: "rgba(67, 161, 67, 0.78)",
    transform: "scale(1.25)",
    color: "white"
  },

  button: {
    color: "white",
    background: "rgba(245, 245, 245, 0.73)",
    border: "none",
    borderRadius: "8px",
    margin: "10px",
    padding: "10px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease, 0.2s ease-in-out",
  },

  "button:hover": {
    background: "darkgreen",
    transform: "scale(1.35)",
  },

  h1: {
    fontSize: "2.5rem",
    color: "#333",
    margin: "1rem",
  },

  h2: {
    fontSize: "2rem",
    color: "#444",
    margin: "0.75rem",
  },

  h3: {
    fontSize: "1.5rem",
    color: "#555",
    margin: "0.5rem",
  },

  p: {
    fontSize: "1rem",
    color: "#white",
  },

  input: {
    border: "1px solid #ccc",
    borderRadius: "4px",
    padding: "8px 12px",
    fontSize: "1rem",
    margin: "1rem",
    width: "100%",
  },

  "input:focus": {
    borderColor: "green",
    outline: "none",
    boxShadow: "0 0 5px rgba(0, 128, 0, 0.5)",
  },

  img:{
    
    borderRadius: "10px",
    overflow: "hidden",
    border: "3px solid rgba(35, 122, 35, 0.3)"
  },

  "imageContainer":{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",

  },

  "imageTitleCombo":{
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    maxWidth: "50%",
    flexWrap: "wrap",
  }
});

export default GlobalStyle;
