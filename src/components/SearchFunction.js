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
    <input
      type="text"
      placeholder="Suchen..."
      value={searchQuery}
      onChange={(e) => handleSearchChange(e.target.value)}
      style={{
        width: "100%",
        padding: "10px",
        margin: "20px 0",
        fontSize: "16px",
        borderRadius: "5px",
        border: "1px solid #ccc",
      }}
    />
  )
}

export default SearchFunction