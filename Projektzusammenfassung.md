# Projektzusammenfassung

## Bisherige Schritte

1. **Projektstruktur erstellt und grundlegende Dateien eingerichtet:**
   - `server.js`: Hauptdatei zum Starten des Servers.
   - `.env`: Datei zur Speicherung von Umgebungsvariablen.
   - `app.js`: Datei zur Konfiguration der Express-Anwendung.
   - `controllers/authController.js`: Controller für die Benutzerregistrierung und Anmeldung.
   - `controllers/userController.js`: Controller für Benutzerprofile.
   - `routes/authRoutes.js`: Routen für die Authentifizierung.
   - `routes/userRoutes.js`: Routen für Benutzerprofile.
   - `middleware/authMiddleware.js`: Middleware zur Authentifizierung.

2. **Benutzerregistrierung und Anmeldung implementiert:**
   - **POST `/api/auth/register`**: Endpunkt zur Registrierung eines neuen Benutzers.
   - **POST `/api/auth/login`**: Endpunkt zur Anmeldung eines Benutzers und zum Erhalt eines JWT-Tokens.

3. **JWT-Authentifizierung und geschützte Routen implementiert:**
   - **Middleware `authMiddleware.js`**: Middleware zur Überprüfung des JWT-Tokens.
   - **GET `/api/user/profile`**: Geschützter Endpunkt zur Abfrage des Benutzerprofils.

4. **Fehlerbehebung bei Portkonflikten und Firewall-Einstellungen:**
   - Überprüfen und Beenden von Prozessen, die Ports verwenden.
   - Anpassen der Firewall-Einstellungen.

5. **Projekt auf GitHub gespeichert:**
   - Initialisierung eines Git-Repositories.
   - Hinzufügen und Committen von Dateien.
   - Verbinden des lokalen Repositories mit GitHub.
   - Pushen der Änderungen zu GitHub.

## Verwendete Technologien und Tools

- **Programmiersprachen:**
  - JavaScript

- **Frameworks und Bibliotheken:**
  - **Express.js**: Web-Framework für Node.js zur Erstellung von Servern und APIs.
  - **Mongoose**: ODM-Bibliothek zur Verbindung mit MongoDB.
  - **jsonwebtoken**: Bibliothek zur Erstellung und Überprüfung von JWT-Tokens.
  - **dotenv**: Bibliothek zur Verwaltung von Umgebungsvariablen.

- **Datenbank:**
  - **MongoDB**: NoSQL-Datenbank zur Speicherung von Benutzerdaten.

- **Entwicklungswerkzeuge:**
  - **Node.js**: JavaScript-Laufzeitumgebung zur Ausführung von Servercode.
  - **Nodemon**: Werkzeug zur automatischen Neustart des Servers bei Codeänderungen.
  - **Git**: Versionskontrollsystem zur Verwaltung von Codeänderungen.
  - **GitHub**: Plattform zur Speicherung und Verwaltung von Git-Repositories.

- **Apps und Webseiten:**
  - **Postman**: Tool zur Erstellung und Ausführung von HTTP-Anfragen.
  - **MongoDB Atlas**: Cloud-Dienst zur Verwaltung von MongoDB-Datenbanken.
  - **MongoDB Compass**: GUI-Tool zur Verwaltung von MongoDB-Datenbanken.

## Bisherige Fortschritte

- **Benutzerregistrierung und Anmeldung**: 100%
- **JWT-Authentifizierung und geschützte Routen**: 100%
- **Projekt auf GitHub gespeichert**: 100%

## Fortschritte vom heutigen Tag

1. **Frontend-Entwicklung:**
   - HTML-Datei (`index.html`) erstellt und das Formular zum Hinzufügen von Mitarbeitern sowie das Karussell zur Anzeige der Mitarbeiterprofile implementiert.
   - JavaScript-Code hinzugefügt, um Mitarbeiterprofile von der API abzurufen und anzuzeigen.
   - Möglichkeit zum Hochladen von Fotos implementiert.

2. **Backend-Entwicklung:**
   - `employeeController.js` erstellt und die Logik zum Hochladen von Fotos sowie zum Erstellen und Abrufen von Mitarbeiterprofilen implementiert.
   - `employeeRoutes.js` erstellt und die Routen für das Erstellen und Abrufen von Mitarbeiterprofilen definiert.
   - CORS in `app.js` konfiguriert, um Cross-Origin-Anfragen zuzulassen.

3. **Fehlerbehebung:**
   - CORS-Fehler behoben, der das Abrufen von Mitarbeiterprofilen verhinderte.
   - Portkonflikte behoben, indem laufende Prozesse beendet wurden.

## Noch zu erledigen

1. **Weitere Frontend-Entwicklung:**
   - Verbesserung des Designs und der Benutzerfreundlichkeit der Benutzeroberfläche.
   - Implementierung von Validierungen für das Formular.

2. **Weitere Funktionen:**
   - Passwort-Reset-Funktionalität.
   - Benutzerrollen und Berechtigungen.
   - Weitere geschützte Routen und Funktionen.

3. **Tests:**
   - Schreiben von Unit-Tests und Integrationstests.
   - Technologien: Jest, Mocha, Chai.

4. **Deployment:**
   - Bereitstellung der Anwendung auf einem Server oder Cloud-Dienst.
   - Technologien: Heroku, AWS, Azure.

## Fortschritt in Prozent

- **Backend-Entwicklung (API, Authentifizierung, geschützte Routen):** 70%
- **Frontend-Entwicklung:** 50%
- **Tests:** 0%
- **Deployment:** 0%

## Zusammenfassung der verwendeten Technologien und Tools

- **Programmiersprachen:**
  - JavaScript

- **Frameworks und Bibliotheken:**
  - **Express.js**: Web-Framework für Node.js zur Erstellung von Servern und APIs.
  - **Mongoose**: ODM-Bibliothek zur Verbindung mit MongoDB.
  - **jsonwebtoken**: Bibliothek zur Erstellung und Überprüfung von JWT-Tokens.
  - **dotenv**: Bibliothek zur Verwaltung von Umgebungsvariablen.

- **Datenbank:**
  - **MongoDB**: NoSQL-Datenbank zur Speicherung von Benutzerdaten.

- **Entwicklungswerkzeuge:**
  - **Node.js**: JavaScript-Laufzeitumgebung zur Ausführung von Servercode.
  - **Nodemon**: Werkzeug zur automatischen Neustart des Servers bei Codeänderungen.
  - **Git**: Versionskontrollsystem zur Verwaltung von Codeänderungen.
  - **GitHub**: Plattform zur Speicherung und Verwaltung von Git-Repositories.

- **Apps und Webseiten:**
  - **Postman**: Tool zur Erstellung und Ausführung von HTTP-Anfragen.
  - **MongoDB Atlas**: Cloud-Dienst zur Verwaltung von MongoDB-Datenbanken.
  - **MongoDB Compass**: GUI-Tool zur Verwaltung von MongoDB-Datenbanken.

## Relevante Informationen

- **IP-Adresse für Postman:** `http://localhost:5002`
- **MongoDB Atlas Verbindungs-URI:** `mongodb+srv://mohammadalfayad96:Mnmn512.@cluster0.dk5av.mongodb.net/mydatabase?retryWrites=true&w=majority`
- **JWT Secret:** `website 1`
- **GitHub Repository:** `https://github.com/Alfayad96/Meine-Webseite`
- **Benutzername für MongoDB Atlas:** `mohammadalfayad96`
- **Passwort für MongoDB Atlas:** `Mnmn512.`
- **Port:** `5002`

### Beispiel für cURL-Befehle

- **Benutzerregistrierung:**
  ```bash
  curl -X POST http://localhost:5002/api/auth/register -H "Content-Type: application/json" -d "{\"username\": \"newuser\", \"password\": \"newpassword\", \"email\": \"newuser@example.com\"}"

  Hirarchie des Programms
website/ ├── controllers/ │ ├── authController.js │ ├── employeeController.js │ ├── userController.js ├── middleware/ │ └── authMiddleware.js ├── models/ │ ├── Employee.js │ └── User.js ├── routes/ │ ├── authRoutes.js │ ├── employeeRoutes.js │ ├── userRoutes.js ├── uploads/ ├── .env ├── app.js ├── index.html ├── Projektzusammenfassung.md ├── server.js ├── package.json

