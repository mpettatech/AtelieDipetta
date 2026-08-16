import { ThemeProvider } from "./context/ThemeContext";
import { AppProvider } from "./context/AppContext";
import ProgressBar from "./components/ui/ProgressBar";
import ToastViewport from "./components/ui/Toast";
import HomePage from "./pages/HomePage";

/**
 * App — composition root. Wraps the page in ThemeProvider (dark/light
 * mode) and AppProvider (mobile menu + toast state), and mounts the
 * global scroll progress bar and toast viewport alongside the page.
 */
function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <ProgressBar />
        <HomePage />
        <ToastViewport />
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
