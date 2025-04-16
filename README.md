Meine-Webseite (in Arbeit)
Dies ist ein Übungsprojekt im Bereich Webentwicklung, das entwickelt wurde, um praktische Erfahrungen in der Erstellung moderner, sicherer und funktionaler Webseiten zu sammeln. Das Projekt richtet sich an Einsteiger und wurde ohne Vorkenntnisse gestartet, mit dem Ziel, durch „Learning by Doing“ Schritt für Schritt die Grundlagen und weiterführende Konzepte der Webentwicklung zu erlernen.

Inhaltsverzeichnis
Projektziel

Bisherige Schritte

Verwendete Technologien und Tools

Installation und Konfiguration

API-Endpunkte und Beispiele

Noch zu erledigen

Zugangsdaten und Sicherheitsaspekte

Nächster Schritt

Projektziel
Das Ziel dieses Projekts ist es, Webentwicklung von Grund auf zu erlernen – von der Backend-Logik über die API-Entwicklung bis hin zum modernen Frontend. Gleichzeitig soll eine beispielhafte IT-Webseite entstehen, die potenziell als Vorlage oder Referenz für spätere echte Projekte dienen kann. Sie soll technisch, optisch und funktional möglichst professionell wirken und das Gelernte praktisch umsetzen.

Bisherige Schritte
Projektstruktur und grundlegende Dateien
Einrichtung von server.js, .env, app.js und weiteren Konfigurationsdateien.

Erstellung der Controller (z. B. authController.js, userController.js) und Routen (authRoutes.js, userRoutes.js).

Implementierung von Middleware (z. B. authMiddleware.js) zur Absicherung der API.

Benutzerregistrierung und -anmeldung
Implementierung der Endpunkte:
POST /api/auth/register zur Registrierung eines neuen Benutzers.
POST /api/auth/login zur Anmeldung eines Benutzers und Erhalt eines JWT-Tokens.

Implementierung geschützter Routen
Middleware zur Überprüfung von JWT-Tokens.

Beispiel: GET /api/user/profile als geschützter Endpunkt zur Abfrage des Benutzerprofils.

Fehlerbehebung
Lösung von Portkonflikten durch das Beenden blockierender Prozesse.

Anpassung von Firewall-Einstellungen.

Behebung von SSL-bezogenen Fehlern (z. B. ERR_OSSL_EVP_UNSUPPORTED) durch entsprechende Umgebungsvariablen.

Versionsverwaltung und GitHub-Integration
Initialisierung eines Git-Repositories.

Committen der Dateien und Push zum GitHub-Repository.

Frontend-Entwicklung
Erstellung einer index.html mit Formular zur Mitarbeitererfassung und Karussell zur Anzeige der Profile.

Integration von JavaScript für dynamische Anzeige über die API.

Implementierung eines Foto-Uploads.

Konfiguration von TailwindCSS und PostCSS für ein modernes Design.

Backend-Entwicklung
Erstellung eines employeeController.js zur Verwaltung von Mitarbeiterdaten und Fotos.

Definition entsprechender Routen in employeeRoutes.js.

CORS-Konfiguration für Cross-Origin-Anfragen.

Weitere Fehlerbehebungen
CORS-Probleme und Portkonflikte gelöst.

Kodierungsprobleme in server.js behoben.

Verwendete Technologien und Tools
Programmiersprache:

JavaScript

Frameworks und Bibliotheken:

Express.js – Web-Framework für APIs

Mongoose – ODM für MongoDB

jsonwebtoken – JWT-Verwaltung

dotenv – Umgebungsvariablen

React – Frontend-Framework

TailwindCSS – CSS-Framework

Framer Motion – Animationen

Datenbank:

MongoDB (lokal & über MongoDB Atlas)

Entwicklungswerkzeuge:

Node.js – Laufzeitumgebung

Nodemon – automatischer Serverneustart

Git & GitHub – Versionskontrolle

Weitere Tools:

Postman – HTTP-Anfragen testen

MongoDB Compass – GUI für MongoDB

