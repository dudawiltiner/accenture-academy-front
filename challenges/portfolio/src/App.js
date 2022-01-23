import { ThemeProvider } from "styled-components";
import Footer from "./components/Footer";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import { Line } from "./css/AppCSS";
import { GlobalStyle } from "./css/Global";
import useApp from "./hooks/useApp";

function App() {
  const {theme, setTheme} = useApp()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar changeTheme={setTheme} />
      <Main />
      <Line />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
