// craco.config.js
module.exports = {
  // EXISTING style configuration remains here
  style: { 
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
  // ADD THIS NEW LINE:
  webpack: {
    configure: (webpackConfig) => {
      // This tells CRA to copy public folder files like manifest.json
      webpackConfig.resolve.extensions.push('.js', '.jsx', '.ts', '.tsx');
      return webpackConfig;
    },
  },
};