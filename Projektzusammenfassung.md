# Meine-Webseite

Dies ist ein professionelles IT-Website-Projekt, das entwickelt wurde, um eine hochwertige, moderne und sichere Webpräsenz zu bieten. Ziel ist es, potenziellen Kunden ein beeindruckendes, funktionales und optisch ansprechendes Erlebnis zu präsentieren – unterstützt durch das Fachwissen eines echten IT-Profis-Teams.

## Inhaltsverzeichnis

- [Projektziel](#projektziel)
- [Bisherige Schritte](#bisherige-schritte)
- [Verwendete Technologien und Tools](#verwendete-technologien-und-tools)
- [Installation und Konfiguration](#installation-und-konfiguration)
- [API-Endpunkte und Beispiele](#api-endpunkte-und-beispiele)
- [Noch zu erledigen](#noch-zu-erledigen)
- [Zugangsdaten und Sicherheitsaspekte](#zugangsdaten-und-sicherheitsaspekte)
- [Nächster Schritt](#nächster-schritt)

## Projektziel

Das Ziel dieses Projekts ist es, eine professionelle IT-Website zu entwickeln, die potenzielle Kunden überzeugt und die Expertise des Entwicklerteams unterstreicht. Die Webseite soll technisch, optisch und funktional auf höchstem Niveau sein.

## Bisherige Schritte

1. **Projektstruktur und grundlegende Dateien**
   - Einrichtung von `server.js`, `.env`, `app.js` und weiteren Konfigurationsdateien.
   - Erstellung der Controller (z. B. `authController.js`, `userController.js`) und Routen (z. B. `authRoutes.js`, `userRoutes.js`).
   - Implementierung von Middleware (z. B. `authMiddleware.js`) zur Absicherung der API.

2. **Benutzerregistrierung und -anmeldung**
   - Implementierung der Endpunkte:
     - `POST /api/auth/register` zur Registrierung eines neuen Benutzers.
     - `POST /api/auth/login` zur Anmeldung eines Benutzers und Erhalt eines JWT-Tokens.

3. **Implementierung geschützter Routen**
   - Entwicklung von Middleware zur Überprüfung von JWT-Tokens.
   - Beispiel: `GET /api/user/profile` als geschützter Endpunkt zur Abfrage des Benutzerprofils.

4. **Fehlerbehebung**
   - Lösung von Portkonflikten durch das Beenden von Prozessen, die Ports blockieren.
   - Anpassung von Firewall-Einstellungen.
   - Behebung von SSL-bezogenen Fehlern (ERR_OSSL_EVP_UNSUPPORTED) durch Setzen entsprechender Umgebungsvariablen.

5. **Versionsverwaltung und GitHub-Integration**
   - Initialisierung eines Git-Repositories.
   - Committen der Dateien und Verbinden mit GitHub.
   - Pushen der Änderungen zum GitHub-Repository.

6. **Frontend-Entwicklung**
   - Erstellung einer HTML-Datei (`index.html`) mit einem Formular zur Mitarbeitererfassung sowie einem Karussell zur Anzeige von Mitarbeiterprofilen.
   - Integration von JavaScript zur dynamischen Anzeige von Mitarbeiterprofilen über die API.
   - Implementierung des Foto-Uploads.
   - Konfiguration von TailwindCSS und PostCSS für ein modernes Design.

7. **Backend-Entwicklung**
   - Erstellung eines `employeeController.js` zur Verwaltung von Mitarbeiterprofilen und Foto-Uploads.
   - Definition entsprechender Routen in `employeeRoutes.js` und Konfiguration von CORS für Cross-Origin-Anfragen.

8. **Weitere Fehlerbehebungen**
   - Lösung von CORS-Fehlern und Portkonflikten.
   - Behebung von Kodierungsproblemen in `server.js`.

## Verwendete Technologien und Tools

- **Programmiersprache:**
  - JavaScript

- **Frameworks und Bibliotheken:**
  - Express.js – Web-Framework für die Erstellung von Servern und APIs.
  - Mongoose – ODM zur Verbindung mit MongoDB.
  - jsonwebtoken – Erstellung und Überprüfung von JWT-Tokens.
  - dotenv – Verwaltung von Umgebungsvariablen.
  - React – Erstellung von Benutzeroberflächen.
  - TailwindCSS – Utility-First CSS-Framework.
  - Framer Motion – Animationen in React.

- **Datenbank:**
  - MongoDB – NoSQL-Datenbank für die Speicherung von Benutzerdaten.

- **Entwicklungswerkzeuge:**
  - Node.js – JavaScript-Laufzeitumgebung.
  - Nodemon – Automatischer Neustart des Servers bei Codeänderungen.
  - Git und GitHub – Versionskontrollsystem und Repository-Management.

- **Weitere Tools:**
  - Postman – Tool zur Erstellung und Ausführung von HTTP-Anfragen.
  - MongoDB Atlas und MongoDB Compass – Verwaltung und GUI-Tools für MongoDB.

## Installation und Konfiguration

1. **Repository klonen:**

   ```bash
   git clone https://github.com/Alfayad96/Meine-Webseite.git
   cd Meine-Webseite


