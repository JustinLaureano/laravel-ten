import { red } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme } from '@mui/material/styles';

// const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

// A custom theme for this app
const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                colorPrimary: {
                    backgroundColor: "white",
                    color: 'rgba(0, 0, 0, .87)'
                }
            }
        }
    },

    palette: {
        mode: 1 !== 1 ? 'dark' : 'light',

        primary: {
            main: '#154476',
          },
          secondary: {
            main: '#1eabbf',
          },
    },
});

export default theme;