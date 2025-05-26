import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import PageLayout from '@components/layout/PageLayout';
import LoadingFallback from '@components/ui/LoadingFallback';

import { routePaths } from '@constants/routePaths';

// Main Pages
const Home = lazy(() => import('@pages/MainPage/Home'));
const Tools = lazy(() => import('@pages/MainPage/Tools'));
const Contact = lazy(() => import('@pages/MainPage/Contact'));
const Docs = lazy(() => import('@pages/MainPage/Docs'));

// Getting Started Pages
const Introduction = lazy(() => import('@pages/DocumentationPage/GettingStarted/Introduction'));
const QuickStart = lazy(() => import('@pages/DocumentationPage/GettingStarted/QuickStart'));
const Installation = lazy(() => import('@pages/DocumentationPage/GettingStarted/Installation'));

// Core Features Pages
const AIToolsOverview = lazy(() => import('@pages/DocumentationPage/CoreFeatures/AIToolsOverview'));
const TextGeneration = lazy(() => import('@pages/DocumentationPage/CoreFeatures/TextGeneration'));
const ImageProcessing = lazy(() => import('@pages/DocumentationPage/CoreFeatures/ImageProcessing'));

// Advanced Guides Pages
const ToolCombinations = lazy(() => import('@pages/DocumentationPage/AdvancedGuides/ToolCombinations'));
const MaxAccuracy = lazy(() => import('@pages/DocumentationPage/AdvancedGuides/MaxAccuracy'));
const Personalization = lazy(() => import('@pages/DocumentationPage/AdvancedGuides/Personalization'));

// Troubleshooting Pages
const CommonIssues = lazy(() => import('@pages/DocumentationPage/Troubleshooting/CommonIssues'));
const FAQ = lazy(() => import('@pages/DocumentationPage/Troubleshooting/FAQ'));
const ErrorCodes = lazy(() => import('@pages/DocumentationPage/Troubleshooting/ErrorCodes'));

const RouteWrapper = ({ children, title }) => (
    <PageLayout title={title}>
        <Suspense fallback={<LoadingFallback />}>
            {children}
        </Suspense>
    </PageLayout>
);

const mainRoutes = [
    { path: routePaths.home, element: Home, title: 'Home' },
    { path: routePaths.tools, element: Tools, title: 'Tools' },
    { path: routePaths.contact, element: Contact, title: 'Contact Us' },
];

const gettingStartedRoutes = [
    { path: routePaths.docsIntroduction, element: Introduction, title: 'Introduction' },
    { path: routePaths.docsQuickStart, element: QuickStart, title: 'Quick Start' },
    { path: routePaths.docsInstallation, element: Installation, title: 'Installation' },
];

const coreFeaturesRoutes = [
    { path: routePaths.docsAITools, element: AIToolsOverview, title: 'AI Tools Overview' },
    { path: routePaths.docsTextGeneration, element: TextGeneration, title: 'Text Generation' },
    { path: routePaths.docsImageProcessing, element: ImageProcessing, title: 'Image Processing' },
];

const advancedGuidesRoutes = [
    { path: routePaths.docsToolCombinations, element: ToolCombinations, title: 'Tool Combinations' },
    { path: routePaths.docsMaxAccuracy, element: MaxAccuracy, title: 'Maximizing Accuracy' },
    { path: routePaths.docsPersonalization, element: Personalization, title: 'Personalization' },
];

const troubleshootingRoutes = [
    { path: routePaths.docsCommonIssues, element: CommonIssues, title: 'Common Issues' },
    { path: routePaths.docsFAQ, element: FAQ, title: 'FAQ' },
    { path: routePaths.docsErrorCodes, element: ErrorCodes, title: 'Error Codes' },
];

const renderRoutes = (routes, isMobile) => {
    return routes.map(({ path, element: Element, title }) => (
        <Route
            key={path}
            path={path}
            element={
                <RouteWrapper title={title}>
                    <Element isMobile={isMobile} />
                </RouteWrapper>
            }
        />
    ));
};

const AppRoutes = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Routes>
            <Route path="/" element={<Navigate to={routePaths.home} replace />} />

            {renderRoutes(mainRoutes, isMobile)}

            <Route path={routePaths.docs}>
                <Route
                    index
                    element={
                        <RouteWrapper title="Documentation">
                            <Docs isMobile={isMobile} />
                        </RouteWrapper>
                    }
                />

                <Route path={routePaths.docsGettingStarted}>
                    {renderRoutes(gettingStartedRoutes, isMobile)}
                </Route>

                <Route path={routePaths.docsCoreFeatures}>
                    {renderRoutes(coreFeaturesRoutes, isMobile)}
                </Route>

                <Route path={routePaths.docsAdvancedGuides}>
                    {renderRoutes(advancedGuidesRoutes, isMobile)}
                </Route>

                <Route path={routePaths.docsTroubleshooting}>
                    {renderRoutes(troubleshootingRoutes, isMobile)}
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
