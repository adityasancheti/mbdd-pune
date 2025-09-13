import React from "react";

export default function CampCard({ camp }) {
  return (
    <div className="camp-card">
      <h2>{camp.name}</h2>
      <div className="camp-details">
        📍 {camp.address}
        <br />
        🏥 Blood Bank: {camp.bloodBank}
        <br />
        {camp.contacts.map((c, i) => (
          <div key={i}>
            👤 {c.name} ({c.phone})
          </div>
        ))}
      </div>
      <div className="btn-group">
        {camp.register && (
          <a
            href={camp.register}
            target="_blank"
            rel="noreferrer"
            className="btn register-btn"
          >
            ✅ Register
          </a>
        )}
        {camp.map && (
          <a
            href={camp.map}
            target="_blank"
            rel="noreferrer"
            className="btn map-btn"
          >
            📍 Map
          </a>
        )}
        {camp.contacts.map((c, i) => (
          <a key={i} href={`tel:${c.phone}`} className="btn call-btn">
            📞 {c.name}
          </a>
        ))}
      </div>
    </div>
  );
}
