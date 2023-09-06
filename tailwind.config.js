/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient': 'linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)',
      }),
    }
  },
  plugins: [require('flowbite/plugin')],
};
