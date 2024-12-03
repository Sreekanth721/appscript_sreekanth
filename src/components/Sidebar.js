import React, { useState } from "react";
import './Sidebar.css';

const Sidebar = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const sections = [
    "Ideal For",
    "Occasion",
    "Work",
    "Fabric",
    "Segment",
    "Suitable For",
    "Raw Materials",
    "Pattern",
  ];

  return (
    <div className="sidebar">
      <div className="customizable-option">
        <input type="checkbox" id="customizable" />
        <label htmlFor="customizable">Customizable</label>
      </div>

      {sections.map((section) => (
        <div key={section} className="sidebar-section">
          <div
            className="section-header"
            onClick={() => toggleSection(section)}
          >
            {section}
            <span>{expandedSections[section] ? "-" : "+"}</span>
          </div>
          {expandedSections[section] && (
            <div className="section-content">
              <p>All</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
