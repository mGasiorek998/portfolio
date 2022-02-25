import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import theme from 'assets/styles/theme';
import Hero from 'components/templates/Hero/Hero';
import Welcome from 'components/templates/Welcome/Welcome';
import About from 'components/templates/About/About';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Welcome />
      <Hero />
      <About />
    </ThemeProvider>
  );
};

export default App;
