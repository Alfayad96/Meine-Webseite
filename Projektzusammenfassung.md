# Projektzusammenfassung

## Projektziel

Wir arbeiten an einer professionellen IT-Website für ein Unternehmen. Der Fokus liegt darauf, eine wirklich hochwertige, moderne und sichere Webseite zu erstellen, die potenzielle Kunden beeindruckt und davon überzeugt, dass hinter dieser Seite echte IT-Profis stehen. Achte darauf, dass die Seite sowohl technisch als auch optisch sehr ansprechend und funktional ist.
    
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

6. **Frontend-Entwicklung:**
   - HTML-Datei (`index.html`) erstellt und das Formular zum Hinzufügen von Mitarbeitern sowie das Karussell zur Anzeige der Mitarbeiterprofile implementiert.
   - JavaScript-Code hinzugefügt, um Mitarbeiterprofile von der API abzurufen und anzuzeigen.
   - Möglichkeit zum Hochladen von Fotos implementiert.
   - `App.js`, `index.js`, und `index.css` erstellt und konfiguriert.
   - TailwindCSS und PostCSS konfiguriert.

7. **Backend-Entwicklung:**
   - `employeeController.js` erstellt und die Logik zum Hochladen von Fotos sowie zum Erstellen und Abrufen von Mitarbeiterprofilen implementiert.
   - `employeeRoutes.js` erstellt und die Routen für das Erstellen und Abrufen von Mitarbeiterprofilen definiert.
   - CORS in `app.js` konfiguriert, um Cross-Origin-Anfragen zuzulassen.

8. **Fehlerbehebung:**
   - CORS-Fehler behoben, der das Abrufen von Mitarbeiterprofilen verhinderte.
   - Portkonflikte behoben, indem laufende Prozesse beendet wurden.
   - Kodierungsprobleme in `server.js` behoben.
   - Fehler `ERR_OSSL_EVP_UNSUPPORTED` durch Setzen der Umgebungsvariable `NODE_OPTIONS` behoben.

## Verwendete Technologien und Tools

- **Programmiersprachen:**
  - JavaScript

- **Frameworks und Bibliotheken:**
  - **Express.js**: Web-Framework für Node.js zur Erstellung von Servern und APIs.
  - **Mongoose**: ODM-Bibliothek zur Verbindung mit MongoDB.
  - **jsonwebtoken**: Bibliothek zur Erstellung und Überprüfung von JWT-Tokens.
  - **dotenv**: Bibliothek zur Verwaltung von Umgebungsvariablen.
  - **React**: JavaScript-Bibliothek zur Erstellung von Benutzeroberflächen.
  - **TailwindCSS**: Utility-First CSS-Framework.
  - **Framer Motion**: Bibliothek für Animationen in React.

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
````

## Noch zu erledigen

Weitere Frontend-Entwicklung:

- Verbesserung des Designs und der Benutzerfreundlichkeit der Benutzeroberfläche.
- Implementierung von Validierungen für das Formular.

Weitere Funktionen:

- Passwort-Reset-Funktionalität.
- Benutzerrollen und Berechtigungen.
- Weitere geschützte Routen und Funktionen.

Tests:

- Schreiben von Unit-Tests und Integrationstests.
- Technologien: Jest, Mocha, Chai.

Deployment:

- Bereitstellung der Anwendung auf einem Server oder Cloud-Dienst.
- Technologien: Heroku, AWS, Azure.

## Fortschritt in Prozent

- Backend-Entwicklung (API, Authentifizierung, geschützte Routen): 70%
- Frontend-Entwicklung: 50%
- Tests: 0%
- Deployment: 0%

## Nächster Schritt

Morgen werden wir mit dem Downgrade von Node.js beginnen:

- Lade die gewünschte Version von Node.js herunter:
  - Gehe zur Node.js Download-Seite.
  - Suche nach der Version 16.x.x und lade den Windows Installer (MSI) herunter.
website/
├── .vercel/                     # Vercel-Konfigurationsdateien
│   ├── project.json
│   └── README.txt
├── assets/                      # Statische Dateien (CSS, Bilder, JS)
│   ├── css/
│   │   └── styles.css
│   ├── images/
│   │   └── employee1.jpg
│   └── js/
│       └── script.js
├── backend/                     # Backend-Logik (Node.js/Express)
│   ├── .env                     # Umgebungsvariablen
│   ├── app.js                   # Haupt-App-Setup
│   ├── package.json             # Backend-Abhängigkeiten
│   ├── package-lock.json
│   ├── server.js                # Haupt-Server-Datei
│   ├── packageRoutes.js         # API-Routen
│   ├── controllers/             # Controller-Logik
│   │   ├── adminController.js
│   │   ├── authController.js
│   │   ├── bookingController.js
│   │   ├── employeeController.js
│   │   ├── packageController.js
│   │   └── userController.js
│   ├── middleware/              # Middleware-Funktionen
│   │   └── authMiddleware.js
│   ├── models/                  # Datenbankmodelle
│   │   ├── Admin.js
│   │   ├── Booking.js
│   │   ├── Employee.js
│   │   ├── Package.js
│   │   └── User.js
│   └── node_modules/            # Node.js-Abhängigkeiten
├── frontend/                    # Frontend-Logik (React)
│   ├── public/                  # Statische Dateien für das Frontend
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/                     # React-Quellcode
│   │   ├── components/          # React-Komponenten
│   │   │   └── Services.js
│   │   ├── App.js               # Haupt-App-Komponente
│   │   ├── index.js             # Einstiegspunkt für React
│   │   └── styles/              # Frontend-spezifische CSS-Dateien
│   │       └── app.css
│   ├── package.json             # Frontend-Abhängigkeiten
│   └── package-lock.json
├── .babelrc                     # Babel-Konfiguration
├── .gitignore                   # Git-Ausschlussdateien
├── index.html                   # Haupt-HTML-Datei (falls benötigt)
├── IP-Adresse-Mogodb.txt        # Notizen zur MongoDB-IP-Adresse
├── package.json                 # Projektweite Abhängigkeiten
├── package-lock.json
├── postcss.config.js            # PostCSS-Konfiguration
├── projektstruktur.txt          # Projektstruktur-Dokumentation
├── Projektzusammenfassung.md    # Projektzusammenfassung
├── server.js                    # (Optional) Einstiegspunkt für Backend
├── tailwind.config.js           # Tailwind CSS-Konfiguration
└── webpack.config.js            # Webpack-Konfiguration