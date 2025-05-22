import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Core brand colors
        "telkom-blue": {
          DEFAULT: "#4495d4", // Main Telkom blue
          50: "#eef6fc",
          100: "#d9ebf9",
          200: "#b4d7f3",
          300: "#8fc3ed",
          400: "#4495d4", // Primary brand color
          500: "#3a7db4",
          600: "#2f6694",
          700: "#254f74",
          800: "#1a3754",
          900: "#0f2034",
        },
        "telkom-dark-blue": {
          DEFAULT: "#1e3c64", // Dark blue used in headers and footers
          50: "#e9edf3",
          100: "#d2dbe7",
          200: "#a5b7cf",
          300: "#7893b7",
          400: "#4b6f9f",
          500: "#3c5a8a",
          600: "#1e3c64", // Primary dark blue
          700: "#172f4d",
          800: "#0f1f36",
          900: "#08101f",
        },
        "telkom-cyan": {
          DEFAULT: "#00b2e3", // Accent color used for highlights
        },
        "telkom-light-blue": {
          DEFAULT: "#a9d9f7", // Light blue for backgrounds and secondary elements
        },

        // Secondary brand colors
        "telkom-teal": {
          DEFAULT: "#00a4a7", // Used for BCX brand elements
        },
        "telkom-green": {
          DEFAULT: "#89ba17", // Used for Openserve brand elements
        },
        "telkom-orange": {
          DEFAULT: "#ff671f", // Used for alerts and notifications
        },
        "telkom-purple": {
          DEFAULT: "#6e2585", // Used for Swiftnet brand elements
        },

        // Telkom gray palette
        "telkom-gray": {
          DEFAULT: "#6b7280",
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },

        // Status colors
        "status-positive": {
          DEFAULT: "#89ba17",
          50: "#f5fbeb",
        },
        "status-negative": {
          DEFAULT: "#ff671f",
          50: "#fff4ee",
        },
        "status-warning": {
          DEFAULT: "#ffcc00",
          50: "#fffbeb",
        },
        "status-info": {
          DEFAULT: "#4495d4",
          50: "#eef6fc",
        },
        "status-neutral": {
          DEFAULT: "#6b7280",
          50: "#f9fafb",
        },

        // Competitor colors
        "vodacom-red": {
          DEFAULT: "#e60000",
        },
        "mtn-yellow": {
          DEFAULT: "#ffcc00",
        },
        "cellc-orange": {
          DEFAULT: "#f60",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        // Sidebar specific colors
        sidebar: {
          background: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "pulse-opacity": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "slide-out-right": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-opacity": "pulse-opacity 2s ease-in-out infinite",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "slide-out-right": "slide-out-right 0.3s ease-in",
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
