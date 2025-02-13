/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                'login-bg': "url('/images/bg.jpg')"
            },
            colors: {
                blue_dark: '#003366',
                blue_light: '#66b2ff',
                green: '#2ecc71',
                red_light: '#D88484',
                gray: '#4f4f4f',
                perl: '#f2f2f2',
                orange: '#ffa07a'
            },
        }
    },
    plugins: []
};
