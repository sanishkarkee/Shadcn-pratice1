import './App.css';
import { ModeToggle } from './components/mode-toggle';
import Login from './Pages/Login';
import { ThemeProvider } from '@/components/theme-provider';

function App() {
  return (
    <>
      <ThemeProvider>
        <ModeToggle />
        <Login />
      </ThemeProvider>
    </>
  );
}

export default App;
