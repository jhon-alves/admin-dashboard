import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ProSidebarProvider } from 'react-pro-sidebar';

// MUI
import { CssBaseline, ThemeProvider } from '@mui/material';

// Components
import { SidebarAdmin } from './components/Sidebar/SidebarAdmin';
import { ColorModeContext, useMode } from './theme';
import { TopBar } from './components/TopBar';
import { MyRoutes } from './routes';

export function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <Router>
            <div className="app">
              <SidebarAdmin isSidebar={isSidebar} />
              <main className="content">
                <TopBar setIsSidebar={setIsSidebar} />
                <MyRoutes />
              </main>
            </div>
          </Router>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}