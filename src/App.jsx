import { Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css'
import BasicCard from './components/Card';

const theme = createTheme({
  colorSchemes: {
    dark: true,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>This app is using the dark mode</main>
      <Button variant="contained">Hello world</Button>
      <BasicCard />
    </ThemeProvider>
  )
}

export default App
