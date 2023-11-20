/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'comfortaa': ['Comfortaa', 'cursive'],
      'museo-moderno': ['MuseoModerno', 'cursive'],
      'public-sans': ['Public Sans', 'sans-serif'],
      'questrial': ['Questrial', 'sans-serif'],
      'rampart-one': ['Rampart One', 'cursive'],
      'reem-kufi-ink': ['Reem Kufi Ink', 'sans-serif'],
      'revalia': ['Revalia', 'cursive'],
      'ribeye-marrow': ['Ribeye Marrow', 'cursive'],
      'righteous': ['Righteous', 'cursive'],
      'rock-3d': ['Rock 3D', 'cursive'],
      'sacramento': ['Sacramento', 'cursive'],
      'Quattrocento':['Quattrocento Sans', 'sans-serif'],
    },
    backgroundImage: {
      'banner': "url('./assets/banner.png')",
      'footer-texture': "url('/img/footer-texture.png')"
      
    }
  },
  },
  plugins: [],
}