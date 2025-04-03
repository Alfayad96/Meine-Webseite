import React from 'react';

const Packages = () => {
  return (
    <section className="p-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-6">Unsere IT-Pakete</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Basis-Paket</h3>
          <p className="mt-2">Beschreibung des Basis-Pakets.</p>
          <p className="mt-2 font-bold">Preis: 100€</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Buchen</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Standard-Paket</h3>
          <p className="mt-2">Beschreibung des Standard-Pakets.</p>
          <p className="mt-2 font-bold">Preis: 200€</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Buchen</button>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-xl font-bold">Premium-Paket</h3>
          <p className="mt-2">Beschreibung des Premium-Pakets.</p>
          <p className="mt-2 font-bold">Preis: 300€</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Buchen</button>
        </div>
      </div>
    </section>
  );
};

export default Packages;