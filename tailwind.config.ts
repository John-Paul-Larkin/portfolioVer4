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
        "radial-bg":
          // "background: rgb(75,85,118);
          "radial-gradient(circle, #4f5c8c, #45589e, #3a54b0, #2e4fc1, #2448d1);",

        dots: "url('/dots.svg')",
        space: "url('/coduBg.jpeg')",

      },
      maxWidth: {
        "container-width": "100rem",
      },
      height: {
        // "box-height": "21.875rem",
        "box-height": "15.875rem",
      },
      colors: {
        "overall-bg": "hsl(227, 28%, 43%)",
        "box-bg": "hsl(111, 7%, 20%)",

        cream: "hsl(0, 0%, 85%)",
        // "bg-color": "hsl(227, 28%, 43%)",
        treeBG: "#f5efea",
        green:"#40c2a6",
        navy: {
          100: "hsl(227, 47%, 24%)",
          300: "hsl(227, 57%, 34%)",
          600: "hsl(227, 57%, 40%)",
        },
      },

      gridTemplateRows: {
        threeBox: "auto 1fr 1fr",
        destinationDesktop: "auto 1fr auto",
        crewMobile: "auto 1fr auto",
        crewDesktop: "auto 1fr",
        crewDetails: "auto auto 1fr auto",
        technologyMobile: "auto auto auto auto",
        technologyDesktop: "auto 1fr",
      },

      gridTemplateColumns: {
        fourBox: "1fr 1fr",
        crewDesktop: "1fr 1fr",
        technologyDesktop: "auto 1fr 1fr",
      },
    },
  },
  plugins: [],
};
export default config;
