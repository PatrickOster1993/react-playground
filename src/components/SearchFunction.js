// src/components/SearchFunction
import React, { useState } from "react"

const SearchFunction = ({ images, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearchChange = (query) => {
    setSearchQuery(query.toLowerCase())
    const filteredImages = images.filter((image) =>
      image.desc.toLowerCase().includes(query.toLowerCase())
    )
    onFilter(filteredImages)
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Suchen..."
        value={searchQuery}
        onChange={(e) => handleSearchChange(e.target.value)}
        style={{
          width: "40%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  )
}

export default SearchFunction
