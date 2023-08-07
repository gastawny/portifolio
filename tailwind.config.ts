import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#45f3ff',
        secondary: '#573aff',
        fontColor: '#fbfbfb',
        bgColor: '#1a202b',
        primaryDark: '#37c2cc',
        primaryExtraDark: '#30aab3',
        secondaryDark: '#462ecc',
        secondaryExtraDark: '#110c33',
        bgColorDark: '#10131a',
        bgColorExtraDark: '#0a0d11',
      },
    },
  },
  plugins: [],
}
export default config