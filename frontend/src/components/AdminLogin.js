// filepath: c:\Users\mn512\OneDrive\Desktop\website\frontend\src\components\AdminLogin.js
import React from 'react';

const AdminLogin = () => {
  return (
    <div>
      <h2>Admin Login</h2>
      <form>
        <input type="text" placeholder="Benutzername" />
        <input type="password" placeholder="Passwort" />
        <button type="submit">Einloggen</button>
      </form>
    </div>
  );
};

export default AdminLogin;