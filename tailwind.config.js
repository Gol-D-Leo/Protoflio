module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx,html}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: "#0077B6",
            foreground: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#F0F1F3",
            foreground: "#03045E",
          },
          accent: {
            DEFAULT: "#00B4D8",
            foreground: "#03045E",
          },
          background: "#CAF0F8",
          foreground: "#03045E",
          card: {
            DEFAULT: "#FFFFFF",
            foreground: "#03045E",
          },
          popover: {
            DEFAULT: "#FFFFFF",
            foreground: "#03045E",
          },
          muted: {
            DEFAULT: "#F0F1F3",
            foreground: "#00B4D8",
          },
          destructive: {
            DEFAULT: "#FF4C4C",
            foreground: "#FFFFFF",
          },
          border: "#E0E0E0",
          input: "#E0E0E0",
          ring: "#0077B6",
          chart: {
            1: "#FF6F61",
            2: "#4CAF50",
            3: "#03A9F4",
            4: "#FFC107",
            5: "#8E44AD",
          },
          dark: {
            primary: "#0077B6",
            "primary-foreground": "#FFFFFF",
            secondary: "#1E2A4B",
            "secondary-foreground": "#CAF0F8",
            accent: "#00B4D8",
            "accent-foreground": "#CAF0F8",
            background: "#03045E",
            foreground: "#CAF0F8",
            card: "#121212",
            "card-foreground": "#CAF0F8",
            popover: "#121212",
            "popover-foreground": "#CAF0F8",
            muted: "#1E2A4B",
            "muted-foreground": "#00B4D8",
            destructive: "#FF4C4C",
            "destructive-foreground": "#FFFFFF",
            border: "#3C3C3C",
            input: "#3C3C3C",
            ring: "#0077B6",
          },
        },
        borderRadius: {
          sm: "0.125rem",
        },
        boxShadow: {
          sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        },
        fontFamily: {
          inter: ["Inter", "sans-serif"],
        },
        fontSize: {
          heading: "28px",
          body: "16px",
        },
        fontWeight: {
          heading: "600",
          body: "400",
        },
      },
    },
    plugins: [],
    darkMode: "class",
  }