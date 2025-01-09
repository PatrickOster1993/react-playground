import React from "react";
import LikeButton from "../components/likeButton";
import DeletButton from "../components/deletButton";


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
        height: "500px", // Höhe des Bildes
        borderRadius: "15px", // Abgerundete Ecken für das Bild
        objectFit: "cover", // Bild skalieren, ohne Verzerrung
    };

    const descContainerStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: "10px"
    };

    const descStyle = {
        marginTop: "10px",
        textAlign: "center",
        fontSize: "16px",
        color: "#333"

    };


    return (
        <div style={gridStyle}>
        {photos.map((photo, index) => (
            <div key={index} style={frameStyle} className="frame">
                <img src={photo.src} alt={photo.alt} desc={photo.desc} style={imageStyle} />
                    <div style={descContainerStyle}>
                        <LikeButton />
                        <p style= {descStyle}>{photo.desc}</p> 
                        <DeletButton />
                    </div>        
            </div>
        ))}
        </div>
    );
    };

    export default PhotoGrid;
