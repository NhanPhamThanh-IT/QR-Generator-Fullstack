import { Routes, Route } from 'react-router-dom';
import PageLayout from '@components/layout/PageLayout';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Main Pages
import Home from '@pages/MainPage/Home';
import Tools from '@pages/MainPage/Tools';
import Contact from '@pages/MainPage/Contact';
import Docs from '@pages/MainPage/Docs';

// Documentation Pages
import Introduction from '@pages/DocumentationPage/Introduction';

const AppRoutes = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <PageLayout title="Home">
                        <Home isMobile={isMobile} />
                    </PageLayout>
                }
            />
            <Route
                path="/tools"
                element={
                    <PageLayout title="Tools">
                        <Tools isMobile={isMobile} />
                    </PageLayout>
                }
            />
            <Route
                path="/docs"
                element={
                    <PageLayout title="Documentation">
                        <Docs isMobile={isMobile} />
                    </PageLayout>
                }
            />
            <Route
                path="/contact"
                element={
                    <PageLayout title="Contact Us">
                        <Contact isMobile={isMobile} />
                    </PageLayout>
                }
            />
            <Route
                path="/docs/introduction"
                element={
                    <PageLayout title="Introduction">
                        <Introduction isMobile={isMobile} />
                    </PageLayout>
                }
            />
        </Routes>
    );
};

export default AppRoutes;
