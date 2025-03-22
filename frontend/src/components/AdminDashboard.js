import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [packages, setPackages] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    const fetchPackages = async () => {
      const res = await axios.get('/api/packages');
      setPackages(res.data);
    };
    fetchPackages();
  }, []);

  const handleCreatePackage = async (e) => {
    e.preventDefault();
    const newPackage = { name, description, price };
    const res = await axios.post('/api/packages', newPackage);
    setPackages([...packages, res.data]);
  };

  const handleDeletePackage = async (id) => {
    await axios.delete(`/api/packages/${id}`);
    setPackages(packages.filter((pkg) => pkg._id !== id));
  };

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <form onSubmit={handleCreatePackage}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Beschreibung"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Preis"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Paket erstellen</button>
      </form>
      <ul>
        {packages.map((pkg) => (
          <li key={pkg._id}>
            {pkg.name} - {pkg.description} - {pkg.price}€
            <button onClick={() => handleDeletePackage(pkg._id)}>Löschen</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;