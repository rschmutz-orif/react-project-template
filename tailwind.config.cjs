module.exports = {
    content: ['./src/**/*.{js,jsx,html}'],
    theme: {
        extend: {
            colors: {
                primary: '#005ba9',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};