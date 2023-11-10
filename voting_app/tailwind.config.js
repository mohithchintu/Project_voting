/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', './src/**/*.js'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2E3A59', // A formal navy blue
          light: '#3B4B6E',
          dark: '#212B4A',
        },
        secondary: {
          DEFAULT: '#A3AAB5', // A muted silver/gray
          light: '#B4BCC6',
          dark: '#9299A2',
        },
      },
      fontSize: {
        'heading': '2rem',   // Larger font-size for headings
        'subheading': '1.5rem' // Slightly smaller for subheadings
      },
      spacing: {
        '18': '4.5rem'   // Adding a custom spacing for potential use in padding/margin
      },
      borderRadius: {
        'xl': '1rem'    // A slightly more pronounced border-radius
      }
    },
  },
  plugins: [],
}
