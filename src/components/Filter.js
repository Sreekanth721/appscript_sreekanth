import React from "react";

const Filter = ({ onFilterChange }) => {
  return (
    <div style={styles.sidebarContainer}>
      <h3 style={styles.filterTitle}>Filters</h3>
      <ul style={styles.filterList}>
        {/* Recommended Filter */}
        <li
          onClick={() => onFilterChange("recommended")}
          style={styles.filterItem}
        >
          Recommended
        </li>
        {/* Newest First Filter */}
        <li
          onClick={() => onFilterChange("newest")}
          style={styles.filterItem}
        >
          Newest First
        </li>
        {/* Price: High to Low Filter */}
        <li
          onClick={() => onFilterChange("priceHighToLow")}
          style={styles.filterItem}
        >
          Price: High to Low
        </li>
        {/* Price: Low to High Filter */}
        <li
          onClick={() => onFilterChange("priceLowToHigh")}
          style={styles.filterItem}
        >
          Price: Low to High
        </li>
      </ul>
    </div>
  );
};

// Inline styles
const styles = {
  sidebarContainer: {
    // position: "fixed",
    top: "20px",
    right: "20px",
    width: "250px",
    backgroundColor: "#f9f9f9",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: 100,
  },
  filterTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  filterList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  filterItem: {
    cursor: "pointer",
    padding: "10px 0",
    fontSize: "16px",
    borderBottom: "1px solid #ddd",
    transition: "background-color 0.2s",
  },
};

export default Filter;
