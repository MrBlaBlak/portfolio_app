import type {Config} from "tailwindcss";

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
            borderColor: {
                darkOrange: '#ac6418',
                deepGold: '#ecbb54',
                shinyGold: '#fbbf24'
            },
            colors: {
                darkOrange: '#ac6418',
                deepGold: '#ecbb54',
                shinyGold: '#fbbf24'
            },
            backgroundColor: {
                darkOrange: '#ac6418',
                deepGold: '#ecbb54',
                shinyGold: '#fbbf24'
            },
        },
    },

    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    "warning": "#ecbb54",
                    "base-200":"#ffffff",
                    "base-300":"#ffffff",
                    "neutral": "#aaaaaa"
                }
            },
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "warning": "#ecbb54",
                    "base-content": "#ffffff"
                }
            },

        ],
    },
};
export default config;
