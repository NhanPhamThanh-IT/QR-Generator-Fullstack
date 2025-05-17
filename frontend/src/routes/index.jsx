import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Components
import PageLayout from '@components/layout/PageLayout';
import LoadingFallback from '@components/ui/LoadingFallback';

// Lazy load main pages
const Home = lazy(() => import('@pages/MainPage/Home'));
const Tools = lazy(() => import('@pages/MainPage/Tools'));
const Contact = lazy(() => import('@pages/MainPage/Contact'));
const Docs = lazy(() => import('@pages/MainPage/Docs'));

// Lazy load documentation pages
const Introduction = lazy(() => import('@pages/DocumentationPage/Introduction'));

// Route wrapper component
const RouteWrapper = ({ children, title }) => (
    <PageLayout title={title}>
        <Suspense fallback={<LoadingFallback />}>
            {children}
        </Suspense>
    </PageLayout>
);

const AppRoutes = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Routes>
            {/* Main Routes */}
            <Route
                path="/"
                element={
                    <RouteWrapper title="Home">
                        <Home isMobile={isMobile} />
                    </RouteWrapper>
                }
            />
            <Route
                path="/tools"
                element={
                    <RouteWrapper title="Tools">
                        <Tools isMobile={isMobile} />
                    </RouteWrapper>
                }
            />
            <Route
                path="/contact"
                element={
                    <RouteWrapper title="Contact Us">
                        <Contact isMobile={isMobile} />
                    </RouteWrapper>
                }
            />

            {/* Documentation Routes */}
            <Route path="/docs">
                <Route
                    index
                    element={
                        <RouteWrapper title="Documentation">
                            <Docs isMobile={isMobile} />
                        </RouteWrapper>
                    }
                />
                <Route
                    path="introduction"
                    element={
                        <RouteWrapper title="Introduction">
                            <Introduction isMobile={isMobile} />
                        </RouteWrapper>
                    }
                />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
