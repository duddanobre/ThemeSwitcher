
import Header from './components/header';
import StyleGlobal from './styles/global';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import usePersistedState from './utils/usePersistedState';

function App() {
const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme(){
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
   <ThemeProvider theme={theme}>
       <div className="App">
        <StyleGlobal />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>
   
  );
}

export default App;
