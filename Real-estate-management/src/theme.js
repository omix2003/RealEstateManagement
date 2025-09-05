import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1e88e5' },
    secondary: { main: '#8e24aa' },
    background: { default: '#f7f9fc' },
  },
  shape: { borderRadius: 10 },
})

export default theme


