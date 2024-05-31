module.exports = {
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
    darkMode: false,
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "100px": "100px",
        "200px": "200px",
        "300px": "300px",
        "400px": "400px",
        "500px": "500px",
        "600px": "600px",
        "700px": "700px",
        "800px": "800px",
        "900px": "900px",
        "1000px": "1000px",
        "1100px": "1100px",
        "1200px": "1200px",
        "1300px": "1300px",
        "1400px": "1400px",
        "1500px": "1500px",
      },
      colors: {
        primary: "#004D99",
        bgPrimary: "#B3D9FF",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        heroBg: "url('/heroBg.webp')",
        ice: "url('/iceline.png')",

        climateBg: "url('/Climate.webp')",
        successSlope: "url('/successSlope.webp')",
      },
    },
  },
};
