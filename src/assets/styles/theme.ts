import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    black: '#000',
    white: '#FFF',
    yellow: '#FFFCDC',
    blue: '#516BEB',
    gray: '#C7C7C7',
  },
  fontSize: {
    xxl: '14rem',
    xl: '7rem',
    l: '5rem',
    m: '4rem',
    s: '3rem',
    xs: '2rem',
    xxs: '1rem',
  },
  devices: {
    mobile: '(min-width: 576px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1400px)',
  },
};

export default theme;
