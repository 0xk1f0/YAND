module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                surface: {
                    100: '#060406',
                    200: '#0d090c',
                    300: '#130d13',
                    400: '#1a1219',
                    500: '#20161F',
                    600: '#4d454c',
                    700: '#797379',
                    800: '#a6a2a5',
                    900: '#d2d0d2'
                },
                primary: {
                    100: '#272013',
                    200: '#4f4026',
                    300: '#765f3a',
                    400: '#9e7f4d',
                    500: '#c59f60',
                    600: '#d1b280',
                    700: '#dcc5a0',
                    800: '#e8d9bf',
                    900: '#f3ecdf'
                }
            },
            spacing: {
                '3quarters': '75%',
                half: '50%',
                quarter: '25%',
                '1/20': '5%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%'
            },
            height: {
                '3quarters': '75%',
                half: '50%',
                quarter: '25%',
                '1/20': '5%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%'
            },
            width: {
                '3quarters': '75%',
                half: '50%',
                quarter: '25%',
                '1/20': '5%',
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%'
            },
        }
    },
    plugins: []
};
