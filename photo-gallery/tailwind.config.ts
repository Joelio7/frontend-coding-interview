import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0075EB",
          "blue-hover": "#1D4ED8",
        },
      },
      fontSize: {
        "heading-1": ["24px", { lineHeight: "32px", fontWeight: "700" }],
        "heading-2": ["20px", { lineHeight: "28px", fontWeight: "700" }],
        body: ["14px", { lineHeight: "20px", fontWeight: "400" }],
        "body-bold": ["14px", { lineHeight: "20px", fontWeight: "600" }],
        small: ["12px", { lineHeight: "16px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};

export default config;
