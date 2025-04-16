# Meine-Webseite (in Arbeit) 🚧

Dies ist ein **Übungsprojekt zur Webentwicklung**, das gestartet wurde **ohne Vorkenntnisse**. Ziel ist es, die Grundlagen und fortgeschrittenen Konzepte der modernen Webentwicklung zu erlernen – sowohl im Backend als auch im Frontend – und dabei eine professionelle und funktionale IT-Webseite zu erstellen.

---

## 📌 Projektziel

Das Ziel dieses Projekts ist es, durch praktische Anwendung das Entwickeln moderner Webanwendungen zu lernen. Die Webseite soll:

- als Lernplattform dienen,
- moderne Web-Technologien beinhalten,
- sicher und funktionsfähig sein,
- und potenziellen Kunden oder Arbeitgebern als Referenzprojekt dienen.

---

## ✅ Bisherige Schritte

### 🔧 Projektstruktur & Konfiguration
- Erstellung von `server.js`, `app.js`, `.env` und weiteren Konfigurationsdateien
- Einrichtung von Routen und Controllern: `authRoutes.js`, `userRoutes.js`, `authController.js`, `userController.js`
- Implementierung von Middleware (`authMiddleware.js`) zum Schutz von Routen

### 🔐 Authentifizierung
- `POST /api/auth/register` – Registrierung neuer Benutzer
- `POST /api/auth/login` – Login & JWT-Erzeugung
- `GET /api/user/profile` – geschützter Endpunkt mit JWT-Prüfung

### 🛠 Fehlerbehebung
- Portkonflikte durch blockierende Prozesse
- SSL-Fehler (ERR_OSSL_EVP_UNSUPPORTED) durch Node-Umgebungsvariablen gelöst
- Firewall-Konfiguration angepasst

### 🗃 Versionskontrolle
- Initialisierung eines Git-Repositories
- GitHub-Repository verknüpft & regelmäßige Commits

### 🎨 Frontend
- HTML-Formular zur Mitarbeitererfassung (`index.html`)
- Karussell zur Anzeige von Mitarbeiterprofilen
- JavaScript zur Anbindung an die API
- Integration von Foto-Upload
- TailwindCSS & PostCSS für modernes Design
- Framer Motion für Animationen (React)

### 🔙 Backend
- `employeeController.js` zur Verwaltung von Mitarbeiterdaten
- `employeeRoutes.js` mit passenden Endpunkten
- CORS-Konfiguration für Cross-Origin-Requests

---

## 🧰 Verwendete Technologien und Tools

### 🌐 Programmiersprache
- JavaScript

### ⚙️ Frameworks & Libraries
- **Express.js** – Webserver & Routing
- **Mongoose** – ODM für MongoDB
- **jsonwebtoken** – Authentifizierung via JWT
- **dotenv** – Umgebungsvariablen
- **React** – Frontend-Entwicklung
- **TailwindCSS** – Styling
- **Framer Motion** – Animationen

### 🗄️ Datenbank
- MongoDB (lokal & über MongoDB Atlas)

### 🔧 Entwicklungsumgebung
- Node.js
- Nodemon (automatischer Serverneustart)
- Git & GitHub

### 🧪 Testing & Tools
- Postman (zum Testen von API-Endpunkten)
- MongoDB Compass (grafische Oberfläche für MongoDB)

---

## 📋 Noch zu erledigen (To-Do)

- [ ] Validierung der Formulardaten (Frontend & Backend)
- [ ] Authentifizierte Admin-Oberfläche zur Mitarbeiterverwaltung
- [ ] Deployment (z. B. mit Vercel oder Render)
- [ ] Mobile Optimierung (Responsive Design)
- [ ] Erweiterung des Frontends mit React-Komponenten

---

## 🔐 Zugang & Sicherheit

> Hinweis: Zugangsdaten, Tokens und sensible Informationen sind in `.env`-Dateien ausgelagert und **nicht im Repository enthalten**.  
> Sicherheitsaspekte wie JWT-Verifizierung und CORS-Konfiguration wurden berücksichtigt.

---

## 🚀 Nächster Schritt

Die nächsten Schritte umfassen die Verbesserung des Frontends mit React, die vollständige Umsetzung der Admin-Ansicht, sowie die Vorbereitung auf ein mögliches Deployment.

---

**Hinweis:** Dieses Projekt dient ausschließlich **Lernzwecken** und ist nicht für die produktive Nutzung gedacht.  
Es wurde von Grund auf selbst erarbeitet – ganz ohne Vorkenntnisse.

---

