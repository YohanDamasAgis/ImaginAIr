// app/apiFetch/page.js
"use client";

import { useState } from 'react';

export default function ApiFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const result = await response.json();
    setData(result);
} catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
} finally {
    setLoading(false);
}
};

return (
<>
    {/* Div noire en haut avec le texte centré */}
    <div className="header">
    <h1>Appel API avec Next.js</h1>
    </div>

    {/* Conteneur pour centrer le bouton au milieu de la page */}
    <div className="button-container">
    <button onClick={fetchData} disabled={loading}>
        {loading ? "Chargement..." : "Récupérer les données"}
    </button>
    </div>

    {/* Affichage des données récupérées */}
    {data && (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
        <h2>Données récupérées :</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    )}
</>
);
}
