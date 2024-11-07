import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     animation : {
        'slide-left': 'slide-left 1s ease-in-out forwards',
        'fade-in': 'fade-in 1s ease-in-out forwards',
        'bounce': 'bounce 1s infinite',
        'fade': 'fade 0.5s ease-in-out'
      },
      keyframes: {
        'slide-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      }
    }
  },
  plugins:[],
}
  
export default config;
