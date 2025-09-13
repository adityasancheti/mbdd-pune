import React, { useState } from "react";

export default function CampCard({ camp }) {
  const [showAll, setShowAll] = useState(false);

  const visibleContacts = showAll ? camp.contacts : camp.contacts.slice(0, 2);

  return (
    <div className="camp-card">
      <h2>{camp.name}</h2>
      <div className="camp-details">
        <b>📍 {camp.address}</b>
        <br />
        <br />
        🏥 Blood Bank: {camp.bloodBank}
        {/* <br />
        {camp.contacts.map((c, i) => (
          <div key={i}>
            👤 {c.name} ({c.phone})
          </div>
        ))} */}
      </div>

      <div className="btn-row">
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
      </div>

      <div className="call-row">
        {visibleContacts.map((c, i) => (
          <a key={i} href={`tel:${c.phone}`} className="btn call-btn">
            📞 {c.name}
          </a>
        ))}
        {camp.contacts.length > 2 && !showAll && (
          <button className="btn more-btn" onClick={() => setShowAll(true)}>
            +{camp.contacts.length - 2} More
          </button>
        )}
      </div>
    </div>
  );
}
