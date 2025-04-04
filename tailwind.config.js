// tailwind.config.js
module.exports = {
    content: [
        './frontend/src/**/*.{js,jsx,ts,tsx}', // React-Komponenten
        './frontend/public/index.html',       // Statische HTML-Dateien
        './assets/css/**/*.css',              // Globale CSS-Dateien
    ],
    theme: {
        extend: {
            colors: {
                primary: '#1D4ED8', // Beispiel: Primärfarbe
                secondary: '#9333EA', // Beispiel: Sekundärfarbe
            },
        },
    },
    plugins: [],
};