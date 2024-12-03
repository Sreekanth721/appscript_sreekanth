import React from "react";

const Header = () => {
  return (
    <div>
      {/* Header Section */}
      <header style={{ 
          display: "flex", 
          justifyContent: "space-between", 
          alignItems: "center", 
          padding: "10px 20px", 
          background: "#fff", 
          borderBottom: "1px solid #ccc" 
        }}>
        {/* Left: Logo */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src="https://via.placeholder.com/40"
            alt="Logo"
            style={{ height: "40px", width: "40px" }}
          />
        </div>

        {/* Center: Title */}
        <h1 style={{ margin: 0, fontSize: "20px", fontWeight: "bold" }}>LOGO</h1>

        {/* Right: Icons */}
        <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
          <span style={{ cursor: "pointer" }}>🔔</span> {/* Icon 1 */}
          <span style={{ cursor: "pointer" }}>📩</span> {/* Icon 2 */}
          <span style={{ cursor: "pointer" }}>⚙️</span> {/* Icon 3 */}
          <span style={{ cursor: "pointer" }}>👤</span> {/* Icon 4 */}
        </div>
      </header>

      {/* Navigation Section */}
      <nav style={{
          display: "flex", 
          justifyContent: "center", 
          padding: "10px 0", 
          background: "#f9f9f9", 
          borderBottom: "1px solid #ddd" 
        }}>
        <ul style={{ 
            display: "flex", 
            gap: "20px", 
            listStyle: "none", 
            padding: 0, 
            margin: 0, 
            fontSize: "16px", 
            fontWeight: "500" 
          }}>
          <li style={{ cursor: "pointer" }}>Shop</li>
          <li style={{ cursor: "pointer" }}>Skills</li>
          <li style={{ cursor: "pointer" }}>Stories</li>
          <li style={{ cursor: "pointer" }}>About</li>
          <li style={{ cursor: "pointer" }}>Contact Us</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
