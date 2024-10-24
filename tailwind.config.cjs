module.exports = {
    content: ['./src/**/*.{js,jsx,html}'],
    theme: {
        extend: {
            colors: {
                primary: '#005ba9',
                background: '#f4f7fd',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};