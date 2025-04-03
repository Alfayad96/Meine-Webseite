// postcss.config.js
module.exports = {
    plugins: [
      require('@tailwindcss/postcss'),
      require('autoprefixer'), // Ensure to include this if you want autoprefixing
    ],
  };