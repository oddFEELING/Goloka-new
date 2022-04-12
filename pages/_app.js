import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import Theme from '../assets/theme/Theme';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
