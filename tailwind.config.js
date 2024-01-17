/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      dropShadow: {
        '3xl': '8px 8px rgba(0, 0, 0, 1)',
        '4xl': [
            '15px 15px rgba(0, 0, 0, 1)',
        ]
      },
      transitionProperty: {
        'shadow': 'filter',
      },
    },
  },
  plugins: [],
}
