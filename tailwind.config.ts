import type { Config } from "tailwindcss";

const config: Config = {
  purge: {
    enabled: true,
    content: [
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: {
      preloaderSpacing: "0.35em",
      contactFormSpacing: "0.175em",
      notFoundSpacing: "0.1em",
    },
  },
  plugins: [],
};
export default config;
