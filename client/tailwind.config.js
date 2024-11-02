/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite-react/tailwind';

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js, jsx, ts, tsx}' 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), 
  ],
}
