# Meine-Webseite (in Arbeit)

Dies ist ein **Übungsprojekt im Bereich Webentwicklung**, das entwickelt wurde, um eine hochwertige, moderne und sichere Webpräsenz zu erstellen.  
Das Ziel ist es, potenziellen Kunden ein beeindruckendes, funktionales und optisch ansprechendes Erlebnis zu präsentieren – und gleichzeitig Webentwicklung von Grund auf zu erlernen.  
**Das Projekt wurde ohne Vorkenntnisse gestartet und dient primär dem Lernzweck.**

---

## Inhaltsverzeichnis

- Projektziel  
- Bisherige Schritte  
- Verwendete Technologien und Tools  
- Installation und Konfiguration  
- API-Endpunkte und Beispiele  
- Noch zu erledigen  
- Zugangsdaten und Sicherheitsaspekte  
- Nächster Schritt  

---

## Projektziel

Das Ziel dieses Projekts ist es, eine professionelle IT-Website zu entwickeln, die potenzielle Kunden überzeugt und die Expertise des Entwicklerteams unterstreicht.  
Die Webseite soll technisch, optisch und funktional auf höchstem Niveau sein – **und gleichzeitig dazu dienen, Webentwicklung praktisch zu erlernen**.

---
## 🔐 Zugang & Sicherheit

> **Hinweis:** Zugangsdaten, Tokens und sensible Informationen sind in `.env`-Dateien ausgelagert und **nicht im Repository enthalten**.  
> Sicherheitsaspekte wie **JWT-Verifizierung** und **CORS-Konfiguration** wurden berücksichtigt.
---
## Bisherige Schritte

### Projektstruktur und grundlegende Dateien
- Einrichtung von `server.js`, `.env`, `app.js` und weiteren Konfigurationsdateien.
- Erstellung der Controller (z. B. `authController.js`, `userController.js`) und Routen (z. B. `authRoutes.js`, `userRoutes.js`).
- Implementierung von Middleware (z. B. `authMiddleware.js`) zur Absicherung der API.

### Benutzerregistrierung und -anmeldung
- Implementierung der Endpunkte:
  - `POST /api/auth/register` zur Registrierung eines neuen Benutzers.
  - `POST /api/auth/login` zur Anmeldung eines Benutzers und Erhalt eines JWT-Tokens.

### Implementierung geschützter Routen
- Entwicklung von Middleware zur Überprüfung von JWT-Tokens.
- Beispiel: `GET /api/user/profile` als geschützter Endpunkt zur Abfrage des Benutzerprofils.

### Fehlerbehebung
- Lösung von Portkonflikten durch das Beenden von Prozessen, die Ports blockieren.
- Anpassung von Firewall-Einstellungen.
- Behebung von SSL-bezogenen Fehlern (`ERR_OSSL_EVP_UNSUPPORTED`) durch Setzen entsprechender Umgebungsvariablen.

### Versionsverwaltung und GitHub-Integration
- Initialisierung eines Git-Repositories.
- Committen der Dateien und Verbinden mit GitHub.
- Pushen der Änderungen zum GitHub-Repository.

### Frontend-Entwicklung
- Erstellung einer HTML-Datei (`index.html`) mit einem Formular zur Mitarbeitererfassung sowie einem Karussell zur Anzeige von Mitarbeiterprofilen.
- Integration von JavaScript zur dynamischen Anzeige von Mitarbeiterprofilen über die API.
- Implementierung des Foto-Uploads.
- Konfiguration von TailwindCSS und PostCSS für ein modernes Design.

### Backend-Entwicklung
- Erstellung eines `employeeController.js` zur Verwaltung von Mitarbeiterprofilen und Foto-Uploads.
- Definition entsprechender Routen in `employeeRoutes.js` und Konfiguration von CORS für Cross-Origin-Anfragen.

### Weitere Fehlerbehebungen
- Lösung von CORS-Fehlern und Portkonflikten.
- Behebung von Kodierungsproblemen in `server.js`.

---

## Verwendete Technologien und Tools

### Programmiersprache:
- JavaScript

### Frameworks und Bibliotheken:
- Express.js – Web-Framework für die Erstellung von Servern und APIs.
- Mongoose – ODM zur Verbindung mit MongoDB.
- jsonwebtoken – Erstellung und Überprüfung von JWT-Tokens.
- dotenv – Verwaltung von Umgebungsvariablen.
- React – Erstellung von Benutzeroberflächen.
- TailwindCSS – Utility-First CSS-Framework.
- Framer Motion – Animationen in React.

### Datenbank:
- MongoDB – NoSQL-Datenbank für die Speicherung von Benutzerdaten.

### Entwicklungswerkzeuge:
- Node.js – JavaScript-Laufzeitumgebung.
- Nodemon – Automatischer Neustart des Servers bei Codeänderungen.
- Git und GitHub – Versionskontrollsystem und Repository-Management.

### Weitere Tools:
- Postman – Tool zur Erstellung und Ausführung von HTTP-Anfragen.
- MongoDB Atlas und MongoDB Compass – Verwaltung und GUI-Tools für MongoDB.

---

> **Hinweis:** Dieses Projekt ist Teil eines Selbstlernprozesses und richtet sich an Einsteiger in die Webentwicklung.
