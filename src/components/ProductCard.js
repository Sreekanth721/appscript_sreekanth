import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        transition: "all 0.3s ease",
        height: "auto",
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        style={{
          width: "100%",
          height: "auto",
          maxWidth: "200px", // Limit max size
          objectFit: "contain", // Prevents distortion of image
          maxHeight: "200px"
        }}
      />
      <h3
        style={{
          fontSize: "16px",
          margin: "10px 0",
          textAlign: "center",
          height: "40px", // Fixes height for consistency
          overflow: "hidden", // Prevents overflow
          textOverflow: "ellipsis", // Adds ellipsis for long text
          whiteSpace: "nowrap", // Prevents text from wrapping
          maxWidth: "200px"
        }}
      >
        {product.title}
      </h3>
      <p
        style={{
          fontSize: "18px",
          fontWeight: "bold",
          color: "#333",
          margin: "5px 0",
        }}
      >
        ${product.price}
      </p>
    </div>
  );
};

export default ProductCard;
