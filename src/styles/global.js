import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle({
  "html, body": {
    maxWidth: "100%",
    overflowX: "hidden",
    height: "100vh",
    padding: 0,
    fontFamily: "Arial, Helvetica, sans-serif",
    lineHeight: "1.6",
    background: "linear-gradient(to bottom, turquoise, green)",
  },

  "customSection":{
    display: "flex",
    padding: "3px",
    flexDirection: "column",
    alignItems: "center",
    margin: "5px",
    width: "300px",
    border: "10px",
    fontFamily: 'impact, fantasy',
    color: "white",
    boxShadow: "4px 4px 8px 8px rgba(0, 0, 0, 0.2)", // Adds shadow around the customSection
    borderRadius: "10px",
    marginBottom: "20px"
  },

  "customSection:hover":{
    boxShadow: "4px 4px 8px 8px rgba(0, 0, 0, 0.52)", // Adds shadow around the customSection
    transition: "0.4s ease-in-out",
    background: "rgba(31, 168, 88, 0.92)",
    transform: "scale(1.25)",
    color: "white"
  },

  button: {
    color: "white",
    background: "rgba(245, 245, 245, 0.73)",
    border: "none",
    borderRadius: "8px",
    margin: "5px",
    padding: "10px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s ease, transform 0.2s ease, 0.2s ease-in-out",
  },

  "button:hover": {
    background: "darkgreen",
    transform: "scale(1.35)",
  },


 "divider":{
  height: "100%", /* Full height to divide the two sections */
  width: "1px", /* Thickness of the divider */
  backgroundColor: "#ccc", /* Light gray divider line */
  margin: "0 10px" /* Spacing around the divider */
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
    maxWidth: "80%",
    flexWrap: "wrap",
  },

});

export default GlobalStyle;
