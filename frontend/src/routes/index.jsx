import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// Components
import PageLayout from '@components/layout/PageLayout';
import LoadingFallback from '@components/ui/LoadingFallback';

// Lazy load main pages
const Home = lazy(() => import('@pages/MainPage/Home/index'));
const Tools = lazy(() => import('@pages/MainPage/Tools/index'));
const Contact = lazy(() => import('@pages/MainPage/Contact/index'));
const Docs = lazy(() => import('@pages/MainPage/Docs/index'));

// Lazy load documentation pages
const Introduction = lazy(() => import('@pages/DocumentationPage/Getting-Started/Introduction/index'));
const QuickStart = lazy(() => import('@pages/DocumentationPage/Getting-Started/QuickStart/index'));
const Installation = lazy(() => import('@pages/DocumentationPage/Getting-Started/Installation/index'));

// Lazy load core features pages
const AIToolsOverview = lazy(() => import('@pages/DocumentationPage/Core-Features/AIToolsOverview/index'));
const TextGeneration = lazy(() => import('@pages/DocumentationPage/Core-Features/TextGeneration/index'));
const ImageProcessing = lazy(() => import('@pages/DocumentationPage/Core-Features/ImageProcessing/index'));

// Lazy load troubleshooting pages
const CommonIssues = lazy(() => import('@pages/DocumentationPage/Troubleshooting/CommonIssues/index'));
const FAQ = lazy(() => import('@pages/DocumentationPage/Troubleshooting/FAQ/index'));
const ErrorCodes = lazy(() => import('@pages/DocumentationPage/Troubleshooting/ErrorCodes/index'));

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
    { path: '/home', element: Home, title: 'Home' },
    { path: '/tools', element: Tools, title: 'Tools' },
    { path: '/contact', element: Contact, title: 'Contact Us' },
];

// Documentation routes configuration
const gettingStartedRoutes = [
    { path: 'introduction', element: Introduction, title: 'Introduction' },
    { path: 'quick-start', element: QuickStart, title: 'Quick Start' },
    { path: 'installation', element: Installation, title: 'Installation' },
];

const coreFeaturesRoutes = [
    { path: 'ai-tools', element: AIToolsOverview, title: 'AI Tools Overview' },
    { path: 'text-generation', element: TextGeneration, title: 'Text Generation' },
    { path: 'image-processing', element: ImageProcessing, title: 'Image Processing' },
];

const troubleshootingRoutes = [
    { path: 'common-issues', element: CommonIssues, title: 'Common Issues' },
    { path: 'faq', element: FAQ, title: 'FAQ' },
    { path: 'errors-code', element: ErrorCodes, title: 'Error Codes' },
];

const AppRoutes = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Routes>
            {/* Redirect / to /home */}
            <Route path="/" element={<Navigate to="/home" replace />} />

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

                {/* Core Features Routes */}
                {coreFeaturesRoutes.map(({ path, element: Element, title }) => (
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
