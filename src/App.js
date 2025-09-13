import React, { useState } from "react";
import camps from "./data/camps";
import CampCard from "./components/CampCard";
import "./index.css";

export default function App() {
  const [search, setSearch] = useState("");

  const filtered = camps.filter((c) =>
    JSON.stringify(c).toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <img
          src={process.env.PUBLIC_URL + "/mbdd.webp"}
          alt="MBDD"
          className="logo"
        />
        <h1>
          🩸MBDD TYP Pune🩸
          <br />
          17 Sept 2025
        </h1>
        <img
          src={process.env.PUBLIC_URL + "/typ_pune.webp"}
          alt="TYP PUNE"
          className="logo"
        />
      </header>

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

      {/* Local TYP Contacts */}
      <div className="contacts-section">
        <h2>
          📞 Terapanth Yuvak Parishad <strong>Pune</strong>
        </h2>
        <div className="contacts-list">
          <div className="contact-card">
            President: <strong>Manish&nbsp;P&nbsp;Bhandari</strong> <br />
            <a href="tel:9960030090">📱 9960030090</a>
          </div>
          <div className="contact-card">
            Secretary: <strong>Aditya&nbsp;R&nbsp;Sancheti</strong> <br />
            <a href="tel:8275298556">📱 8275298556</a>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <img
          src={process.env.PUBLIC_URL + "/donate_blood.jpg"}
          alt="Event Banner"
          className="bottom-image"
          loading="lazy"
        />
      </div>

      <img
        src={process.env.PUBLIC_URL + "/Thanks.webp"}
        alt="Event Thanks"
        className="pdf-preview"
        loading="lazy"
      />

      <footer className="footer">
        <p>
          ❤️ Built for <strong>MBDD Pune 2025</strong> | Powered by{" "}
          <a href="https://typ-pune.org" target="_blank" rel="noreferrer">
            TYP Pune
          </a>
        </p>
        <p>Designed & Developed by Rajesh Bhansali and Aditya Sancheti</p>
      </footer>
    </div>
  );
}
