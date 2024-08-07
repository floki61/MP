import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
      "primary": "#98887d",
      "secondary": "#7b3b28",
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Roman': ['grandesign-neue-roman', 'sans-serif'],
        'Yellowtail' :['Yellowtail', 'cursive'],
        // Anton : ['Anton', 'sans-serif'],
        custom: ['now'],
        against: ['against'],
        meledrama: ['melodrama'],
        anton: ["Anton", 'sans-serif'],
                                              
      },
    },
  },
  plugins: [],
};
export default config;
