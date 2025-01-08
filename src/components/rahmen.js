import React from "react";

const PhotoGrid = ({ photos }) => {
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // Immer 2 Bilder pro Reihe
    gap: "20px", // Abstand zwischen den Bildern
    padding: "20px",
  };

  const frameStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px", // Abgerundete Ecken für den Rahmen
    border: "5px solid #ccc", // Rahmenfarbe und Dicke
    padding: "10px", // Innenabstand zwischen Rahmen und Bild
    backgroundColor: "#f9f9f9", // Hintergrundfarbe des Rahmens
    flexDirection: "column"
  };

  const imageStyle = {
    width: "100%", // Bild passt sich an den Rahmen an
    height: "300px", // Höhe des Bildes
    borderRadius: "15px", // Abgerundete Ecken für das Bild
    objectFit: "cover", // Bild skalieren, ohne Verzerrung
  };

  const descStyle = {
    marginTop: "10px",
    textAlign: "center",
    fontSize: "16px",
    color: "#333"

  }

  return (
    <div style={gridStyle}>
      {photos.map((photo, index) => (
        <div key={index} style={frameStyle}>
            <img src={photo.src} alt={photo.alt} desc={photo.desc}style={imageStyle} />
            <p style= {descStyle}>{photo.desc}</p>    
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
