import React, { useEffect, useState } from "react";
import osLogo from "../../public/images/alenoid os image.jpg";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);
  const [logs, setLogs] = useState([]);

  const bootLogs = [
    ">> awakening neural clusters...",
    ">> extracellular matrix integrity: stable",
    ">> psionic channel calibration: 97.4%",
    ">> alien biosystem handshake granted",
    ">> * boot successful *",
  ];
  useEffect(() => {
    let i = 0;
    const stream = setInterval(() => {
      setLogs((prev) => [...prev, bootLogs[i]]);
      i++;
      if (i >= bootLogs.length) {
        clearInterval(stream);
        setTimeout(() => setLoading(false), 500);
      }
    }, 350);
    return () => clearInterval(stream);
  }, []);

  useEffect(() => {
    if (!loading) setTimeout(() => setVisible(false), 900);
  }, [loading]);

  if (!visible) return null;

  return (
    <div
      className={`preloader-screen ${loading ? "opacity-100" : "opacity-0"}`}
    >
      <img src={osLogo} alt="logo" className="w-24 md:w-32" draggable="false" />

      <div className="preloader-log">
        {logs.map((line, idx) => (
          <p
            key={idx}
            className="log-line before:content-['>_'] before:text-[#00ff99]"
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
