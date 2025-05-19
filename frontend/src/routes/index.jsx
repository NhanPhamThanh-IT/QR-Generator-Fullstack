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
const Introduction = lazy(() => import('@pages/DocumentationPage/Getting-Started/Introduction'));
const QuickStart = lazy(() => import('@pages/DocumentationPage/Getting-Started/QuickStart'));
const Installation = lazy(() => import('@pages/DocumentationPage/Getting-Started/Installation'));

// Lazy load troubleshooting pages
const CommonIssues = lazy(() => import('@pages/DocumentationPage/Troubleshooting/CommonIssues'));
const FAQ = lazy(() => import('@pages/DocumentationPage/Troubleshooting/FAQ'));
const ErrorCodes = lazy(() => import('@pages/DocumentationPage/Troubleshooting/ErrorCodes'));

// Route wrapper component
const RouteWrapper = ({ children, title }) => (
    <PageLayout title={title}>
        <Suspense fallback={<LoadingFallback />}>
            {children}
        </Suspense>
    </PageLayout>
);

// Main routes configuration
const mainRoutes = [
    {
        path: '/',
        element: Home,
        title: 'Home'
    },
    {
        path: '/tools',
        element: Tools,
        title: 'Tools'
    },
    {
        path: '/contact',
        element: Contact,
        title: 'Contact Us'
    }
];

// Documentation routes configuration
const gettingStartedRoutes = [
    {
        path: 'introduction',
        element: Introduction,
        title: 'Introduction'
    },
    {
        path: 'quick-start',
        element: QuickStart,
        title: 'Quick Start'
    },
    {
        path: 'installation',
        element: Installation,
        title: 'Installation'
    }
];

const troubleshootingRoutes = [
    {
        path: 'common-issues',
        element: CommonIssues,
        title: 'Common Issues'
    },
    {
        path: 'faq',
        element: FAQ,
        title: 'FAQ'
    },
    {
        path: 'errors-code',
        element: ErrorCodes,
        title: 'Error Codes'
    }
];

const AppRoutes = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Routes>
            {/* Main Routes */}
            {mainRoutes.map(({ path, element: Element, title }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <RouteWrapper title={title}>
                            <Element isMobile={isMobile} />
                        </RouteWrapper>
                    }
                />
            ))}

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

                {/* Getting Started Routes */}
                {gettingStartedRoutes.map(({ path, element: Element, title }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <RouteWrapper title={title}>
                                <Element isMobile={isMobile} />
                            </RouteWrapper>
                        }
                    />
                ))}

                {/* Troubleshooting Routes */}
                <Route path="troubleshooting">
                    {troubleshootingRoutes.map(({ path, element: Element, title }) => (
                        <Route
                            key={path}
                            path={path}
                            element={
                                <RouteWrapper title={title}>
                                    <Element isMobile={isMobile} />
                                </RouteWrapper>
                            }
                        />
                    ))}
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
