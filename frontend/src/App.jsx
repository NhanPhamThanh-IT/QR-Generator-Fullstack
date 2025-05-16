import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

// Layout components
import Layout from '@components/layout/Layout';

// Main Pages
import Home from '@pages/MainPage/Home';
import Tools from '@pages/MainPage/Tools';
import Contact from '@pages/MainPage/Contact';
import Docs from '@pages/MainPage/Docs';

// Documentation Pages
import Introduction from '@pages/DocumentationPage/Introduction';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/docs/introduction" element={<Introduction />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;