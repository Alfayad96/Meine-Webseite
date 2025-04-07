import React from 'react';

const AdminDashboard = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Admin-Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Mitarbeiter verwalten</h3>
          <p className="mt-2">Fügen Sie neue Mitarbeiter hinzu oder bearbeiten Sie bestehende Profile.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Verwalten</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Pakete verwalten</h3>
          <p className="mt-2">Fügen Sie neue Pakete hinzu oder bearbeiten Sie bestehende Pakete.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Verwalten</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Unternehmensinformationen</h3>
          <p className="mt-2">Aktualisieren Sie die Unternehmensinformationen wie Adresse und Kontakt.</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Aktualisieren</button>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;