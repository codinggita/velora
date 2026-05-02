import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#13766b',
        },
        secondary: {
            main: '#fdfbf7',
        },
        background: {
            default: '#fdfbf7',
            paper: '#ffffff',
        },
    },
    typography: {
        fontFamily: '"Outfit", "Inter", sans-serif',
    },
    shape: {
        borderRadius: 16,
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#13766b',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
    },
    typography: {
        fontFamily: '"Outfit", "Inter", sans-serif',
    },
    shape: {
        borderRadius: 16,
    },
});
