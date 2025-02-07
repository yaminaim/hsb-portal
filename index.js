import { useState } from "react";

export default function StudentGrades() {
  const [matrikelnummer, setMatrikelnummer] = useState("");
  const [studentData, setStudentData] = useState(null);

  const mockData = {
    "123456": {
      name: "Max Mustermann",
      studiengang: "Informatik",
      semester: 3,
      noten: [
        { modul: "Mathematik", note: "1.3" },
        { modul: "Programmierung", note: "2.0" },
        { modul: "Datenbanken", note: "1.7" }
      ]
    }
  };

  const fetchGrades = () => {
    setStudentData(mockData[matrikelnummer] || null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Prüfungsergebnisse abrufen</h1>
      <input
        type="text"
        placeholder="Matrikelnummer eingeben"
        value={matrikelnummer}
        onChange={(e) => setMatrikelnummer(e.target.value)}
      />
      <button onClick={fetchGrades}>Abrufen</button>

      {studentData && (
        <div>
          <h2>{studentData.name}</h2>
          <p>Studiengang: {studentData.studiengang}</p>
          <p>Semester: {studentData.semester}</p>
          <h3>Noten:</h3>
          <ul>
            {studentData.noten.map((item, index) => (
              <li key={index}>
                {item.modul}: {item.note}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
