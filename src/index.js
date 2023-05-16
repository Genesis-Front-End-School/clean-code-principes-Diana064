import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.js';
import { GlobalStyle } from './components/GlobalStyle';
import { Themebutton } from './components/App.module';

function Root() {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <React.StrictMode>
      <BrowserRouter>
        <ThemeProvider theme={theme[currentTheme]}>
          <GlobalStyle />
          <Themebutton onClick={toggleTheme}>
            {currentTheme === 'light' ? 'Light☀️' : 'Dark🌑'}
          </Themebutton>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
