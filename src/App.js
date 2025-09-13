import React, { useState } from "react";
import camps from "./data/camps";
import CampCard from "./components/CampCard";
import "./index.css";

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = camps.filter(c =>
    JSON.stringify(c).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <h1>🩸 Donor Registration Camps - Pune 2025</h1>
      <input
        id="search"
        type="text"
        placeholder="🔍 Search blood camp, area, or name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="camp-container">
        {filtered.map((camp, i) => (
          <CampCard key={i} camp={camp} />
        ))}
      </div>
    </div>
  );
}
