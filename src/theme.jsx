import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#F58A07',  // blue lse
      contrastText: '#FFFFFF', // White for legibility on dark backgrounds
    },
    secondary: {
      main: '#084887',  // orange
    },
    accent: {
      main: '#FFD700', // Gold
      dark: '#B8860B' //Darker Gold if needed
    },
    background: {
      default: '#f0f2f5',
    },
    text: {
      primary: '#084887', // blue lse
      secondary: 'red',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Or 'Open Sans', 'Arial', etc.
    h1: {
      fontSize: '3rem',
      fontWeight: 500,
      color: '#F58A07'
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 600
    },
    h5: {
      fontSize: '0.8rem',
      fontWeight: 600
    },
    h6: {
      fontSize: '0.8rem',
      color: '#FFFFFF',
      textAlign: 'center',
      mb: 2,
    },
    body1: { //normal paragraphs
      fontSize: '0.8rem',
      color: '#000'
    },
  },
  components: {
    // Style the MuiButton component
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 600,
          margin: '4px 1.5rem',
          padding: 10,
        },
        containedPrimary: {
          '&:hover': {
            backgroundColor: '#98A8BE', //hover over btn
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
      root: {
        backgroundColor: '#00305C',
      }
      }
    },
    MuiStack: {
      styleOverrides: {
        root: {
          backgroundColor: '#084887',//bg blue lse
          padding: '3.4rem 3rem',
        }
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
        size: 'small',
      },
    },  MuiListItemText: {
      styleOverrides: {
        root: {
          color: "#000",
          fontWeight: "bold",
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          padding: 5,
          borderRadius: 8,
          backgroundColor: '#FFFFFF',
          margin: '4px 1.5rem',
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { 
            borderColor: "#F58A07",
            borderWidth: 1,
          },
          "&:hover input": {
            color: '#084887'
          },
          // width: '350px',
        },
        input: {
          color: '#084887',
          fontSize: '13px'
        },
        notchedOutline: {
          borderColor: '#FFFFFF'
        }
      }
    },
  }
});

export default theme;