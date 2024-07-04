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
                custom: '#ac6418',
                custom2: '#ecbb54'
            },
            colors: {
                custom: '#ac6418',
                custom2: '#ecbb54'
            },
            backgroundColor: {
                custom: '#ac6418',
                custom2: '#ecbb54'
            },
        },
    },

    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["dark"],
                    "warning": "#ecbb54",
                    "base-content": "#ffffff"
                }
            },
            {
                light: {
                    ...require("daisyui/src/theming/themes")["light"],
                    "warning": "#ecbb54",
                    "base-200":"#ffffff"
                }
            },
        ],
    },
};
export default config;
