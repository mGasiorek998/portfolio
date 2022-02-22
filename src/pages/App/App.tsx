import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'assets/styles/GlobalStyle';
import theme from 'assets/styles/theme';
import Hero from 'components/templates/Hero/Hero';
import Welcome from 'components/templates/Welcome/Welcome';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Welcome />
      <Hero />
    </ThemeProvider>
  );
};

export default App;
